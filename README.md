# Poker JavaScript Exercise

In this exercise, you will be implementing portions of a text-based poker game. In this game, cards are represented using lowercase letters for suits:

```
cdhs
│││└ Spades
││└─ Hearts
│└── Diamonds
└─── Clubs
```

...and numeric or uppercase letters for face values:

```
234567890JQKA
        └──── 10
```

A single card is represented as a pair of characters consisting of a face value and suit:

```
As (Ace of Spades)
```

A hand is represented as a sequence of 10 characters consisting of 5 cards:

```
AsQh0d5cJd
└┤└┤└┤└┤└┴─ Jack of Diamonds
 │ │ │ └─── 5 of Clubs
 │ │ └───── 10 of Diamonds
 │ └─────── Queen of Hearts
 └───────── Ace of Spades
```

Each validator implementation will be passed a single parameter containing a hand. It is guaranteed to be of the correct length and contain valid card (no hand format validation is necessary for this exercise).

The validator must return `true` if the hand is valid for the implemented hand type; or `false` if the hand is invalid.

Jokers or wilds are excluded from this exercise. 

See the [Wikipedia List of Poker Hands](https://en.wikipedia.org/wiki/List_of_poker_hands) for detailed rules.

The unit tests use the [Mocha](https://mochajs.org/) test framework and [Chai](http://chaijs.com/api/bdd/) assertion library.

This project includes the [Lodash](https://lodash.com/docs) utility library. Do not use any other dependencies.

## Instructions

1. Fork and clone this repository.
1. Run `npm install`.
1. Install mocha globally by running `npm install -g mocha`.
1. Implement poker hand validators for (see stubs in `src/validator.js`):
  * *At least one of*: `flush`, `onePair`, `twoPair`, `threeOfAKind`, `fourOfAKind`
  * And *at least two of*: `straight`, `fullHouse`, `straightFlush`
1. Uncomment the export lines for the validators you implemented at the bottom of the file.
1. Run the commmand `mocha` from the root of the project to run the tests. All tests should pass.  