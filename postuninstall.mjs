import { unlink } from 'fs';
import { join } from 'path';

unlink(join(process.env.INIT_CWD,'.prettierrc'), (err) => {
  if (err) {console.log('.prettierrc does not exist!')};
  // Completed
});
unlink(join(process.env.INIT_CWD,'.eslintrc'), (err) => {
  if (err) {console.log('.eslintrc does not exist!')};
  // Completed
});