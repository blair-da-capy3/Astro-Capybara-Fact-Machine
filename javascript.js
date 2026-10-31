const facts = [
"The Sun makes up 99.8% of the mass of our solar system.",
"Venus spins backwards, so the Sun rises in the west.",
"A day on Venus is longer than a year on Venus.",
"A teaspoon of neutron star material weighs a billion tons.",
"Jupiter has the shortest day — about 10 hours.",
"Saturn’s rings are mostly ice.",
"Mars has the tallest volcano in the solar system.",
"There are more stars than grains of sand on Earth.",
"The Milky Way moves at 1.3 million miles per hour.",
"Sunlight takes 8 minutes to reach Earth.",
"A year on Mercury is only 88 days.",
"Space is silent because sound needs air.",
"The Moon drifts away 3.8 cm per year.",
"Black holes don’t suck — objects fall in via gravity.",
"UY Scuti is so big it would engulf Jupiter.",
"Saturn could float in water.",
"Comets are icy leftovers from the early solar system.",
"Jupiter’s Great Red Spot is a 300-year storm.",
"Astronauts grow taller in space.",
"Andromeda will collide with the Milky Way in 4 billion years.",
"Pluto has mountains made of water ice.",
"The Sun will become a red giant someday.",
"There’s a giant alcohol cloud in space.",
"Some planets drift alone as rogue planets.",
];

const capy = document.getElementById("capy");
const bubble = document.getElementById("capyBubble");

capy.addEventListener("click", () => {
    //pic a random fact
    const randomFact = facts[Math.floor(Math.random() *
facts.length)];

    //Put it in the bubble
    bubble.textContent = randomFact;
    //show bubble
    bubble.classList.add("show");
    
    bubble.style.animation = "none";
    bubble.offsetHeight; 
    bubble.style.animation = null;
})

const music = document.getElementById("bg-music");
music.volume = 0.05;

function playMusic(){
    music.play().catch(error => {
        console.log("Playback was prevented by the brower:", error);
    });
}

function stopMusic() {
    music.pause();
    music.currentTime = 0;
}