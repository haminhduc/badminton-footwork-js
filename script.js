const startButton = document.querySelector("#start-button");
const stopButton = document.querySelector("#stop-button");
const container = document.querySelector(".container");
const homeButton = document.querySelector("#home-button");
var queryDict = {};
location.search
  .substr(1)
  .split("&")
  .forEach(function (item) {
    queryDict[item.split("=")[0]] = item.split("=")[1];
  });
// const speedSelected = document.querySelector("#speed");
// if (speedSelected) {
//   var speed = speedSelected.value;
// }
let isWorking = false;
let n = 0;
let blinkTime = 2000;
if (queryDict.speedList) {
  blinkTime = queryDict.speedList;
}

function genRandAndShow(isWorking) {
  if (isWorking === true) {
    const random = Math.floor(Math.random() * 6 + 1);
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
  if (isWorking === false) {
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
    }, blinkTime);
    container.dataset.interval = id;
  } else return;
}

// use if to check button is not null before addEventListener when using multiple html files

if (startButton) {
  startButton.addEventListener("click", letRun);
}

if (stopButton) {
  stopButton.addEventListener("click", () => {
    // console.log("stop pls");
    clearInterval(container.dataset.interval);
    isWorking = false;
  });
}
homeButton.addEventListener("click", () => {
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
