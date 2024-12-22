import { copyFile } from 'fs';
import { join } from 'path';

copyFile('eslint.config.mjs', join(process.env.INIT_CWD, 'eslint.config.mjs'), (err) => {
  if (err) throw err;
});
copyFile('.prettierrc', join(process.env.INIT_CWD, '.prettierrc'), (err) => {
  if (err) throw err;
});
