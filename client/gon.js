'use strict';

console.log(global.gon);
module.exports = global.gon;
global.gon = 'Require the gon module to use this!';
