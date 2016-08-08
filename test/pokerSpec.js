"use strict";

const expect = require('chai').expect;
const _ = require('lodash');

const helper = require('./helper');
const poker = require('../src/poker');

const MIN_IMPLEMENTATIONS = 3;

describe('poker', () => {

    describe('hand types', () => {

        it(`should expose at least ${MIN_IMPLEMENTATIONS} hand types`, () => {

            expect(_.keys(poker)).to.have.length.of.at.least(MIN_IMPLEMENTATIONS);

        });

    });

    _.each(_.keys(poker), (handType) => {

        describe(handType, () => {

            it(`should match valid ${handType} hands`, () => {

                expect(helper.test(handType, poker[handType])).to.be.true;

            });

        });

    });

});