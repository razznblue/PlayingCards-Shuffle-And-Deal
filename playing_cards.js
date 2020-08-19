// Create Card Class
class Card {
  constructor(name, id, suit, cardValue, color, isFaceCard = true) {
    this.cardName = name;
    this.id = id;
    this.suit = suit;
    this.value = cardValue;
    this.color = color;
    this.isFaceCard = isFaceCard;
  }
}

// <------- DIAMONDS -------> //
// prettier-ignore
Ace_Of_Diamonds = new Card("Ace_Of_Diamonds", "AD", "diamonds", 'Ace', "red", false);
Two_Of_Diamonds = new Card(
  "Two_Of_Diamonds",
  "2D",
  "diamonds",
  2,
  "red",
  false
);
// prettier-ignore
Three_Of_Diamonds = new Card("Three_Of_Diamonds", "3D", "diamonds", 3, "red", false);
Four_Of_Diamonds = new Card(
  "Four_Of_Diamonds",
  "4D",
  "diamonds",
  4,
  "red",
  false
);
Five_Of_Diamonds = new Card(
  "Five_Of_Diamonds",
  "5D",
  "diamonds",
  5,
  "red",
  false
);
Six_Of_Diamonds = new Card(
  "Six_Of_Diamonds",
  "6D",
  "diamonds",
  6,
  "red",
  false
);
// prettier-ignore
Seven_Of_Diamonds = new Card("Seven_Of_Diamonds", "7D", "diamonds", 7, "red", false);
// prettier-ignore
Eight_Of_Diamonds = new Card("Eight_Of_Diamonds", "8D", "diamonds", 8, "red", false);
Nine_Of_Diamonds = new Card(
  "Nine_Of_Diamonds",
  "9D",
  "diamonds",
  9,
  "red",
  false
);
Ten_Of_Diamonds = new Card(
  "Ten_Of_Diamonds",
  "10D",
  "diamonds",
  10,
  "red",
  false
);
Jack_Of_Diamonds = new Card(
  "Jack_Of_Diamonds",
  "JD",
  "diamonds",
  "Jack",
  "red",
  true
);
// prettier-ignore
Queen_Of_Diamonds = new Card("Queen_Of_Diamonds", "QD", "diamonds", 'Queen', "red", true);
King_Of_Diamonds = new Card(
  "King_Of_Diamonds",
  "KD",
  "diamonds",
  "King",
  "red",
  true
);

// <------- HEARTS -------> //
Ace_Of_Hearts = new Card("Ace_Of_Hearts", "AH", "hearts", "Ace", "red", false);
Two_Of_Hearts = new Card("Two_Of_Hearts", "2H", "hearts", 2, "red", false);
Three_Of_Hearts = new Card("Three_Of_Hearts", "3H", "hearts", 3, "red", false);
Four_Of_Hearts = new Card("Four_Of_Hearts", "4H", "hearts", 4, "red", false);
Five_Of_Hearts = new Card("Five_Of_Hearts", "5H", "hearts", 5, "red", false);
Six_Of_Hearts = new Card("Six_Of_Hearts", "6H", "hearts", 6, "red", false);
Seven_Of_Hearts = new Card("Seven_Of_Hearts", "7H", "hearts", 7, "red", false);
Eight_Of_Hearts = new Card("Eight_Of_Hearts", "8H", "hearts", 8, "red", false);
Nine_Of_Hearts = new Card("Nine_Of_Hearts", "9H", "hearts", 9, "red", false);
Ten_Of_Hearts = new Card("Ten_Of_Hearts", "10H", "hearts", 10, "red", false);
Jack_Of_Hearts = new Card(
  "Jack_Of_Hearts",
  "JH",
  "hearts",
  "Jack",
  "red",
  true
);
Queen_Of_Hearts = new Card(
  "Queen_Of_Hearts",
  "QH",
  "hearts",
  "Queen",
  "red",
  true
);
King_Of_Hearts = new Card(
  "King_Of_Hearts",
  "KH",
  "hearts",
  "King",
  "red",
  true
);

