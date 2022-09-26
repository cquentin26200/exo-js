//Exo 1

/*
const numberOne = parseInt(prompt("Enter the first number"));
const numberTwo = parseInt(prompt("Enter the second number"));

if ((numberOne > 0 && numberTwo > 0) || (numberOne < 0 && numberTwo < 0)) {
  console.log("Your product is positif");
} else {
  console.log("Your product is negatif");
}
*/

//Exo 2

/*
const nameOne = prompt("Enter a name");
const nameTwo = prompt("Enter a name");
const nameThree = prompt("Enter a name");

if ((nameOne < nameTwo) && (nameTwo < nameThree)) {
    console.log("It's mixed");
} else {
    console.log("It's not mixed");
}
*/

//Exo 3

/*
const age = parseInt(prompt("Enter your name"));

if (age >= 12) {
    console.log("Poussin");
} else if (age >= 10) {
    console.log("Pupille");
} else if (age >= 8) {
    console.log("Minime");
} else if (age >= 7) {
    console.log("Cadet");
} else {
    console.log("You don't have the necessary age")
}
*/

//Exo 4

/*
let hour = parseInt(prompt("Enter a hour"));
let minute = parseInt(prompt("Enter a minute"));
let second = parseInt(prompt("Enter a second"));

if (hour <= 24 && second < 60 && minute < 60) {
  second++;
  if (second === 59) {
    second = 0;
    minute = 0;
  }
  if (minute === 60) {
    minute = 0;
    hour++;
  }
  if (hour === 24 && minute === 59 && second === 59) {
    minute = 0;
    hour = 0;
    second = 0;
  }
}

console.log(`${hour}:${minute}:${second}`);
*/

//Exo 5

/*
let a = 0.01;
let b = 0.09;
let c = 0.08;

const result = parseInt(prompt("Enter a number"));

if (result <= 10) {
  console.log(`Vous devez ${(a * result).toFixed(2)}`);
} else if (result <= 30) {
  console.log(`Vous devez ${((b * result) - 10).toFixed(2) + 1}`);
} else {
  console.log(`Vous devez ${((c * result) - 30).toFixed(2) + 2.8}`);
}
*/

//Exo 6

/*
const sexe = prompt("Enter your sexe");
const age = parseInt(prompt("Enter your age"));

if (
  (sexe == "homme" && age > 20) ||
  (sexe == "femme" && age >= 18 && age <= 35)
) {
  console.log("Vous payer l'impot");
} else {
  console.log("Vous ne payer pas l'impot");
}
*/

//Exo 7

/*
const candidatOne = 50;
const candidatTwo = 20;
const candidatThree = 20;
const candidatFour = 10;

if (candidatOne >= 50) {
  console.log("Vous êtes élu");
} else if (
  candidatOne > candidatTwo &&
  candidatOne > candidatThree &&
  candidatOne > candidatFour
) {
  console.log("Vous êtes favorable");
} else if (candidatOne < 12.5) {
  console.log("Vous avez perdu");
} else {
  console.log("Vous n'êtes pas favorable");
}
*/

//Exo 8

/*
const conducteur = parseInt(prompt("Enter your age"));
const permis = prompt("Do you have permis");
const accident = parseInt(prompt("Do you have any accident"));
const assurance = parseInt(prompt("How time have you your assurance"));
let tarif;

if (conducteur < 25 && permis <= 2) {
  if (accident > 0) {
    console.log("Vous êtes refusé");
  } else {
    console.log("Vous avez le tarif rouge");
    tarif = 0;
  }
} else if (
  (conducteur < 25 && permis >= 2) ||
  (conducteur > 25 && permis <= 2)
) {
  if (accident < 1) {
    console.log("Vous avez le tarif orange");
    tarif = 1;
  } else if (accident === 1) {
    console.log("Vous avez le tarif rouge");
    tarif = 0;
  } else {
    console.log("Vous êtes refusé");
  }
} else if (conducteur > 25 && permis >= 2) {
  if (accident === 0) {
    console.log("Vous avez le tarif vert");
    tarif = 2;
  } else if (accident === 1) {
    console.log("Vous avez le tarif orange");
    tarif = 1;
  } else if (accident === 2) {
    console.log("Vous avez le tarif rouge");
    tarif = 0;
  } else {
    console.log("Vous êtes refusé");
  }
}

if (assurance > 2) {
  if (tarif === 0) {
    console.log("Vous avez le tarif bleu");
  } else if (tarif === 1) {
    console.log("Vous avez le tarif vert");
  } else if (tarif === 2) {
    console.log("Vous avez le tarif orange");
  } else {
    console.log("Vous êtes refusé vous ne pouvez pas avoir de tarif supérieur");
  }
}
*/

//Exo 9

/*
const years = parseInt(prompt("Enter the number for the years"));
const month = parseInt(prompt("Enter the number for the month"));
let day = parseInt(prompt("Enter the number of day"));
if (
  (years % 4 === 0 && years % 100 !== 0) &&
  (years % 400 === 0 &&
    month <= 12) &&
    ((month == 4 || month == 6 || month == 11 || month == 9) && day < 31) ||
    ((month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12) && day < 32)
) {
  console.log("Valide");
} else {
  console.log("Pas Valide");
}
*/

