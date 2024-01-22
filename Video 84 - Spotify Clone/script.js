
let currentSong = new Audio();
let songs;
let currFolder="BTR";

// let folderList=document.getElementsByClassName("card");
// for(let i=0;i<folderList.length;i++ ){
//     folderList[i].getElementsByTagName("h3").innerHTML=""
// }
async function getSongs(folder) {
    currFolder = folder;
    
    let a = await fetch(`http://127.0.0.1:5500/Video%2084%20-%20Spotify%20Clone/Songs/${folder}`)
    let response = await a.text();
    // console.log(response);
    let div = document.createElement("div");
    div.innerHTML = response;
    songNames = div.getElementsByTagName("a");
    console.log(songNames);
    songs = [];
    for (let i = 0; i < songNames.length; i++) {
        if (songNames[i].href.endsWith(".mp3")) {
            songs.push(songNames[i].href);
        }
    }
    // songs = await getSongs(currFolder);
    console.log(songs);
    songList = document.getElementById("playlist");
    songList.innerHTML = "";

    for (let i = 0; i < songs.length; i++) {
        songList.innerHTML +=
            `<li> <img class="invert" src="img/music.svg">
        <div class="songInfo"> 
            <div class="songNames">${songs[i].replaceAll("%20", " ").replaceAll("%2C", ",").split("/Songs/")[1]}</div>
            <div style="font-size:10px; color:rgb(168 161 161)">Artist Name</div>
        </div>
        <img class="playSongButton" src="img/play.svg">
         </li>`;
    }
    Array.from(document.querySelector("#playlist").getElementsByTagName("li")).forEach(e => {
        e.addEventListener("click", (element) => {
            let songName = e.getElementsByTagName("div")[0].getElementsByTagName("div")[0].innerHTML;;
            playMusic(e.getElementsByTagName("div")[0].getElementsByTagName("div")[0].innerHTML);

        });

    });
    return songs;
 
}
async function displayAlbums(){
    let a = await fetch(`http://127.0.0.1:5500/Video%2084%20-%20Spotify%20Clone/Songs/`)
    let response = await a.text();
    let div1 = document.createElement("div");
    div1.innerHTML = response;
    console.log(div1);
    console.log(div1.querySelectorAll("#files li"));
    let folderList = div1.getElementsByTagName("a");
    console.log(folderList);
    let str = "http://127.0.0.1:5500/Video%2084%20-%20Spotify%20Clone/Songs/";
    let len = str.length;
    let array = Array.from(folderList)
    for (let index = 0; index < array.length; index++) {
        const e = array[index];
        if(e.href.length > len || e.href !="http://127.0.0.1:5500/Video%2084%20-%20Spotify%20Clone/Songs/Video%2084%20-%20Spotify%20Clone/"){
            let folder = e.href.split("/").slice(-1)[0] ;
            //get meta data of each folder
            let b = await fetch(`http://127.0.0.1:5500/Video%2084%20-%20Spotify%20Clone/Songs/${folder}/info.json`);
            let response2 = await b.json();
            console.log(response2);

            cardContainer = document.querySelector(".cardContainer")
            cardContainer.innerHTML += `<div data-folder="${folder}" class="card bg-lightGrey2 rounded2">
                        <img src="/Video%2084%20-%20Spotify%20Clone/Songs/${folder}/cover.jpg" alt="">
                        <img class="play" src="img/playButton.svg">
                        <div class="details">
                            <h3>${response2.title}</h3>
                            <p>${response2.description}</p>
                        </div>
                    </div>`

        }
    };
    Array.from(document.getElementsByClassName("card")).forEach(e => {
        
            e.addEventListener("click",async (item) => {
            console.log(e);
            songs = await getSongs(`${item.currentTarget.dataset.folder}`)
        });
    });
    
}



