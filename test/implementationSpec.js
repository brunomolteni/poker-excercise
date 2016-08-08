"use strict";

const expect = require('chai').expect;
const _ = require('lodash');

const helper = require('./helper');
const validator = require('../src/validator');

const IMPL_GROUPS = {
    a: [`flush`, `onePair`, `twoPair`, `threeOfAKind`, `fourOfAKind`],
    b: [`straight`, `fullHouse`, `straightFlush`]
};

const MIN_IMPLEMENTATIONS = {
    a: 1,
    b: 2
};

describe('implementation', () => {

    it(`should implement validators for at least ${MIN_IMPLEMENTATIONS.a} of ${IMPL_GROUPS.a.join(', ')}`, () => {

        expect(_.intersection(_.keys(validator), IMPL_GROUPS.a)).to.have.length.of.at.least(MIN_IMPLEMENTATIONS.a);

    });

    it(`should implement validators for at least ${MIN_IMPLEMENTATIONS.b} of ${IMPL_GROUPS.b.join(', ')}`, () => {

        expect(_.intersection(_.keys(validator), IMPL_GROUPS.b)).to.have.length.of.at.least(MIN_IMPLEMENTATIONS.b);

    });

});