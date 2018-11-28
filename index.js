const _ = require('underscore');

// core module
// file or folder
// npm_module

var result = _.contains([1, 2, 3], 2);
console.log(result);

var res = _.countBy([1, 2, 3, 4, 5], (num) => {
    return num % 2 == 0 ? 'even' : 'odd';
});
console.log(res);