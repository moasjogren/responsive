const boxArray = document.querySelectorAll(".kristoffer-cat-pix");
const imgBox = document.querySelector(".kristoffer-main-article");

boxArray.forEach((box) => {
  box.style.transition = "0.1s all linear";
});

function jump() {
  for (let i = 0; i < boxArray.length; i++) {
    setTimeout(() => {
      setTimeout(() => {
        boxArray[i].style.marginTop = "-3px";
      }, 50);
      setTimeout(() => {
        boxArray[i].style.marginTop = "0";
      }, 200);
    }, `${i}00`);
  }
}

let interval;
let timeout;

imgBox.addEventListener("mouseover", () => {
  if (interval) {
    clearInterval(interval);
  }
  if (timeout) {
    clearTimeout(timeout);
  }

  timeout = setTimeout(() => {
    jump();
    interval = setInterval(jump, 1000);
  }, 1000);
});

imgBox.addEventListener("mouseout", () => {
  clearInterval(interval);
  clearTimeout(timeout);
  interval = null;
  timeout = null;
});
