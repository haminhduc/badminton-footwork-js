const startButton = document.querySelector("#start-button");
const stopButton = document.querySelector("#stop-button");

const isTurnedOn = false;

function turnGreen(cornerNumber) {
  const selectedCorner = "corner-" + cornerNumber;
  const turn_green = document.getElementById(selectedCorner);
  console.log(turn_green);
  turn_green.classList.add("pop-up");
}

function turnOff(cornerNumber) {
  const selectedCorner = "corner-" + cornerNumber;
  const turn_off = document.getElementById(selectedCorner);
  console.log(turn_off);
  turn_off.classList.remove("pop-up");
}

startButton.addEventListener("click", () => {
  setInterval(() => {
    const random = Math.floor(Math.random() * 5 + 1);
    // console.log(random);
    turnGreen(random);

    setTimeout(
      () => {
        // console.log(random);
        turnOff(random);
      },
      1000,
      random
    );
  }, 2500);
});
