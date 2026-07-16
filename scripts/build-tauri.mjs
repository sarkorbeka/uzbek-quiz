import { spawnSync } from 'node:child_process';
import { copyFileSync, existsSync, readFileSync, unlinkSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import process from 'node:process';

const target = process.argv[2];
const variant = process.argv[3] || 'test-1';
const rootDir = process.cwd();
const questionsPath = path.join(rootDir, 'src', 'questions.js');
const variantName = variant === 'default' ? 'test-1' : variant;
const variantPath = path.join(rootDir, 'src', 'question-sets', `${variantName}.js`);
const backupPath = path.join(rootDir, 'src', '.questions.js.backup');
let restoreQuestions = null;

if (target === 'mac') {
  if (process.platform !== 'darwin') {
    console.error('tauri:build:mac must be run on macOS.');
    process.exit(1);
  }
} else if (target === 'windows') {
  if (process.platform !== 'win32') {
    console.error('tauri:build:windows must be run on Windows or a Windows CI runner.');
    process.exit(1);
  }
} else if (target === 'portable') {
  if (process.platform !== 'win32') {
    console.error('tauri:build:portable must be run on Windows or a Windows CI runner.');
    process.exit(1);
  }
} else {
  console.error('Usage: node ./scripts/build-tauri.mjs <mac|windows|portable> [variant]');
  process.exit(1);
}

if (target === 'portable') {
  if (!existsSync(variantPath)) {
    console.error(`Question set not found: ${variantPath}`);
    process.exit(1);
  }

  copyFileSync(questionsPath, backupPath);
  writeFileSync(questionsPath, readFileSync(variantPath));
  restoreQuestions = () => {
    if (existsSync(backupPath)) {
      copyFileSync(backupPath, questionsPath);
      unlinkSync(backupPath);
    }
  };
}

const npmExecPath = process.env.npm_execpath;

if (!npmExecPath) {
  console.error('npm_execpath is not set.');
  process.exit(1);
}

const tauriArgs = target === 'portable' ? ['exec', '--', 'tauri', 'build', '--bundles', 'none'] : ['exec', '--', 'tauri', 'build'];

const result = spawnSync(process.execPath, [npmExecPath, ...tauriArgs], {
  stdio: 'inherit',
});

if (result.error) {
  console.error(result.error.message);
  if (restoreQuestions) {
    restoreQuestions();
  }
  process.exit(1);
}

if (restoreQuestions) {
  restoreQuestions();
}

process.exit(result.status ?? 1);
