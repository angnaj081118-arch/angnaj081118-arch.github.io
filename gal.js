// lightbox till gallery. Behövde göra en ny js, för ngn anleadning så fungerade inte kåden på sidan Gallery.html när den låg i init.js? // 
const spec = document.querySelectorAll(".sp");
const fan = document.querySelectorAll(".fan");
const imgas = document.querySelectorAll(".pa");
const imgs = document.querySelectorAll(".of");
const lightbox = document.getElementById("Lightbox");
const close = document.getElementById("close");
const lightimg = document.getElementById("lightboximg");

imgs.forEach(img => {
img.addEventListener("click", () => {

lightbox.style.display = "flex"            // <-- för css styling och att den ska display flex. //

lightimg.src = img.src;    // <-- gör så att bilden visas upp. jag använde lightboximg som en typ placeholder. //

});

});

// samma sak bara för comics också. // 

imgas.forEach(img => {
img.addEventListener("click", () => {

lightbox.style.display = "flex"         

lightimg.src = img.src;    

});

});

// samma sak för extras //
spec.forEach(img => {
img.addEventListener("click", () => {

lightbox.style.display = "flex"         

lightimg.src = img.src;    

});

});


// samma sak för fan gallery //
fan.forEach(img => {
img.addEventListener("click", () => {

lightbox.style.display = "flex"         

lightimg.src = img.src;    

});

});



close.addEventListener("click", () =>{

lightbox.style.display = "none";              // <-- tar bort lightbox funktionen och bilderna när man trycker close knappen //


}); 



