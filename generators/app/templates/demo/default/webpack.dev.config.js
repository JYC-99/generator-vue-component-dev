/* eslint-disable */

var config = require('./webpack.config.js');

config.resolve.alias['<%= packageName %>'] = '../../src/index.vue';

module.exports = config;
