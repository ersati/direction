const directionIcon = document.querySelector(".direction");
const elevator = document.querySelector(".elevator");
const floor = document.querySelector(".floor");
const floors = document.querySelectorAll(".floor");

const directions = {
  top: "🔼",
  bottom: "🔽",
};

let lastKnownScrollPosition = 0;
let lastKnownScrollPositionT = 0;

function currentFloor() {
  let currentFloor = "";
  floors.forEach((floor) => {
    if (elevator.scrollTop > floor.offsetTop - floor.clientHeight) {
      currentFloor = floor.innerText;
    }
  });
  return currentFloor;
}

function changeDirection() {
  let currentKnownScrollPosition = elevator.scrollTop;
  let currentIcon = "";
  if (currentKnownScrollPosition < lastKnownScrollPosition) {
    currentIcon = directions.top;
  } else {
    currentIcon = directions.bottom;
  }
  lastKnownScrollPosition = elevator.scrollTop;
  return currentIcon;
}

function showAll() {
  directionIcon.textContent = `${currentFloor()} - Direction:${changeDirection()}`;
}
elevator.addEventListener("scroll", showAll);
