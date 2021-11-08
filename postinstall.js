const { copyFile } = require('fs');

copyFile('.eslintrc', '../../.eslintrc', (err) => {
  if (err) throw err;
});
copyFile('.prettierrc', '../../.prettierrc', (err) => {
  if (err) throw err;
});
