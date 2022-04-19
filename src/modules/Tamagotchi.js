export class Tamagotchi {
    time = 0;
    running = false;
    setInterval;
    intervalHappy;
    intervalHunger;
    happiness;
    hunger;

    constructor(game) {
        this.happiness = 5;
        this.hunger = 5;
        this.game = game;

    }

    setPicture(happiness, hunger) {
        const img = document.querySelector('#tama-' + this.game);
        let tamaImgUrl = new URL('../img/happy.png', import.meta.url);

        if ((happiness <= 0) || (hunger >= 10)) {
            tamaImgUrl = new URL('../img/dead.png', import.meta.url);
        }
        else if ((happiness < 5) || (hunger > 5)) {
            tamaImgUrl = new URL('../img/sad.png', import.meta.url);
        }
        img.src = tamaImgUrl.href;
    }

    play() {
        (this.happiness >= 10) ? 10 : this.happiness++;
        this.setPicture(this.happiness, this.hunger);
        document.querySelector('#happiness-value-' + this.game).innerText = this.happiness;
    }
    feed() {
        (this.hunger <= 0) ? 0 : this.hunger--;
        this.setPicture(this.happiness, this.hunger);
        document.querySelector('#hunger-value-' + this.game).innerText = this.hunger;
    }
    dead() {
        document.querySelector('#life-status-' + this.game).innerText = 'Dead';
        this.stop();
    }

    isRunning() {
        return this.running;
    }
    start() {
        this.time = 0;
        this.happiness = 5;
        this.hunger = 5;

        this.setPicture(this.happiness, this.hunger);

        document.querySelector('#start-' + this.game).innerText = 'Stop';

        document.querySelector('#life-status-' + this.game).innerText = 'Alive';

        document.querySelector('#start-timer-' + this.game).innerText = this.time;
        document.querySelector('#happiness-value-' + this.game).innerText = this.happiness;
        document.querySelector('#hunger-value-' + this.game).innerText = this.hunger;

        this.setInterval = setInterval(this.updateGameTimer.bind(this), 1000);
        this.intervalHappy = setInterval(this.updateHappyTimer.bind(this), 5000);
        this.intervalHunger = setInterval(this.updateHungerTimer.bind(this), 5000);

        this.running = true;
    }
    stop() {
        clearInterval(this.setInterval);
        clearInterval(this.intervalHappy);
        clearInterval(this.intervalHunger);
        this.running = false;
        document.querySelector('#start-' + this.game).innerText = 'Start';
    }

    updateGameTimer() {
        this.time++;
        document.querySelector('#start-timer-' + this.game).innerText = this.time;

        //check life status every second
        if ((this.happiness <= 0) || (this.hunger >= 10)) {
            this.setPicture(this.happiness, this.hunger);
            this.dead();
        }
    }
    updateHappyTimer() {
        (this.happiness <= 0) ? 0 : this.happiness--;
        this.setPicture(this.happiness, this.hunger);
        document.querySelector('#happiness-value-' + this.game).innerText = this.happiness;
    }
    updateHungerTimer() {
        (this.hunger >= 10) ? 10 : this.hunger++;
        this.setPicture(this.happiness, this.hunger);
        document.querySelector('#hunger-value-' + this.game).innerText = this.hunger;
    }
}