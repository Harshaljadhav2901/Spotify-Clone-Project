console.log("Welcome to Spotify");

//initialize 
let SongsIndex = 0;
let songItems = Array.from(document.getElementsByClassName('songItem'));
let createElement = document.createElement('Audio');
let audioElement = new Audio('Songs/1.mp3'); 
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');


let Songs = [
    {songName:"Adore You - Harry Styles", filePath: "Songs/1.mp3", coverPath: "Album/Cover01.jpg"},
    {songName:"Closer - The Chainsmokers", filePath: "Songs/2.mp3", coverPath: "Album/Cover02.jpg"},
    {songName:"Cherry Bomb - NCT 127", filePath: "Songs/3.mp3", coverPath: "Album/Cover03.jpg"},
    {songName:"Arijit Singh - Kesariya", filePath: "Songs/4.mp3", coverPath: "Album/Cover04.jpg"},
    {songName:"Love Talk - WayV", filePath: "Songs/5.mp3", coverPath: "Album/Cover05.jpg"},
    {songName:"AGUST D - Agust D", filePath: "Songs/6.mp3", coverPath: "Album/Cover06.jpg"},
    {songName:"Maan Meri Jaan - KING", filePath: "Songs/7.mp3", coverPath: "Album/Cover07.jpg"},
    {songName:"Elevated - SHUBH", filePath: "Songs/8.mp3", coverPath: "Album/Cover08.jpg"},
]

songItems.forEach((element, i)=>{
    element.getElementsByTagName("img")[0].src = Songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = Songs[i].songName;

})
// audioElement = new Audio('1.mp3');
//audio element play

//handle play/pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;  
    }
    
})

// listen Events
audioElement.addEventListener('timeupdate', ()=>{
 
 //update seekbar
 progress = parseInt((audioElement.currentTime/audioElement.duration)* 100);
 myProgressBar.value = progress;
})


myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = (myProgressBar.value * audioElement.duration/100);
}) 

const  makeAllPlayes = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        console.log(element);
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })

}    
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        console.log(e.target);
        makeAllPlayes(); 
        SongsIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `Songs/${SongsIndex+1}.mp3`;
        masterSongName.innerText = Songs[SongsIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1; 
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click',()=>{
    if(SongsIndex>=9){
        SongsIndex = 0
    }
    else{
    SongsIndex += 1;
    }
    audioElement.src = `Songs/${SongsIndex+1}.mp3`;
     masterSongName.innerText = Songs[SongsIndex].songName;
     audioElement.currentTime = 0;
     audioElement.play();
     masterPlay.classList.remove('fa-play-circle');
     masterPlay.classList.add('fa-pause-circle');
})

document.getElementById('previous').addEventListener('click',()=>{
    if(SongsIndex<=0){
        SongsIndex = 0
    }
    else{
    SongsIndex -= 1;
    }
    audioElement.src = `Songs/${SongsIndex+1}.mp3`;
     masterSongName.innerText = Songs[SongsIndex].songName;
     audioElement.currentTime = 0;
     audioElement.play();
     masterPlay.classList.remove('fa-play-circle');
     masterPlay.classList.add('fa-pause-circle');
})