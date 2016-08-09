"use strict";

const expect = require('chai').expect;
const _ = require('lodash');

const helper = require('./helper');
const validator = require('../src/validator');

describe('validator', () => {

    _.each(_.keys(validator), (handType) => {

        describe(handType, () => {

            it(`should match valid ${handType} hands`, () => {

                expect(helper.test(handType, validator[handType], true)).to.be.true;

            });

            it(`should not match invalid ${handType} hands`, () => {

                expect(helper.test(handType, validator[handType], false)).to.be.true;

            });

        });

    });

});