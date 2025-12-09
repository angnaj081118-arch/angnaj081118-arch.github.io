// Slider som låter dig byta slides och gör det automatiskt varje 10s.//

const slides = document.querySelector(".slides");
const sliderimg = document.querySelectorAll(".slide");
const next = document.getElementById("next");
const prev = document.getElementById ("prev");

const sideslides = document.querySelector(".sideslides")
const side = document.querySelectorAll(".sideslide")

let start = 0 
let total = sliderimg.length;

function moveslider () {
slides.style.transform = `translateX(-${start * 100}%)`
sideslides.style.transform = `translateX(-${start * 100}%)`
}

function nextslide () {
start++;
if (start >= total) 
 start = 0;
moveslider(); 
}

function prevslide () {
 start--;   
 if (start < 0) 
start = total - 1;
 moveslider()
}

setInterval(nextslide, 10000);

next.addEventListener("click", nextslide);
prev.addEventListener("click", prevslide);


// fade-in/out transition som gör så att bilderna fade in/out varje gång du scrollar förbi dem. Lärde mig om intersectionobserver under detta, det är typ det som berättar till programmet när bilden ska eller ska inte synas.//

const slider = document.querySelector(".slider");
const sideslide = document.querySelector(".sideslide");

const observe = new IntersectionObserver((entries) => {
entries.forEach(entry => {if (entry.isIntersecting)
{slider.classList.add("fadein"); 
}
else {
 slider.classList.remove("fadein"); 
}

}) ,{threshold: 0.4 }
 });



const observes = new IntersectionObserver((entries) => {
entries.forEach(entry => {if (entry.isIntersecting)
{sideslide.classList.add("fadesin"); 
}
else {
 sideslide.classList.remove("fadesin"); 
}

}) ,{threshold: 0.4 }
 });




observe.observe(slider);
observes.observe(sideslide);