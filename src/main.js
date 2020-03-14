import update from './update.js';
import TextClock from './matt1';


// even though Rollup is bundling all your files together, errors and
// logs will still point to your original source modules
console.log('if you have sourcemaps enabled in your devtools, click on main.js:5 -->');

update();
const span = document.querySelector('#time-now-matt1');
const tc = new TextClock(span,60*10*1000);
tc.update2();

const span2 = document.querySelector('#time-now-matt2');
const tc2 = new TextClock(span2,60*20*1000);
tc2.update2();

