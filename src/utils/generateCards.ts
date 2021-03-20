const alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
];

export const cardsValue = (size: number) => {
  const availableLetters = [...alphabet];
  const array = [];
  for (let i = 0; i < size; i++) {
    const pos = Math.floor(Math.random() * (availableLetters.length - 0) + 0);
    array.push(availableLetters[pos]);
    availableLetters.splice(pos, 1);
  }
  return array;
};

export const cardsArray = (size: number) => {
  const cards = [];
  const cardsLength = size * 2;
  for (let i = 0; i < cardsLength; i++) {
    cards.push("");
  }
  return cards;
};

export const cardsMatch = (values: Array<String>, cards: Array<String>) => {
  console.log(values, cards);

  const tmpCards = [...cards];
  const tmpValues = [...values, ...values];

  const availablePosition = [];
  for (let i = 0; i < cards.length; i++) {
    availablePosition.push(i);
  }

  for (let i = 0; i < tmpValues.length; i++) {
    const index = Math.floor(Math.random() * (availablePosition.length + 0));
    const pos = availablePosition[index];
    tmpCards[pos] = tmpValues[i];
    availablePosition.splice(index, 1);
  }

  return tmpCards;
};
