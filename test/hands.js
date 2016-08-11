"use strict";

module.exports = {
    straightFlush: {
        valid: [
            'Jc0c9c8c7c',
            'AdKdQdJd0d',
            'Ad2d3d4d5d'
        ],
        invalid: [
            'Jc0h9d8c7d',
            '3c2cAcKcQc'
        ]
    },
    fourOfAKind: {
        valid: [
            '4c4d4h4s5h',
            'AcAdAhAs5h'
        ],
        invalid: [
            '4c4d4h3s5h',
            '4c4d7h3s5h'
        ]
    },
    fullHouse: {
        valid: [
            '4c4d4h2s2c',
            'AhAdAsQhQs'
        ],
        invalid: [
            '4c4d3h2s2c',
            '4c4d4hQs2c'
        ]
    },
    flush: {
        valid: [
            '2c7cJcQc3c'
        ],
        invalid: [
            '2c3d4h5c6s',
            '2c7cJcQc3h',
            '2h7cJcQc3c'
        ]
    },
    straight: {
        valid: [
            'Ah2d3s4h5c',
            '4c5d6s7h8s',
            '0cJdQhKsAs'
        ],
        invalid: [
            'Ah2h3h4h5h', // is a "straight flush", not a flush
            'JcQdKhAs2c', // no "wrapping around" - aces can be high (>K) or low (<2), but not both
            '2c2d2s6c6s'  // full house
        ]
    },
    threeOfAKind: {
        valid: [
            '3h3c3d2s4s',
            'AsAhAd3dQh'
        ],
        invalid: [
            '3h3c3d2s2d', // is a "full house"
            '4c4d4h4s5h', // is "four of a kind"
            '3h3c2s6dAs'
        ]
    },
    twoPair: {
        valid: [
            '3h3c2s2d8h'
        ],
        invalid: [
            '3h3c3d2s4s', // is a "three of a kind"
            '2h3c3d7h0s'  // is a "one pair"
        ]
    },
    onePair: {
        valid: [
            '3h3c2s8h0c'
        ],
        invalid: [
            '3h3c2s2d8h', // is a "two pair"
            '3h3c3d2s4s', // is a "three of a kind"
            '4c4d4h4s5h', // is "four of a kind"
            '3h8d9c0sAc'
        ]
    }
};