const path = require('path');

module.exports = {
   entry: './webpack-demo/src/index.js',
    output: {
         filename: 'bundle.js',
         path: path.resolve(__dirname, 'dist')

},
mode: 'development'
};