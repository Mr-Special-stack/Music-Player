console.log("JS Running");
let song = document.querySelector("#song");
let controls = document.querySelector("#controls");
let playPauseIcon = controls.querySelector("i");
let progress=document.querySelector("#progress")
let container=document.querySelector(".container")

let isPlaying = false;
console.log(progress)
console.log(progress)

song.onloadedmetadata = () => {
    progress.max = song.duration
    progress.value = song.currentTime
}
song.ontimeupdate = () => {
    progress.value = song.currentTime
}
progress.addEventListener('input', () => {
    song.currentTime = progress.value;
});
const pause=()=>{
    song.pause();
    isPlaying = false;
    playPauseIcon.classList.remove("fa-pause"); 
    playPauseIcon.classList.add("fa-play");
}
const play=()=>{
    song.play();
    isPlaying = true;
    playPauseIcon.classList.remove("fa-play");
    playPauseIcon.classList.add("fa-pause");
}

controls.addEventListener("click", () => {
    if (!isPlaying) {
        play()
    } else {
        pause()
    }
});

container.addEventListener('keydown',(event)=>{
    if(event.code="Space"){
        console.log("Space is pressed")
        event.preventDefault()
    }
})



// const container = document.querySelector('.container');

// document.addEventListener('keydown', (event) => {
//     // if (event.code === 'Space') {
//     //     console.log("clicked");
//     //     // Prevent the default spacebar behavior (scrolling)
//     //     event.preventDefault();
//     // }
//     console.log(event)
// });