import { Tamagotchi } from "./Tamagotchi.js"

let playIndicator = 0;

export function CreateTama() {


    console.log(playIndicator);

    let ct = [];
    ct[playIndicator] = new Tamagotchi(playIndicator);

    const input = document.querySelector("input").value;

    const container = document.querySelector(".container");
    const row = document.querySelector("#row1");
    const row2 = document.querySelector("#row2");

    const timer = document.querySelector("#col-status");
    const statusTimer = document.querySelector("#col-start-timer");

    const happiness = document.querySelector("#col-happiness");
    const happinessTimer = document.querySelector("#col-happy-timer");

    const hunger = document.querySelector("#col-hunger");
    const hungerTimer = document.querySelector("#col-hunger-timer");

    const startBtn = document.getElementById("start-btnn");
    const playBtn = document.getElementById("play-btnn");
    const feedBtn = document.getElementById("feed-btnn");

    const img = document.createElement("img");
    const image = document.getElementById("col-tama-img").appendChild(img);
    img.id = "tama-" + playIndicator;
    console.log(img);

    //---
    const guess = document.querySelector("p");
    guess.innerText = "Your selected name is " + input + "click start to play the game";

    timer.id = "life-status-" + playIndicator;
    statusTimer.id = "start-timer-" + playIndicator;
    statusTimer.innerText = "0";

    happiness.id = "life-status-" + playIndicator;
    happinessTimer.id = "happiness-value-" + playIndicator;

    hunger.id = "life-status-" + playIndicator;
    hungerTimer.id = "hunger-value-" + playIndicator;

    startBtn.id = "start-" + playIndicator;
    startBtn.innerText = "Start";

    playBtn.id = "play-" + playIndicator;
    playBtn.innerText = "Play";

    feedBtn.id = "feed-" + playIndicator;
    feedBtn.innerText = "Feed";

    // --
    container.appendChild(guess);
    row.appendChild(timer);
    row.appendChild(statusTimer);
    row.appendChild(happiness);
    row.appendChild(happinessTimer);
    row.appendChild(hunger);
    row.appendChild(hungerTimer);
    // --
    for (let index = 0; index < ct.length; index++) {
        document.querySelector('#start-' + index).addEventListener('click', playTimer);
        document.querySelector('#play-' + index).addEventListener('click', play);
        document.querySelector('#feed-' + index).addEventListener('click', feed);

        function playTimer() {
            if (ct[index].isRunning()) {
                ct[index].stop();
            }
            else {
                ct[index].start();
            }
        }

        function play() {
            ct[index].play()
        }

        function feed() {
            ct[index].feed()
        }
    }
    CreateTama++;

}

