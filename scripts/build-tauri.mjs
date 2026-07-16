import { spawnSync } from 'node:child_process';
import process from 'node:process';

const target = process.argv[2];

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
  console.error('Usage: node ./scripts/build-tauri.mjs <mac|windows|portable>');
  process.exit(1);
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
  process.exit(1);
}

process.exit(result.status ?? 1);