// <------- CLUBS -------> //
Ace_Of_Clubs = new Card("Ace_Of_Clubs", "AC", "clubs", "Ace", "black", false);
Two_Of_Clubs = new Card("Two_Of_Clubs", "2C", "clubs", 2, "black", false);
Three_Of_Clubs = new Card("Three_Of_Clubs", "3C", "clubs", 3, "black", false);
Four_Of_Clubs = new Card("Four_Of_Clubs", "4C", "clubs", 4, "black", false);
Five_Of_Clubs = new Card("Five_Of_Clubs", "5C", "clubs", 5, "black", false);
Six_Of_Clubs = new Card("Six_Of_Clubs", "6C", "clubs", 6, "black", false);
Seven_Of_Clubs = new Card("Seven_Of_Clubs", "7C", "clubs", 7, "black", false);
Eight_Of_Clubs = new Card("Eight_Of_Clubs", "8C", "clubs", 8, "black", false);
Nine_Of_Clubs = new Card("Nine_Of_Clubs", "9C", "clubs", 9, "black", false);
Ten_Of_Clubs = new Card("Ten_Of_Clubs", "10C", "clubs", 10, "black", false);
Jack_Of_Clubs = new Card("Jack_Of_Clubs", "JC", "clubs", "Jack", "black", true);
Queen_Of_Clubs = new Card(
  "Queen_Of_Clubs",
  "QC",
  "clubs",
  "Queen",
  "black",
  true
);
King_Of_Clubs = new Card("King_Of_Clubs", "KC", "clubs", "King", "black", true);

// <------- SPADES -------> //
// prettier-ignore
Ace_Of_Spades = new Card("Ace_Of_Spades", "AS", "spades", 'Ace', "black", false);
// prettier-ignore
Two_Of_Spades = new Card("Two_Of_Spades", "2S", "spades", 2, "black", false);
// prettier-ignore
Three_Of_Spades = new Card("Three_Of_Spades", "3S", "spades", 3, "black", false);
// prettier-ignore
Four_Of_Spades = new Card("Four_Of_Spades", "4S", "spades", 4, "black", false);
// prettier-ignore
Five_Of_Spades = new Card("Five_Of_Spades", "5S", "spades", 5, "black", false);
// prettier-ignore
Six_Of_Spades = new Card("Six_Of_Spades", "6S", "spades", 6, "black", false);
// prettier-ignore
Seven_Of_Spades = new Card( "Seven_Of_Spades", "7S", "spades", 7, "black", false);
// prettier-ignore
Eight_Of_Spades = new Card("Eight_Of_Spades", "8S", "spades", 8, "black", false);
Nine_Of_Spades = new Card("Nine_Of_Spades", "9S", "spades", 9, "black", false);
Ten_Of_Spades = new Card("Ten_Of_Spades", "10S", "spades", 10, "black", false);
Jack_Of_Spades = new Card(
  "Jack_Of_Spades",
  "JS",
  "spades",
  "Jack",
  "black",
  true
);
// prettier-ignore
Queen_Of_Spades = new Card("Queen_Of_Spades", "QS", "spades", 'Queen', "black", true);
King_Of_Spades = new Card(
  "King_Of_Spades",
  "KS",
  "spades",
  "King",
  "black",
  true
);

diamonds = [
  Ace_Of_Diamonds,
  Two_Of_Diamonds,
  Three_Of_Diamonds,
  Four_Of_Diamonds,
  Five_Of_Diamonds,
  Six_Of_Diamonds,
  Seven_Of_Diamonds,
  Eight_Of_Diamonds,
  Nine_Of_Diamonds,
  Ten_Of_Diamonds,
  Jack_Of_Diamonds,
  Queen_Of_Diamonds,
  King_Of_Diamonds,
];
hearts = [
  Ace_Of_Hearts,
  Two_Of_Hearts,
  Three_Of_Hearts,
  Four_Of_Hearts,
  Five_Of_Hearts,
  Six_Of_Hearts,
  Seven_Of_Hearts,
  Eight_Of_Hearts,
  Nine_Of_Hearts,
  Ten_Of_Hearts,
  Jack_Of_Hearts,
  Queen_Of_Hearts,
  King_Of_Hearts,
];
spades = [
  Ace_Of_Spades,
  Two_Of_Spades,
  Three_Of_Spades,
  Four_Of_Spades,
  Five_Of_Spades,
  Six_Of_Spades,
  Seven_Of_Spades,
  Eight_Of_Spades,
  Nine_Of_Spades,
  Ten_Of_Spades,
  Jack_Of_Spades,
  Queen_Of_Spades,
  King_Of_Spades,
];
clubs = [
  Ace_Of_Clubs,
  Two_Of_Clubs,
  Three_Of_Clubs,
  Four_Of_Clubs,
  Five_Of_Clubs,
  Six_Of_Clubs,
  Seven_Of_Clubs,
  Eight_Of_Clubs,
  Nine_Of_Clubs,
  Ten_Of_Clubs,
  Jack_Of_Clubs,
  Queen_Of_Clubs,
  King_Of_Clubs,
];

const createDeck = () => {
  const deck = clubs.concat(hearts, diamonds, spades);
  return deck;
};

