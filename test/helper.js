"use strict";

const _ = require('lodash');
const hands = require('./hands');

function randomizeHandOrder(hand) {
    return _.shuffle(cards(hand)).join('');
}

function cards(hand) {
    return _.chain(hand)
        .chunk(2)
        .map(chunk => chunk.join(''))
        .value();
}

/**
 * to ensure that the comparer implementation is not depending on the cards being in a particular order,
 * the test is run against a randomized randomized version of the hand several times in addition to the original
 * form of the hand
 * @param entry {Object}
 * @param entry.hand {String}
 * @param entry.valid {Boolean}
 * @param comparer {Function}
 * @param iterations {Number}
 * @returns {boolean|{originalHand,hand,pass,expected}}
 */
function testEntry(entry, comparer, iterations = 5) {

    let results = _.map(_.range(0, iterations + 1), iteration => {

        // use the hand in its original form for the first iteration, but randomize for subsequent iterations
        let hand = iteration === 0 ? entry.hand : randomizeHandOrder(entry.hand);

        return {
            originalHand: entry.hand,
            hand,
            pass: entry.valid === comparer(hand),
            expected: entry.valid
        };

    });

    let failingResult = _.find(results, result => !result.pass);

    if (failingResult === undefined) {
        return true;
    }

    return `${comparer.name} returned ${failingResult.pass} for hand ${failingResult.hand} (originally ${failingResult.originalHand}), but it should have been ${failingResult.expected}.`;
}

function test(handType, comparer) {

    if (!hands.hasOwnProperty(handType)) {
        throw new Error(`Couldn't find entries for ${handType}.`);
    }

    let results = _.map(hands[handType], entry => testEntry(entry, comparer));

    return _.find(results, result => result !== true) || true;

}

module.exports = {
    cards,
    randomizeHandOrder,
    testEntry,
    test
};