//Exo 10

/*
let result = parseInt(prompt("Enter a number between 1 and 3"));

while ((result > 3) || (result < 1)) {
  result = parseInt(prompt("Enter a number between 1 and 3"));
}

console.log(`Vous avez entré le nombre: ${result} qui est valide`);
*/

//Exo 11

/*
let result = parseInt(prompt("Enter the number for calculate"));
const ul = document.createElement("ul");
document.body.appendChild(ul);
for (let i = 1; i <= 10; i++) {
  const li = document.createElement("li");
  ul.appendChild(li);
  li.innerHTML = `${i} + ${i} = ${result += i}`;
}
*/

//Exo 12

/*
let result = parseInt(prompt("Enter a number"));
let maxNumber = 0;

while (result !== 0) {
  result = parseInt(prompt("Enter a number"));
  if (result > maxNumber) {
    maxNumber = result;
  } else {
    console.log(maxNumber)
  }
}
*/

//Exo 13

/*
let result = 1;
let price = 0;
let money = 0;

while (result !== 0) {
  result = parseInt(prompt("Je vous donne"));
  price+=result;
}

const sendMoney = parseInt(prompt("Vous me devez :"));
money = sendMoney - price;
console.log(price)
console.log(`Vous me devez ${money}`);
let billet10 = 0;
let billet5 = 0;

while (money >= 10) {
  money = money - 10;
  billet10++;
  console.log(billet10);
}

console.log(`vous devez me rendre ${billet10} billet de 10`);

while (money >= 5) {
  money = money - 5;
  billet5++;
  console.log(billet5);
}
console.log(`Je vais vous rendre ${billet5} billet de 5`);
*/

//Exo 14

/*
const numberHorse = parseInt(prompt("Combien de chevaux sont partants"));
const numberHorsePlay = parseInt(prompt("Combien de chevaux sont joué"));

let nbr = 1;
let nbr2 = 1;
let nbr3 = 1;
let horse = numberHorse - numberHorsePlay;

for (let i = 1; i <= numberHorsePlay; i++) {
  nbr *= i;
}

for (let o = 1; o <= numberHorse; o++) {
  nbr2 *= o;
}

for (let m = 1; m <= horse; m++) {
  nbr3 *= m;
}

console.log(nbr2 / nbr3);
console.log(nbr2 / (nbr * nbr3));
*/

//Exo 15

/*
let arr = [0, 1];

for (let i = 2; i <= 7; i++) {
 arr[i] = arr[i-1] + arr[i-2];
}

console.log(arr)
*/

//Exo 16

/*
let arr = [];
let nrb = 0;

for (let i = 0; i <= 9; i++) {
  const result = parseInt(prompt("Enter your note"));
  arr.push(result)
  nrb += arr[i];
}

console.log(nrb / arr.length);
*/

//Exo 17

/*
let arr = [];
let positif = 0;
let negatif = 0;

const numberOfNumber = parseInt(prompt("Enter your number"));

for (let i = 0; i < numberOfNumber; i++) {
  const number = parseInt(prompt("Enter your number"));
  arr.push(number);
  if (arr[i] >= 0) {
    positif++;
  } else {
    negatif++;
  }
}

console.log(`Il y a ${positif} nombre positif et ${negatif} nombre négatif`);
*/

//Exo 18

/*
const arrayOne = [4, 8, 7, 9, 1, 5, 4, 6];
const arrayTwo = [7, 6, 5, 2, 1, 3, 7, 4];
let arr = [];

for (let i = 0; i <= arrayOne.length; i++) {
  arr.push(arrayOne[i] + arrayTwo[i])
}

console.log(arrayOne);
*/

//Exo 19

/*
const arrayOne = [4, 8, 7, 12];
const arrayTwo = [3, 6];
let nbr = 0;

for (let arrayOnes of arrayOne) {
  for (let arrayTwos of arrayTwo) {
    nbr += arrayTwos * arrayOnes;
  }
}

console.log(nbr);
*/

//Exo 20

/*
const arr = [];
const numberOdd = () => {
  for (let i = 0; i <= 20; i++) {
    if (i % 2 === 0) {
      arr.push(i);
    }
  }
}

numberOdd()

console.log(arr.join("-"));
*/

//Exo 21

/*
let years = 20;
function Placement(number, count, taux) {
  let total = (taux * number) / 100;
  let result = 0;
  result = number + total;
  count++;
  console.log(result)
  if (count < years) {
    return Placement(result, count, taux);
  }
  else {
    return result;
  }
}

console.log(Placement(10000, 0, 4));
*/

//Exo 22

/*
function calc (num1, num2, operateur) {
  if ((num2 !== 0) && (operateur !== "/")) {
    return eval(`${num1} ${operateur} ${num2}`);
  } else {
    return "Votre code n'est pas valide";
  }
}

alert(calc (5, 3, "*"));
*/

//Exo 3

function pluriel(word) {
  const number = 0;
  if (number > 1) {
    word = word + "s";
  }
  return word;
}

console.log(pluriel("Hello"));
