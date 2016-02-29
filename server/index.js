require('babel-register');
require('lodash').defaults(process.env, require('../configs/env'));
require('debug').enable(process.env.DEBUG);
new (require('./Application').default);
