import copyFile from 'fs';
import join from 'path';

copyFile('.eslintrc', join([process.env.INIT_CWD, '.eslintrc']) (err) => {
  if (err) throw err;
});
copyFile('.prettierrc', join([process.env.INIT_CWD, '.prettierrc']), (err) => {
  if (err) throw err;
});
