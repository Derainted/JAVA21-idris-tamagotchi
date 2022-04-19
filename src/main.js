import { CreateTama } from "./modules/CreateTama.js"


document.querySelector('#play').addEventListener('click', play);
document.querySelector('#reset').addEventListener('click', reset);

function play() {
    const input = document.querySelector("input").value;
    CreateTama();
}

function reset() {
    location.reload();
}