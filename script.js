let song = document.querySelector(".song");
let progress=document.querySelector(".progress");
let playIcon=document.querySelector(".playIcon");

song.onloadedmetadata=function() {
    progress.max=song.duration;
    progress.value=song.currentTime;
}