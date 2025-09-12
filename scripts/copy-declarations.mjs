import { readdir, cp } from 'node:fs/promises';
import { join } from 'node:path';

async function copyDeclarations(dir) {
  let files = [];
  const entries = await readdir(dir, { withFileTypes: true });

  for (let entry of entries) {
    const source = join(dir, entry.name);
    if (entry.isDirectory()) {
      files = files.concat(await copyDeclarations(source));
    } else {
      let dest = source.replace(/^declarations/g, 'dist');
      if (/\.gts\.d\.ts/.test(dest)) {
        dest = dest.replace(/\.gts\.d\.ts/, '.d.ts');
      }
      cp(source, dest);
    }
  }
  return files;
}

console.log('Copying declarations files to /dist');
await copyDeclarations('./declarations');
console.log('All declarations files have been copied');
