const friendImg = document.getElementById("friend");
const counter = document.getElementById("counter");

const closedImg = "img/friend_closed.png";
const openImg = "img/friend_open.png";

let count = 0;

// Preload sound
const pop = new Audio("sound/pop.mp3");
pop.load();

function playPopSound() {
  try {
    pop.currentTime = 0;
    pop.play().catch((err) => {
      console.warn("เล่นเสียงไม่สำเร็จ:", err);
    });
  } catch (e) {
    console.error("เกิดข้อผิดพลาดระหว่างเล่นเสียง", e);
  }
}

function popOnce() {
  console.log("คลิกแล้วเปลี่ยนเป็นภาพอ้าปาก");
  friendImg.src = openImg;
  count++;
  counter.textContent = count;
  playPopSound();

  setTimeout(() => {
    friendImg.src = closedImg;
  }, 100);
}

// ตรวจสอบว่า element ถูกโหลดแล้วแน่นอน
friendImg.addEventListener("click", popOnce);
