let Speaking = false;    
let aButton = null;
let voices = [];



speechSynthesis.onvoiceschanged = () => {
    voices = speechSynthesis.getVoices();           // <-- för att få röster från webben, det är async så det tar en bit.. //
};

document.querySelectorAll(".Sbutton").forEach(button => {    // när man trycker knappen så läser den av h3 i lore i storywrap//
    button.addEventListener("click", () => {
        const text = button
            .closest(".storywrap").querySelector(".lore h3").innerText;

        if (Speaking) {
            speechSynthesis.cancel();                  // om man den pratar så kan man trycka igen för att få den att bli tyst samt så ändras knappen//
            aButton.src = "Xtra/Speaker_Icon.png";
            Speaking = false;
            aButton = null;
            return;
        }

        const utterance = new SpeechSynthesisUtterance(text);
        utterance.voice = voices.find(v => v.lang === "en-US") || voices[0];        // jag tog USA engelsk röst, och röst 0 ifall den inte fungerar //
        utterance.rate = 0.95;
        utterance.pitch = 1;

        button.src = "Xtra/Mute_Icon.png";
        aButton = button;                         // När speaking är true, alltså när den pratar kommer iconen att vara mute_icon //
        Speaking = true;

        utterance.end = () => {
            button.src = "Xtra/Speaker_Icon.png";           // Och om rösten inte spelar så kommer iconen att vara speker_icon, detta händer automatiskt när den slutar prata. //
            Speaking = false;
            aButton = null;
        };

        speechSynthesis.speak(utterance);          // så att den pratar //
    });
});