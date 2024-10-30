const inputForm = document.querySelector("#form");
const typedNumber = document.querySelector("#input-number");
const msg = document.querySelector("#msg");
const tries = document.querySelector("#user-tries");

let attempts = 0;

inputForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const randomNumner = Math.round(Math.random() * 10);

  tries.innerHTML = "";

  if (typedNumber.value === "") {
    msg.innerHTML = "You must type a number!";
    msg.style.color = "red";
  } else if (typedNumber.value > randomNumner) {
    msg.innerHTML = "Too High ↑↑";
    msg.style.color = "black";
    attempts += 1;
  } else if (typedNumber.value < randomNumner) {
    msg.innerHTML = "Too Low ↓";
    msg.style.color = "black";
    attempts += 1;
  } else {
    msg.innerHTML = `You guessed the number!! <br> Your number: ${typedNumber.value} <br>`;
    msg.style.color = "green";
    attempts += 1;
    tries.innerHTML = `Number of quess ${attempts}`;
    tries.style.color = "blueviolet";
    attempts = 0;
  }

  typedNumber.value = "";
});
