// Slider som låter dig byta slides och gör det automatiskt varje 8s.//

const slides = document.querySelector(".slides");
const sliderimg = document.querySelectorAll(".slide");
const next = document.getElementById("next");
const prev = document.getElementById ("prev");

const sideslides = document.querySelector(".sideslides")
const side = document.querySelectorAll(".sideslide")

let start = 0  // så att den börjar på första sliden //
let total = sliderimg.length; // total antal slides //

function moveslider () {                                           // för att flytta slidesen // 
slides.style.transform = `translateX(-${start * 100}%)`
sideslides.style.transform = `translateX(-${start * 100}%)`
}

function nextslide () {
start++;
if (start >= total)            // För att flytta sliden till nästa slide, och om start är större än de totala antal slides så loopar det tillbaka till början //
 start = 0;
moveslider(); 
}

function prevslide () {
 start--;   
 if (start < 0)                   // För att gå tillbaka en slide //
start = total - 1;
 moveslider()
}

setInterval(nextslide, 8000); // Setinterval så att funktionen next slide activeras varje 8s //

next.addEventListener("click", nextslide);
prev.addEventListener("click", prevslide);

// fade-in/out transition som gör så att bilderna fade in/out varje gång du scrollar förbi dem. Lärde mig om intersectionobserver under detta, det är typ det som berättar till programmet när bilden ska eller ska inte synas.//
const slider = document.querySelector(".slider");
const sideslide = document.querySelector(".sideslide");
const Castslide = document.querySelector(".Castselect");
const storyslider = document.querySelector(".storyslider");
const storytextslide = document.querySelector(".storytextslide");
const xtras = document.getElementById("Sektion5");

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



const observ = new IntersectionObserver((entries) => {
entries.forEach(entry => {if (entry.isIntersecting)
{Castslide.classList.add("fadin"); 
}
else {
 Castslide.classList.remove("fadin"); 
}

}) ,{threshold: 0.4 }
 });




const obser = new IntersectionObserver((entries) => {
entries.forEach(entry => {if (entry.isIntersecting)
{storyslider.classList.add("fad"); 
}
else {
 storyslider.classList.remove("fad"); 
}

}) ,{threshold: 0.4 }
 });



const ob = new IntersectionObserver((entries) => {
entries.forEach(entry => {if (entry.isIntersecting)
{xtras.classList.add("sho"); 
}
else {
 xtras.classList.remove("sho"); 
}

}) ,{threshold: 0.4 }
 });

ob.observe(xtras);
observe.observe(slider);
observes.observe(sideslide);
observ.observe(Castslide);
obser.observe(storyslider);


//För Cast att vissa sig när iconer är tryckta.//
const qts = document.querySelectorAll(".qt");
const AAAA = document.querySelectorAll(".audbtn");
const names = document.querySelectorAll(".name");
const icons = document.querySelectorAll(".icon");
const actors = document.querySelectorAll (".actor");
const minis = document.querySelectorAll(".mini");


icons.forEach(icon => {icon.addEventListener("click", () => {
    const ananleeisbest = icon.dataset.actor; 
const ananleeghostexpert = icon.dataset.mini;
const ananleewow = icon.dataset.name;
const ananleeAAAA = icon.dataset.audbtn;
const ananleeghostbuster = icon.dataset.qt

    actors.forEach(actor => actor.classList.remove("show"));
    actors[ananleeisbest].classList.add("show");

 minis.forEach(mini => mini.classList.remove("show"));
    minis[ananleeghostexpert].classList.add("show");



 AAAA.forEach(audbtn => audbtn.classList.remove("show"));
 AAAA[ananleeAAAA].classList.add("show");


names.forEach(names => names.classList.remove("show"));
names[ananleewow].classList.add("show");

qts.forEach(qt => qt.classList.remove("show"));
qts[ananleeghostbuster].classList.add("show");

})})


// en till slider för sektion 4. //
const tit = document.getElementById("storytit");
const desc  = document.getElementById("storydesc");
const storyslides = document.querySelector(".storyslides");
const panel = document.querySelectorAll(".panel");
const nextt = document.getElementById("nextt");
const prevv = document.getElementById ("prevv");
const wrap = document.querySelectorAll(".storywrap");


let star = 0 
let tot = wrap.length;

function Sidetext() {
  const Cslide = wrap[star];
  tit.textContent = Cslide.dataset.title;
  desc.textContent  = Cslide.dataset.desc;
}

function slidermove () {
storyslides.style.transform = `translateX(-${star * 100}%)`
  Sidetext();
}

function slidenext () {
star++;
if (star >= tot) 
 star = 0;
slidermove (); 
}

function slideprev () {
 star--;   
 if (star < 0) 
star = tot - 1;
 slidermove()
}


nextt.addEventListener("click", slidenext);
prevv.addEventListener("click", slideprev);

 Sidetext();


 // Till mobil för section 4 och Banners //
 storywrap.addEventListener("click", () => {
  storywrap.classList.toggle("active");
});



// scroller för section 3 // 

const iconBar = document.querySelector(".icon_bar");
const iconScroll = document.querySelector(".icon_scroll");

let scrollY = 0;

iconBar.addEventListener("wheel", (spin) => {             
   
    const contentHeight = iconScroll.scrollHeight;

const top = iconBar.clientHeight

   const maxScroll = top - contentHeight;     // <-- hur långt ner den får scrolla, kan see olikt ut på olika skärm storlekar men fungerar helt. //


    if (maxScroll <= 0) return;           // stoppar den från att scrollar mer än maxscroll //

    scrollY += spin.deltaY * 0.5;   // kontrollerar farten till scrollen, jag valde då fart 0.5 //

   if (scrollY < 0) scrollY = 0;            // för när den är högst upp så att den inte scrollar mer än högst up. //

if (scrollY > maxScroll) scrollY = maxScroll;     //för när den är längst ner så att den inte scroller mer än längre ner //

    iconScroll.style.transform = `translateY(${-scrollY}px)`;    // har med css transform skane jag la in samt gör så att scrollerna scrollar ner, Y axeln blir alltså - när man går ner. //

});      
 





