"use strict";

const should = require('should');
const BaseAutoBind = require('../');

class MixinClass extends BaseAutoBind {

    constructor() {
        super();
        this.name = 'mixed';
    }

    whatSayYouThis() {
        return this.name;
    }
}

class UnmixedTrashClass {
    constructor() {
        this.name = 'umixed';
    }

    whatSayYouThis() {
        return this.name;
    }
}

describe('BaseAutoBind', () => {
    it('without, it should throw', () => {

        let unmixed = new UnmixedTrashClass();
        let umFn = unmixed.whatSayYouThis;

        (function(){ 
            umFn();
        }).should.throw();
    });

    it('with, it should not!', () => {
        let mixed = new MixinClass();
        let mFn = mixed.whatSayYouThis;
        mFn().should.equal('mixed');
    });
});
