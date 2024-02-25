let song = document.querySelector(".song");
let progress = document.querySelector("#progress");
let playIcon = document.querySelector("#playIcon");

let songName = document.querySelector(".song-name");
let artist = document.querySelector(".artist");
let songImg = document.querySelector(".song-img");
let prev = document.querySelector("#prev");
let next = document.querySelector("#next");

let navIcon = document.querySelector(".nav-icon");
let reloadPage = document.querySelector("#reload-page");

let trackIndex = 0;

song.onloadedmetadata = function () {
    progress.max = song.duration;
    progress.value = song.currentTime;

    updateDuration();
}

let updateDuration = () => {
    const durationText = document.querySelector(".duration");
    const minutes = Math.floor(song.duration / 60);
    const seconds = Math.floor(song.duration % 60);
    durationText.innerText = ` ${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

let updateCurrentTime = () => {
    const currentTimeText = document.querySelector(".current-time");
    const minutes = Math.floor(song.currentTime / 60);
    const seconds = Math.floor(song.currentTime % 60);
    currentTimeText.innerText = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
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
song.addEventListener("timeupdate", () => {
    progress.value = song.currentTime;

    updateCurrentTime();
});

progress.onchange = function () {
    song.currentTime = progress.value;
}

song.addEventListener("ended", () => {
    playIcon.classList.add("fa-play");
    playIcon.classList.remove("fa-pause");
})


const musicList = [
    {
        artist: "Karan Aujla",
        songName: "Don't Look",
        songImg: "songs/cover.jpg",
        songSrc: "songs/Dont Look.mp3",
    },
    {
        artist: "Arjan Dhillon",
        songName: "It's My Time",
        songImg: "songs/cover1.jpg",
        songSrc: "songs/Its My Time.mp3",
    },
    {
        artist: "Diljit Dosanjh",
        songName: "Mood",
        songImg: "songs/cover2.jpg",
        songSrc: "songs/Mood.mp3",
    },
    {
        artist: "Amrinder Gill",
        songName: "Family Di Member",
        songImg: "songs/cover3.jpg",
        songSrc: "songs/Family Di Member.mp3",
    },
    {
        artist: "Deep Jandu",
        songName: "Bombay To Punjab",
        songImg: "songs/cover4.jpg",
        songSrc: "songs/Bombay to Punjab.mp3",
    },
    {
        artist: "Gippy Grewal",
        songName: "Patt Lainge",
        songImg: "songs/cover5.jpg",
        songSrc: "songs/Patt Lainge.mp3",
    },
    {
        artist: "Ammy Virk",
        songName: "Chann Sitare",
        songImg: "songs/cover6.jpg",
        songSrc: "songs/Chann Sitare.mp3",
    },
    {
        artist: "Sukha",
        songName: "8 Asle",
        songImg: "songs/cover7.jpg",
        songSrc: "songs/8 Asle.mp3",
    },
    {
        artist: "Amrit Maan",
        songName: "Hype",
        songImg: "songs/cover8.jpg",
        songSrc: "songs/Hype.mp3",
    },
    {
        artist: "Karan Aujla",
        songName: "Ykwim",
        songImg: "songs/cover9.jpg",
        songSrc: "songs/Ykwim.mp3",
    },
]

next.addEventListener("click", (e) => {
    if (trackIndex === musicList.length - 1) {
        trackIndex = 0;
        songImg.src = musicList[trackIndex].songImg;
        song.src = musicList[trackIndex].songSrc;
        song.pause();
        playIcon.classList.add("fa-play");
        playIcon.classList.remove("fa-pause");
        songName.innerText = musicList[trackIndex].songName;
        artist.innerText = musicList[trackIndex].artist;
    } else {
        trackIndex++;
        songImg.src = musicList[trackIndex].songImg;
        song.src = musicList[trackIndex].songSrc;
        song.pause();
        playIcon.classList.add("fa-play");
        playIcon.classList.remove("fa-pause");
        songName.innerText = musicList[trackIndex].songName;
        artist.innerText = musicList[trackIndex].artist;
    }
})

prev.addEventListener("click", (e) => {
    if (trackIndex === 0) {
        trackIndex = musicList.length - 1;
        songImg.src = musicList[trackIndex].songImg;
        song.src = musicList[trackIndex].songSrc;
        song.pause();
        playIcon.classList.add("fa-play");
        playIcon.classList.remove("fa-pause");
        songName.innerText = musicList[trackIndex].songName;
        artist.innerText = musicList[trackIndex].artist;
    } else {
        trackIndex--;
        songImg.src = musicList[trackIndex].songImg;
        song.src = musicList[trackIndex].songSrc;
        song.pause();
        playIcon.classList.add("fa-play");
        playIcon.classList.remove("fa-pause");
        songName.innerText = musicList[trackIndex].songName;
        artist.innerText = musicList[trackIndex].artist;
    }
})

// add an event for reload page
reloadPage.addEventListener("click", () => {
    location.reload();
})