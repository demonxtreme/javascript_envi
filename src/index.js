import './index.css';
import numeral from 'numeral';

const courseValue = numeral(1000).format('$0,0.00');
// to debug the code using sourcemaps
console.log(`I would pay ${courseValue} for this awesome course!`);  // eslint-disable-line no-console

