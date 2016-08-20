"use strict";

const _ = require('lodash');

const helper = require('../test/helper.js');

// helper function that returns a sorted array with the ammount of repeated values in a hand
function valuesCount(hand){
  let handCards = helper.cards(hand);
  let valuesArr =  _.map( handCards , hand => hand.split('').shift() );

  return  _(valuesArr).countBy().values().value().sort( (a,b) => a-b );
}

// helper function that returns a string of all the values in the hand, ordered and with the ace in the correct position
function orderedValues(hand){
  let handCards = helper.cards(hand);
  let orderedValues = _(handCards).map( hand => hand.split('').shift() ).sortBy(number => '234567890JQKA'.indexOf(number)).value();
  // we move the ace to the beggining if it may work as a straight
  if(_(orderedValues).head() === '2' && _(orderedValues).last() === 'A' ) orderedValues.unshift( orderedValues.pop() );

  return _(orderedValues).sum();
}

function straightFlush(hand) {
    return flush(hand) && _.includes( 'A234567890JQKA' , orderedValues(hand) );
}

function fourOfAKind(hand) {
    return _.includes( valuesCount(hand) , 4 );
}

function fullHouse(hand) {
    return _.isEqual( valuesCount(hand) , [2,3]);
}

function flush(hand) {
    let handCards = helper.cards(hand);
    return _(handCards).map( hand => hand.split('').pop() ).uniq().value().length === 1;
}

function straight(hand) {
    return !flush(hand) && _.includes( 'A234567890JQKA' , orderedValues(hand) );
}

function threeOfAKind(hand) {
    return _.isEqual( valuesCount(hand) , [1,1,3] );
}

function twoPair(hand) {
    return _.isEqual( valuesCount(hand) , [1,2,2]);
}

function onePair(hand) {
    return _.isEqual( valuesCount(hand) , [1,1,1,2] );
}

module.exports = {
    straightFlush,
    fourOfAKind,
    fullHouse,
    flush,
    straight,
    threeOfAKind,
    twoPair,
    onePair
};
