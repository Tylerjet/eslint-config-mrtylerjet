import { unlink } from 'fs';
import { join } from 'path';

unlink(join(process.env.INIT_CWD,'.prettierrc'), (err) => {
  if (err) {};
  // Completed
});
unlink(join(process.env.INIT_CWD,'eslint.config.mjs'), (err) => {
  if (err) {};
  // Completed
});