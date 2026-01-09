const audio = new Audio("2.1.mp3");
const audioBtns = document.querySelectorAll(".Musbtn");

let cBtn = null;

audioBtns.forEach(btn => {
  btn.addEventListener("click", () => {

    if (cBtn === btn) {
      audio.pause();
      audio.currentTime = 0;
      btn.src = "https://re1999.bluepoch.com/en/home/img/v2c.png";
      cBtn = null;
      return;
    }

    if (cBtn) {
      cBtn.src = "https://re1999.bluepoch.com/en/home/img/v2c.png";
    }

    audio.currentTime = 0;
    audio.play();

    btn.src = "https://re1999.bluepoch.com/en/home/img/v2.webp";
    cBtn = btn;

    audio.onended = () => {
      btn.src = "https://re1999.bluepoch.com/en/home/img/v2c.png";
      cBtn = null;
    };
  });
});
