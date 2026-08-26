// ===============================
// ELEMENTS
// ===============================

const opening = document.getElementById("opening");
const main = document.getElementById("main");

const openButton =
    document.getElementById("openButton");

const music =
    document.getElementById("music");

const musicButton =
    document.getElementById("musicButton");


// ===============================
// OPEN WEBSITE
// ===============================

openButton.addEventListener("click", () => {

    opening.classList.add("hide");

    setTimeout(() => {

        main.classList.add("show");

    }, 300);


    music.play()
        .then(() => {

            musicButton.textContent = "⏸️";

        })
        .catch(() => {

            console.log(
                "Browser membutuhkan interaksi untuk musik."
            );

        });

});


// ===============================
// MUSIC
// ===============================

let playing = true;


musicButton.addEventListener("click", () => {

    if (playing) {

        music.pause();

        musicButton.textContent = "🎵";

        playing = false;

    } else {

        music.play();

        musicButton.textContent = "⏸️";

        playing = true;

    }

});


// ===============================
// RANDOM LOVE MESSAGE
// ===============================

const messages = [

    "Random reminder: you're actually pretty amazing. ♡",

    "I hope something makes you smile today. And if not, maybe this does. 🌷",

    "You have a way of making ordinary moments feel a little more special.",

    "Someone thinks you're special. I wonder who... 👀",

    "You don't have to be perfect to be appreciated.",

    "Honestly, getting to know you has been one of my favorite things lately.",

    "Just in case nobody told you today: you're doing great. ✨",

    "Your existence is already a pretty nice thing.",

    "I don't know what the future looks like, but I'm glad you're part of my present.",

    "Maybe someday we'll look back at this website and laugh. 😂",

    "You deserve people who appreciate the little things about you.",

    "Okay, this message is just an excuse to remind you that you're cute. 😭",

    "I hope today treats you gently. ♡",

    "If this website made you smile even once, then my mission is successful.",

    "Maybe we should talk more often. Just saying. 👀"

];


const randomMessage =
    document.getElementById("randomMessage");

const messageButton =
    document.getElementById("messageButton");


let previousMessage = -1;


messageButton.addEventListener("click", () => {

    let index;

    do {

        index =
            Math.floor(
                Math.random() *
                messages.length
            );

    } while (index === previousMessage);


    previousMessage = index;


    randomMessage.style.opacity = "0";

    randomMessage.style.transform =
        "translateY(10px)";


    setTimeout(() => {

        randomMessage.textContent =
            messages[index];

        randomMessage.style.opacity = "1";

        randomMessage.style.transform =
            "translateY(0)";

    }, 300);

});


// ===============================
// PICK A CARD
// ===============================

const pickCards =
    document.querySelectorAll(".pick-card");

const cardResult =
    document.getElementById("cardResult");


pickCards.forEach(card => {

    card.addEventListener("click", () => {

        cardResult.style.opacity = "0";

        setTimeout(() => {

            cardResult.textContent =
                card.dataset.message;

            cardResult.style.opacity = "1";

        }, 200);

    });

});


// ===============================
// ENVELOPES
// ===============================

const envelopes =
    document.querySelectorAll(".envelope");

const envelopeResult =
    document.getElementById("envelopeResult");


envelopes.forEach(envelope => {

    envelope.addEventListener("click", () => {

        envelopeResult.style.opacity = "0";

        setTimeout(() => {

            envelopeResult.textContent =
                envelope.dataset.message;

            envelopeResult.style.opacity = "1";

        }, 200);

    });

});


// ===============================
// MINI GAME
// ===============================

const answers =
    document.querySelectorAll(".answer");

const gameResult =
    document.getElementById("gameResult");


answers.forEach((answer, index) => {

    answer.addEventListener("click", () => {

        if (index === 3) {

            gameResult.textContent =
                "HAHA. I knew you'd choose D. 😭❤️";

        } else {

            gameResult.textContent =
                "Nice try... but I think we both know the real answer. 👀";

        }

    });

});


// ===============================
// FINAL SURPRISE
// ===============================

const finalButton =
    document.getElementById("finalButton");

const finalMessage =
    document.getElementById("finalMessage");


finalButton.addEventListener("click", () => {

    finalMessage.innerHTML =
        "Thank you for making it this far. ♡<br><br>" +
        "Maybe this isn't the beginning of a love story...<br>" +
        "but maybe it's the beginning of something nice. ✨";

    finalButton.style.display = "none";

    createBurst();

});


// ===============================
// HEARTS
// ===============================

const heartsContainer =
    document.getElementById("hearts");


function createHeart() {

    const heart =
        document.createElement("div");

    heart.classList.add("heart");

    heart.textContent =
        Math.random() > .5
            ? "♥"
            : "♡";


    heart.style.left =
        Math.random() * 100 + "vw";


    heart.style.fontSize =
        10 + Math.random() * 20 + "px";


    heart.style.animationDuration =
        6 + Math.random() * 8 + "s";


    heartsContainer.appendChild(heart);


    setTimeout(() => {

        heart.remove();

    }, 15000);

}


setInterval(createHeart, 900);


// ===============================
// FINAL HEART BURST
// ===============================

function createBurst() {

    for (let i = 0; i < 35; i++) {

        const heart =
            document.createElement("div");

        heart.classList.add("heart");

        heart.textContent = "♥";

        heart.style.left = "50%";

        heart.style.bottom = "50%";

        heart.style.fontSize =
            12 + Math.random() * 25 + "px";

        heart.style.animationDuration =
            3 + Math.random() * 3 + "s";


        heartsContainer.appendChild(heart);

    }

}