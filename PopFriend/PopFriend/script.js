const friendImg = document.getElementById("friend");
const counter = document.getElementById("counter");
let count = 0;

const closedImg = "img/friend_closed.png";
const openImg = "img/friend_open.png";

function playPopSound() {
  const pop = new Audio("sound/pop.mp3");
  pop.play();
}

function popOnce() {
  friendImg.src = openImg;
  count++;
  counter.textContent = count;
  playPopSound();

  setTimeout(() => {
    friendImg.src = closedImg;
  }, 100);
}

friendImg.addEventListener("click", popOnce);
friendImg.addEventListener("touchstart", (e) => {
  e.preventDefault();
  popOnce();
});
