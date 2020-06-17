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

function changeDirection(scrollPosition) {
  let currentKnownScrollPosition = scrollPosition;

  if (currentKnownScrollPosition < lastKnownScrollPosition) {
    directionIcon.textContent = `Direction ${directions.top}`;
  } else {
    directionIcon.textContent = `Direction ${directions.bottom}`;
  }
  lastKnownScrollPosition = scrollPosition;
}
elevator.addEventListener("scroll", function (e) {
  changeDirection(elevator.scrollTop);
});