function secondsToMinutesAndSeconds(seconds) {
    if (isNaN(seconds) || seconds < 0) {
        return "00:00";
    }

    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;

    // Rounding to two decimal places
    const roundedSeconds = Math.round(remainingSeconds * 100) / 100;

    // Adding leading zero if necessary
    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(roundedSeconds).padStart(5, '0').slice(0, 2); // Limit to two decimal places

    return `${formattedMinutes}:${formattedSeconds}`;
}

const playMusic = async (track, pause = false) => {
    if (!pause) {
        currentSong.src = decodeURI(`/Video%2084%20-%20Spotify%20Clone/Songs/` + track);
        console.log(track);
        play.src = "img/pause.svg";
        currentSong.play();
    }



    document.querySelector(".songName").innerText = decodeURI(track.split("/")[1].split(".mp3")[0]);
    songDuration = currentSong.duration;
    // console.log(songDuration);

    document.querySelector(".songTime").innerHTML = songDuration;

}

async function main() {

    
    // playMusic(songs[0].split("/Songs/")[-1],true);
    //attach event listener to songs
    
    //display all the albums on the page
    displayAlbums();


    currentSong.addEventListener("timeupdate", () => {
        // console.log(currentSong.currentTime, currentSong.duration);
        document.querySelector(".songTime").innerHTML = `${secondsToMinutesAndSeconds(currentSong.currentTime)}/ ${secondsToMinutesAndSeconds(currentSong.duration)}`;
        document.querySelector(".circle").style.left = (currentSong.currentTime / currentSong.duration) * 100 + "%"
        if(document.querySelector(".circle").style.left=="100%"){
            let index = songs.indexOf(currentSong.src);
            if (index + 1 < songs.length) {
                playMusic(songs[index + 1].split(`/Songs/`)[1]);
                document.querySelector(".circle").style.left        ="0%"
            }
            else {
                playMusic(songs[0].split(`/Songs/`)[1]);
                document.querySelector(".circle").style.left="0%"
            }
        }
    });
    //attach event listner to music control buttons 
    play.addEventListener("click", () => {
        if (currentSong.paused) {
            currentSong.play();
            play.src = "img/pause.svg";
        }
        else {
            currentSong.pause();
            play.src = "img/play.svg";
        }
    });
    next.addEventListener("click", () => {
        console.log(songs)
        let index = songs.indexOf(currentSong.src);
        
        currentSong.pause();
        if (index + 1 < songs.length) {
            playMusic(songs[index + 1].split(`/Songs/`)[1]);
        }
        else {
            playMusic(songs[0].split(`/Songs/`)[1]);
        }


        

    });
    prev.addEventListener("click", () => {
        
        let index = songs.indexOf(currentSong.src);
        currentSong.pause();
        if (index - 1 >= 0) {
            playMusic(songs[index - 1].split("/Songs/")[1]);
        }
        else {
            playMusic(songs[songs.length - 1].split("/Songs/")[1]);
        }

    });
    //add eventListener for seekbar
    document.querySelector(".seekbar").addEventListener("click", (e) => {
        let songProgress = (e.offsetX / e.target.getBoundingClientRect().width) * 100
        document.querySelector(".circle").style.left = songProgress * 100 + "%";
        currentSong.currentTime = currentSong.duration * songProgress / 100;
    });

    //hamburger event listener

    document.querySelector(".hamburger").addEventListener("click", (e) => {
        document.querySelector(".left").classList.toggle("slide");
    })
    //
    document.getElementsByTagName("input")[0].addEventListener("change", (e) => {
        console.log(e.target.value);
        currentSong.volume = parseInt(e.target.value) / 100;
    });

    // add event listener to mute when tapping on speaker icon
    document.getElementById("muteButton").addEventListener("click",e=>{
        if(currentSong.volume != 0){
            currentSong.volume = 0
            e.target.src = "img/mute.svg"
            document.getElementsByTagName("input")[0].value=0;
            
        }
        else if(currentSong.volume == 0){
            currentSong.volume = 0.10;
            e.target.src = "img/volume.svg";
            document.getElementsByTagName("input")[0].value=10;
        }
    });

    //changing playlists
    

}


main();
