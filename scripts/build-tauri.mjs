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
} else {
  console.error('Usage: node ./scripts/build-tauri.mjs <mac|windows>');
  process.exit(1);
}

const result = spawnSync('tauri', ['build'], { stdio: 'inherit' });

process.exit(result.status ?? 1);