// Method 1 of Shuffling
const shuffle1 = (deck, times) => {
  const timesShuffled = times;
  for (var i = 0; i < timesShuffled; i++) {
    const randomCard_1 = deck[Math.floor(Math.random() * deck.length)];
    deck = deck.filter((card) => card !== randomCard_1);
    deck.unshift(randomCard_1);
    const randomCard_2 = deck[Math.floor(Math.random() * deck.length)];
    deck = deck.filter((card) => card !== randomCard_2);
    deck.push(randomCard_2);
  }
  return deck;
};

const shuffle2 = (deck, times) => {
  const timesShuffled = times;
  // shuffle loop
  for (var j = 0; j < timesShuffled; j++) {
    const half = Math.ceil(deck.length / 2);
    subDeck1 = deck.splice(0, half);
    subDeck2 = deck.splice(-half);
    deck = [];
    for (var i = 0; i < subDeck1.length; i++) {
      deck.push(subDeck1[i]);
      deck.push(subDeck2[i]);
    }
  }

  return deck;
};

const totalShuffles = (cardDeck) => {
  cardDeck = shuffle2(cardDeck, 4);
  cardDeck = shuffle1(cardDeck, 150);
  cardDeck = shuffle2(cardDeck, 2);
  return cardDeck;
};

const dealhands = (deck, noPlayers) => {
  if (noPlayers >= deck.length) {
    console.log("Error. Too many players. ");
  } else {
    player1 = [];
    player2 = [];
    if (noPlayers === 2) {
      for (var i = 0; i < 26; i++) {
        const card1 = deck[Math.floor(Math.random() * deck.length)];
        deck = deck.filter((card) => card !== card1);
        player1.push(card1);
        const card2 = deck[Math.floor(Math.random() * deck.length)];
        deck = deck.filter((card) => card !== card2);
        player2.push(card2);
      }
      return [player1, player2];
    }
    if (noPlayers === 3) {
      player3 = [];
      for (var i = 0; i < 17; i++) {
        const card1 = deck[Math.floor(Math.random() * deck.length)];
        deck = deck.filter((card) => card !== card1);
        player1.push(card1);
        const card2 = deck[Math.floor(Math.random() * deck.length)];
        deck = deck.filter((card) => card !== card2);
        player2.push(card2);
        const card3 = deck[Math.floor(Math.random() * deck.length)];
        deck = deck.filter((card) => card !== card3);
        player3.push(card3);
      }
      console.log("deck contents: " + deck[0].cardName);
      if (deck.length < 2) {
        const choose = Math.floor(Math.random() * 3);
        if (choose === 0) {
          player1.push(deck[0]);
        } else if (choose === 1) {
          player2.push(deck[0]);
        } else if (choose === 2) {
          player3.push(deck[0]);
        } else {
          player1.push(deck[0]);
        }
      }
      return [player1, player2, player3];
    }
    if (noPlayers === 4) {
      player3 = [];
      player4 = [];
      for (var i = 0; i < 13; i++) {
        const card1 = deck[Math.floor(Math.random() * deck.length)];
        deck = deck.filter((card) => card !== card1);
        player1.push(card1);
        const card2 = deck[Math.floor(Math.random() * deck.length)];
        deck = deck.filter((card) => card !== card2);
        player2.push(card2);
        const card3 = deck[Math.floor(Math.random() * deck.length)];
        deck = deck.filter((card) => card !== card3);
        player3.push(card3);
        const card4 = deck[Math.floor(Math.random() * deck.length)];
        deck = deck.filter((card) => card !== card4);
        player4.push(card4);
      }
      return [player1, player2, player3, player4];
    }
  }
};

const myDeck = createDeck();

const shuffled = totalShuffles(myDeck);

const hands = dealhands(shuffled, 4);
const player1Hand = hands[0];
const player2Hand = hands[1];
const player3Hand = hands[2];
const player4Hand = hands[3];

console.log("Cards After Dealing: ");
console.log("");
console.log("PLAYER 1 HAND: " + player1Hand.length + " cards");
for (const card of player1Hand) {
  console.log(card.cardName + " ------ " + card.id);
}
console.log("");
console.log("PLAYER 2 HAND: " + player2Hand.length + " cards");
for (const card of player2Hand) {
  console.log(card.cardName + " ------ " + card.id);
}
console.log("");
console.log("PLAYER 3 HAND: " + player3Hand.length + " cards");
for (const card of player3Hand) {
  console.log(card.cardName + " ------ " + card.id);
}
console.log("");
console.log("PLAYER 4 HAND: " + player4Hand.length + " cards");
for (const card of player4Hand) {
  console.log(card.cardName + " ------ " + card.id);
}
