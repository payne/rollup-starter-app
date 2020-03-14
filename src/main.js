import update from './update.js';
import TextClock from './matt1';


// even though Rollup is bundling all your files together, errors and
// logs will still point to your original source modules
console.log('if you have sourcemaps enabled in your devtools, click on main.js:5 -->');

update();
const span = document.querySelector('#time-now-matt1');
const tc = new TextClock(span);
tc.update2();


