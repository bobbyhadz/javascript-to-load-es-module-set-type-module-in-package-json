// Warning: To load an ES module, set "type" - "module" in JS

import moment from 'moment';
import sum, {num} from './another-file.js';

console.log(moment().format());

console.log(sum(num, num));
