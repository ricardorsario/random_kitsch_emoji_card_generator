/* eslint-disable */
import "bootstrap";
import "./style.css";

//CREATING THE BODY IN THE JS
const BODY = document.querySelector("body");

//RANDOM VARIABLES LLAMARLAS
const SUITECONTENT = ["♦", "♥", "♣", "♠"];
const NUMBERCONTENT = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K"
];

window.onload = function() {
  //RANDOM VARIABLES MAKE THEM WORK
  let randomSuiteContent = SUITECONTENT[getRandom(SUITECONTENT)];
  let randomNumberContent = NUMBERCONTENT[getRandom(NUMBERCONTENT)];

  //BODY CLASS
  BODY.classList.add("background");

  //POKER CARD
  let card = document.createElement("div");
  card.classList.add("poker-card");
  BODY.appendChild(card);

  //SUITE 1 ♥
  let Suite1 = document.createElement("div");
  let Suite1Content = document.createTextNode(randomSuiteContent);
  Suite1.appendChild(Suite1Content);
  card.appendChild(Suite1);

  //CARD NUMBER OR LETTER
  let cardNumber = document.createElement("div");
  cardNumber.classList.add("card-number-class");
  let cardNumberContent = document.createTextNode(randomNumberContent);
  cardNumber.appendChild(cardNumberContent);
  card.appendChild(cardNumber);

  //SUITE 2 ♥
  let Suite2 = document.createElement("div");
  Suite2.classList.add("suite-2-class");
  let Suite2Content = document.createTextNode(randomSuiteContent);
  Suite2.appendChild(Suite2Content);
  card.appendChild(Suite2);
};

const getRandom = list => {
  return Math.floor(Math.random() * list.length);
};
