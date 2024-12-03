const btn = document.getElementById("show-button");
const list = document.getElementById("result");
const getRandomNumber = () => Math.floor(Math.random() * 100 + 1);

const guessRandomNumber = (randomNumber) => {
  let min = 1;
  let max = 100;
  let attempts = 0;

  while (min <= max) {
    attempts++;
    const attempt = Math.floor((min + max) / 2);
    console.log(`Компьютер 2: Пробую число ${attempt}.`);

    if (attempt === randomNumber) {
      console.log("Компьютер 1: Угадал!");
      return attempts;
    } else if (attempt < randomNumber) {
      console.log("Компьютер 1: Больше.");
      min = attempt + 1;
    } else {
      max = attempt - 1;
      console.log("Компьютер 1: Меньше.");
    }
  }
};

const randomNumber = getRandomNumber();
console.log(`Компьютер 1 загадал число ${randomNumber}.`);

const attemptsCount = guessRandomNumber(randomNumber);
console.log(`Компьютер 2 угадал число за ${attemptsCount} попыток`);
