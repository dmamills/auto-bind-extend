"use strict";
const autoBind = require('auto-bind');

class BaseAutoBind {
    constructor() {
        autoBind(this);
    }
}

module.exports = BaseAutoBind;
