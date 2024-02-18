let song = document.querySelector(".song");
let progress = document.querySelector("#progress");
let playIcon = document.querySelector("#playIcon");

let songName=document.querySelector(".song-name");
let artist=document.querySelector(".artist");
let songImg=document.querySelector(".song-img");
let prev=document.querySelector("#prev");
let next=document.querySelector("#next");

song.onloadedmetadata = function () {
    progress.max = song.duration;
    progress.value = song.currentTime;
}

let playPause = () => {
    if (playIcon.classList.contains("fa-pause")) {
        song.pause();
        playIcon.classList.add("fa-play");
        playIcon.classList.remove("fa-pause");
    } else {
        song.play();
        playIcon.classList.add("fa-pause");
        playIcon.classList.remove("fa-play");
    }
}

document.querySelector(".controls div:nth-child(2").addEventListener("click", playPause);

// code for progress bar
if (song.play()) {
    setInterval(() => {
        progress.value=song.currentTime;
    }, 800);
}

progress.onchange=function(){
    song.currentTime=progress.value;
}
