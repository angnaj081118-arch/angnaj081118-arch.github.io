
// Kåden fungerade i init.js scripten men jag byte bara röst fil på en av karaktärena-
// vilket inte ska vara ett stort problem,och då började kåden inte fungera mera
// Så jag gjorde WORK.js för att se ifall kåden skulle fungera här och det gör den.
// Jag antar att kåden laddades för tidigt i init.js men fungerar här.
// Ialafall så är detta för karaktärenas röster. 

const voicelines = [
  new Audio("Voicelines/Vertin.mp3"),
  new Audio("Voicelines/Lilya.mp3"),
  new Audio("Voicelines/Tuesday.mp3"),
  new Audio("Voicelines/Argus.mp3"),
  new Audio("Voicelines/Barbara.mp3"),
  new Audio("Voicelines/Anjo_Nala.mp3")
];

const audioBtns = document.querySelectorAll(".audbtn");        

let cAud = null;         // För att byta Audio, satt till null just nu //
let cBtn = null;         // För att byta knapp senare, satt till null just nu // 

audioBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    const SpookyTuesday = Number(btn.dataset.audio);              // håller koll på alla audior när man clickar knappen, så den spelar rätt med rätt karaktär //
    const audio = voicelines[SpookyTuesday];             

    if (cBtn === btn) {
      audio.pause();
      audio.currentTime = 0;
      btn.src = "https://re1999.bluepoch.com/en/home/img/yuyin_01.png";        // Om du trycker igen så pausas ljudet . //
      cAud = null;
      cBtn = null;
      return;
    }

     if (cAud) {
      cAud.pause();                  // stoppar rösten som spelar ifall du trycker på en annan röst //
      cAud.currentTime = 0;
    }

   
    if (cBtn) {
      cBtn.src =                                                                     // fixar defult button //
        "https://re1999.bluepoch.com/en/home/img/yuyin_01.png";  
    }

   
  
   
    audio.currentTime = 0;
    audio.play();

 btn.src = "https://re1999.bluepoch.com/en/home/img/yuyin_02.webp";         // Så att bilden ändras när du spelar ett ljud //

    cAud = audio;
    cBtn = btn;

    audio.onended = () => {
      btn.src = "https://re1999.bluepoch.com/en/home/img/yuyin_01.png";      // För när ljudet komemr till ett slut så att de byter tillbaka till defult bilden //
      cAud = null; 
      cBtn = null;
    };


  }       );


}      );



const audio = new Audio("2.1.mp3");
const audioBtn = document.querySelectorAll(".Musbtn");

let cBt = null;

audioBtn.forEach(bt => {
  bt.addEventListener("click", () => {

    if (cBt === bt) {
      audio.pause();
      audio.currentTime = 4;
      bt.src = "https://re1999.bluepoch.com/en/home/img/v2c.png";
      cBt = null;
      return;
    }

    if (cBt) {
      cBt.src = "https://re1999.bluepoch.com/en/home/img/v2c.png";
    }

    audio.currentTime = 4;
    audio.play();

    bt.src = "https://re1999.bluepoch.com/en/home/img/v2.webp";
    cBt = bt;

    audio.onended = () => {
      bt.src = "https://re1999.bluepoch.com/en/home/img/v2c.png";
      cBt = null;
    };
  });
});



