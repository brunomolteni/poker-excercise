"use strict";

const expect = require('chai').expect;
const _ = require('lodash');

const helper = require('./helper');

describe('helper', () => {

    describe('cards', () => {

        it('should return an array containing the cards in the hand', () => {

            let hand = '2c3c4c5c6c';
            let handCards = helper.cards(hand, 2);

            expect(handCards[0]).to.equal('2c');
            expect(handCards[1]).to.equal('3c');
            expect(handCards[2]).to.equal('4c');
            expect(handCards[3]).to.equal('5c');
            expect(handCards[4]).to.equal('6c');

        });

    });

    describe('randomizeHandOrder', () => {

        it('should return an array containing the same cards as the original hand', () => {

            let hand = '2c3c4c5c6c';
            let handCards = helper.cards(hand, 2);

            let randomized = helper.randomizeHandOrder(hand);
            let randomizedCards = helper.cards(randomized);

            expect(hand).not.to.equal(randomized);
            expect(_.xor(handCards, randomizedCards)).to.be.empty;

        });

    });

    describe('testEntry', () => {

        it('should return `true` when all iterations of the testEntry pass', () => {

            let hand = '2c3c4c5c6c';

            expect(helper.testEntry({ hand, valid: true }, () => true)).to.be.true;

        });

        it('should return information about the failing iteration if one or more of the iterations of the testEntry fail', () => {

            let hand = '2c3c4c5c6c';
            let iterations = 0;

            let result = helper.testEntry({ hand, valid: true }, () => iterations++ === 0);
            expect(result).not.to.be.true;
            expect(result).to.have.property('originalHand', hand);
            expect(result).to.have.all.keys('originalHand', 'hand', 'pass', 'expected');

        });

    });

});