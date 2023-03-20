const startButton = document.querySelector("#start-button");
const stopButton = document.querySelector("#stop-button");

let isWorking = false;
let n = 0;

function letRun() {
  isWorking = true;
  setInterval(() => {
    if (isWorking === true) {
      const random = Math.floor(Math.random() * 5 + 1);
      // console.log(random);
      const selectedCorner = "corner-" + random;
      const turn_green = document.getElementById(selectedCorner);
      // console.log(turn_green);
      turn_green.classList.add("pop-up");

      setTimeout(
        () => {
          turnOff(random);
        },
        1000,
        random
      );
    } else return;
  }, 3000);
}

function turnOff(cornerNumber) {
  const selectedCorner = "corner-" + cornerNumber;
  const turn_off = document.getElementById(selectedCorner);
  // console.log(turn_off);
  turn_off.classList.remove("pop-up");
}

startButton.addEventListener("click", letRun);

stopButton.addEventListener("click", () => {
  // console.log("stop pls");

  isWorking = false;
});
// document.addEventListener function (e) {
//   // if (e.key == " " || e.key == "Space" || e.key == 32) {
//   //   if (isWorking === false) {
//   //     isWorking = true;
//   //   } else {
//   //     isWorking = false;
//   //   }
//   // }
//   console("space pressed");
// };
