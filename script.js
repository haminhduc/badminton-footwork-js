const startButton = document.querySelector("#start-button");
const stopButton = document.querySelector("#stop-button");
const container = document.querySelector(".container");
let isWorking = false;
let n = 0;

function genRandAndShow(isWorking) {
  if (isWorking === true) {
    const random = Math.floor(Math.random() * 5 + 1);
    // console.log(random);
    const selectedCorner = "corner-" + random;
    const turn_green = document.getElementById(selectedCorner);
    // console.log(turn_green);
    turn_green.classList.add("pop-up");
    return random;
  } else return 0;
}

function turnOff(cornerNumber) {
  const selectedCorner = "corner-" + cornerNumber;
  const turn_off = document.getElementById(selectedCorner);
  // console.log(turn_off);
  turn_off.classList.remove("pop-up");
}

function letRun() {
  isWorking = true;
  var id = setInterval(() => {
    var on = genRandAndShow(isWorking);
    setTimeout(
      () => {
        turnOff(on);
      },
      1000,
      on
    );
  }, 3000);
  container.dataset.interval = id;
}

startButton.addEventListener("click", letRun);

stopButton.addEventListener("click", () => {
  // console.log("stop pls");
  clearInterval(container.dataset.interval);
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
