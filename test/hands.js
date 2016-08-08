"use strict";

function entry(hand, valid) {
    return { hand, valid };
}

module.exports = {
    straightFlush: [
        entry('Jc0c9c8c7c', true),
        entry('Jc0h9d8c7d', false),
        entry('3c2cAcKcQc', false),
        entry('AdKdQdJd0d', true)
    ],
    fourOfAKind: [
        entry('4c4d4h4s5h', true),
        entry('AcAdAhAs5h', true),
        entry('4c4d4h3s5h', false)
    ],
    fullHouse: [
        entry('4c4d4h2s2c', true),
        entry('4c4d3h2s2c', false)
    ],
    flush: [
        entry('2c7cJcQc3c', true),
        entry('2c3d4h5c6s', false)
    ],
    straight: [
        entry('Ah2d3s4h5c', true),
        entry('Ah2h3h4h5h', false), // is a "straight flush", not a flush
        entry('JcQdKhAs2c', false), // no "wrapping around" - aces can be high (>K) or low (<2), but not both
        entry('4c5d6s7h8s', true),
        entry('0cJdQhKsAs', true)
    ],
    threeOfAKind: [
        entry('3h3c3d2s4s', true),
        entry('3h3c3d2s2d', false), // is a "full house"
        entry('3h3c2s6dAs', false)
    ],
    twoPair: [
        entry('3h3c2s2d8h', true),
        entry('3h3c3d2s4s', false), // is a "three of a kind"
        entry('2h3c3d7h0s', false)  // is a "one pair"
    ],
    onePair: [
        entry('3h3c2s8h0c', true),
        entry('3h3c2s2d8h', true), // is a "two pair"
        entry('3h8d9c0sAc', false)
    ]
};