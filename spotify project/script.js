console.log("welcome to spotify");

// intialize the variables

let songIndex = 0;
let audioElement = new Audio('songs/2.mp3');
let masterplay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressbar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItem = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "salam-e-ishq", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "e-ishq", filePath: "songs/2.mp3", coverPath: "covers/2.jpg"},
    {songName: "-ishq", filePath: "songs/3.mp3", coverPath: "covers/3.jpg"},
    {songName: "salam", filePath: "songs/4.mp3", coverPath: "covers/4.jpg"},
    {songName: "salam-e-ishq", filePath: "songs/5.mp3", coverPath: "covers/5.jpg"},
    {songName: "salam-e-ishq", filePath: "songs/6.mp3", coverPath: "covers/6.jpg"},
    {songName: "salam-hq", filePath: "songs/7.mp3", coverPath: "covers/7.jpg"},
    {songName: "salam-e-ishq", filePath: "songs/8.mp3", coverPath: "covers/8.jpg"},
    {songName: "salam-e-ishq", filePath: "songs/9.mp3", coverPath: "covers/9.jpg"},
    {songName: "salam-e-ishq", filePath: "songs/10.mp3", coverPath: "covers/10.jpg"},

]

songItem.forEach((element, i)=>{
   element.getElementsByTagName("img")[0].src = songs[i].coverPath;
   element.getElementsByClassName("songName")[0].src = songs[i].songName;
})

// audioElement.play();


// handel play pause click

masterplay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterplay.classList.remove('fa-pause-circle');
        masterplay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
});


// listen to events

audioElement.addEventListener('timeupdate', ()=>{
    

    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100)
    myProgressBar.value = progress;
});


myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })

}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        // console.log(e.target);

        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerHTML = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
    })
});


document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex = 0;
    }
    else{
        songIndex += 1;

    }

        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerHTML = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0;
    }
    else{
        songIndex -= 1;

    }

        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerHTML = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
})