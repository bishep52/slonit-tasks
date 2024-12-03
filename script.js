const btn = document.getElementById("show-button");
const list = document.getElementById("result");
const getRandomNumber = () => Math.floor(Math.random() * 100 + 1);

btn.addEventListener("click", () => {
  list.textContent = "";

  const addListItem = (item) => {
    const li = document.createElement("li");
    li.textContent = item;
    list.appendChild(li);
  };

  const guessRandomNumber = (randomNumber) => {
    let min = 1;
    let max = 100;
    let attempts = 0;

    while (min <= max) {
      attempts++;
      const attempt = Math.floor((min + max) / 2);
      addListItem(`Компьютер 2: Пробую число ${attempt}.`);

      if (attempt === randomNumber) {
        addListItem("Компьютер 1: Угадал!");
        return attempts;
      } else if (attempt < randomNumber) {
        addListItem("Компьютер 1: Больше.");
        min = attempt + 1;
      } else {
        max = attempt - 1;
        addListItem("Компьютер 1: Меньше.");
      }
    }
  };

  const randomNumber = getRandomNumber();
  addListItem(`Компьютер 1 загадал число ${randomNumber}.`);

  const attemptsCount = guessRandomNumber(randomNumber);
  addListItem(`Компьютер 2 угадал число за ${attemptsCount} попыток`);
});
