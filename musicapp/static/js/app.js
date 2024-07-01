let pop_song_left = document.getElementById('pop_song_left');
let pop_song_right = document.getElementById('pop_song_right');
let pop_song = document.getElementsByClassName('pop_song')[0];

pop_song_right.addEventListener('click', ()=>{
    pop_song.scrollLeft += 330;
})
pop_song_left.addEventListener('click', ()=>{
    pop_song.scrollLeft -= 330;
})

let left_scrolls = document.getElementById('left_scrolls');
let right_scrolls = document.getElementById('right_scrolls');
let item = document.getElementsByClassName('item')[0];

right_scrolls.addEventListener('click', ()=>{
    item.scrollLeft += 330;
})
left_scrolls.addEventListener('click', ()=>{
    item.scrollLeft -= 330;
})


    
const songs = [
    { id: '1', songName: 'On My Way <br><div class="subtitle">Alan Walker</div>', poster: 'static/img/1.jpg', playCount: 0 },
    { id: '2', songName: 'Alan Walker - Fade <br><div class="subtitle">Alan Walker</div>', poster: 'static/img/2.jpg', playCount: 0 },
    { id: '3', songName: 'Alan Walker - The Spectre <br><div class="subtitle">Alan Walker</div>', poster: 'static/img/3.jpg', playCount: 0 },
    { id: '4', songName: 'Alan Walker - Alone <br><div class="subtitle">Alan Walker</div>', poster: 'static/img/4.jpg', playCount: 0 },
    { id: '5', songName: 'Alan Walker - Darkside <br><div class="subtitle">Alan Walker</div>', poster: 'static/img/5.jpg', playCount: 0 },
    { id: '6', songName: 'Alan Walker - Ignite <br><div class="subtitle">Alan Walker</div>', poster: 'static/img/6.jpg', playCount: 0 },
    { id: '7', songName: 'Lost Control <br><div class="subtitle">Alan Walker</div>', poster: 'static/img/7.jpg', playCount: 0 },
    { id: '8', songName: 'Not You <br><div class="subtitle">Alan Walker</div>', poster: 'static/img/8.jpg', playCount: 0 },
    { id: '9', songName: 'LILY <br><div class="subtitle">Alan Walker</div>', poster: 'static/img/9.jpg', playCount: 0 },
    { id: '10', songName: 'Somebody Like You <br><div class="subtitle">Alan Walker</div>', poster: 'static/img/10.jpg', playCount: 0 },
    { id: '11', songName: 'Sing Me to Sleep <br><div class="subtitle">Alan Walker</div>', poster: 'static/img/11.jpg', playCount: 0 },
    { id: '12', songName: 'All Falls Down <br><div class="subtitle">Alan Walker</div>', poster: 'static/img/12.jpg', playCount: 0 },
    { id: '13', songName: 'Unity <br><div class="subtitle">Alan Walker</div>', poster: 'static/img/13.jpg', playCount: 0 },
    { id: '14', songName: 'Shut Up <br><div class="subtitle">Alan Walker</div>', poster: 'static/img/14.jpg', playCount: 0 },
    { id: '15', songName: 'Play <br><div class="subtitle">Alan Walker</div>', poster: 'static/img/15.jpg', playCount: 0 },
    { id: '100', songName: 'Kesariya <br><div class="subtitle">Arijit Singh</div>', poster: 'static/img/100.jpg', playCount: 0 },
    { id: '101', songName: 'Pehle Bhi Main <br><div class="subtitle">A. R. Rahman</div>', poster: 'static/img/101.jpg', playCount: 0 },
    { id: '102', songName: 'Raataan Lambiyan <br><div class="subtitle">Jubin Nautiyal</div>', poster: 'static/img/102.jpg', playCount: 0 },
    { id: '103', songName: 'O Maahi <br><div class="subtitle">Arijit Singh</div>', poster: 'static/img/103.jpg', playCount: 0 },
    { id: '104', songName: 'Gulabi Sadi <br><div class="subtitle">Sanju Rathod</div>', poster: 'static/img/104.jpg', playCount: 0 },
    { id: '105', songName: 'Husn <br><div class="subtitle">Anuv Jain</div>', poster: 'static/img/105.jpg', playCount: 0 },
    { id: '106', songName: 'Rang Sari <br><div class="subtitle">Guru Randhawa</div>', poster: 'static/img/106.jpg', playCount: 0 }
];


function incrementPlayCount(songId) {
    const song = songs.find(s => s.id === songId);
    if (song) {
        song.playCount += 1;
    }
}
function updateRecommendations() {
    const sortedSongs = songs.sort((a, b) => b.playCount - a.playCount);
    const recommendedSongs = sortedSongs.slice(0, 5);
    const recommendationList = document.querySelector('.recommendation_list');
    recommendationList.innerHTML = ''; // Clear previous recommendations

    recommendedSongs.forEach(song => {
        const li = document.createElement('li');
        li.classList.add('songItem');
        li.innerHTML = `
            <div class="img_play">
                <img src="${song.poster}" alt="royal">
                <i class="bi playlistPlay bi-play-circle-fill" id="${song.id}"></i>
            </div>
            <h5>${song.songName}</h5>
        `;
        recommendationList.appendChild(li);
    });

    // Add event listeners to new recommendation items
    Array.from(recommendationList.getElementsByClassName('playlistPlay')).forEach((element) => {
        element.addEventListener('click', (e) => {
            index = e.target.id;
            incrementPlayCount(index); // Track the play count
            // Existing code to play the song...
            updateRecommendations(); // Update recommendations each time a song is played
        });
    });
}

// Update event listener to increment play count and update recommendations
Array.from(document.getElementsByClassName('playlistPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        index = e.target.id;
        incrementPlayCount(index); // Track the play count
        // Existing code to play the song...
        updateRecommendations(); // Update recommendations each time a song is played
    });
});

// Initialize recommendations on page load
document.addEventListener('DOMContentLoaded', () => {
    updateRecommendations(); // Initialize recommendations
});

document.addEventListener('DOMContentLoaded', (event) => {
    const followButton = document.getElementById('follow-button');

    followButton.addEventListener('click', () => {
        if (followButton.textContent === 'FOLLOW') {
            followButton.textContent = 'FOLLOWED';
            followButton.style.background = '#fff';
            followButton.style.color = '#fe1322';
        } else {
            followButton.textContent = 'FOLLOW';
            followButton.style.background = 'none';
            followButton.style.color = '#fe1322';
        }
    });
});


    const songItems = document.querySelectorAll('.songItem');
    songItems.forEach((element, i) => {
     
        if (songs[i]) {
           
            const imgElement = element.querySelector('img');
            if (imgElement) {
                imgElement.src = songs[i].poster;
            }
        
            const h5Element = element.querySelector('h5');
          if (h5Element) {
            h5Element.innerHTML = songs[i].songName; 
            }
        }
    });

let music = new Audio('static/audio/1.mp3');
let masterPlay = document.getElementById('masterplay');
let wave = document.getElementsByClassName('wave')[0];

masterPlay.addEventListener('click', () => {
    if (music.paused || music.currentTime <=0) {
        music.play();
        wave.classList.add('active2');
        masterPlay.classList.remove('bi-play-circle');
        masterPlay.classList.add('bi-pause-circle');
    } else {
        music.pause();
        wave.classList.remove('active2');
        masterPlay.classList.remove('bi-pause-circle');
        masterPlay.classList.add('bi-play-circle');
    }
});
const makeAllPlays = ()=>  {
    Array.from(document.getElementsByClassName('playlistPlay')).forEach((element)=>{
            element.classList.add('bi-play-circle-fill');
            element.classList.remove('bi-pause-circle-fill');    
});
}

const makeAllBackground = ()=>{
Array.from(document.getElementsByClassName('songItem')).forEach((el)=>{
    el.style.background = 'rgb(105,105,105,.0)';
})
}

let index = 0;
let poster_master_play = document.getElementById('poster_master_play');
let download_music = document.getElementById('download_music');

let title = document.getElementById('title');


Array.from(document.getElementsByClassName('playlistPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        index = e.target.id;
        
        music.src = `static/audio/${index}.mp3`;
        poster_master_play.src = `static/img/${index}.jpg`;
        music.play();
        masterPlay.classList.remove('bi-play-circle');
        masterPlay.classList.add('bi-pause-circle');
        download_music.href = `static/audio/${index}.mp3`;
        let song_title = songs.filter((ele)=>{
            return ele.id == index;
        });
        
        song_title.forEach(eles =>{
            let {songName} = eles;
            title.innerHTML = songName;
            download_music.setAttribute('download', songName);
        });
        
        makeAllBackground();
        Array.from(document.getElementsByClassName('songItem'))[index-1].style.background ="rgb(105,105,105,.1)";
        makeAllPlays();
        e.target.classList.remove('bi-play-circle-fill');
        e.target.classList.add('bi-pause-circle-fill'); 
        wave.classList.add('active2');
    });
});

let currrentStart = document.getElementById('currrentStart');
let currrentEnd = document.getElementById('currrentEnd');
let seek = document.getElementById('seek');
let bar2 = document.getElementById('bar2');
let dot = document.getElementsByClassName('dot')[0];
  
  
  
  
music.addEventListener('timeupdate', ()=>{
    let music_curr = music.currentTime;
    let music_dur = music.duration;

    let min1 = Math.floor(music_dur / 60);
    let sec1 = Math.floor(music_dur % 60);

    if(sec1 < 10){
        sec1 = `0${sec1}`;
    }

    currrentEnd.innerText = `${min1}:${sec1}`;

    let min2 = Math.floor(music_curr / 60);
    let sec2 = Math.floor(music_curr % 60);

    if(sec2 < 10){
        sec2 = `0${sec2}`;
    }
    currrentStart.innerText = `${min2}:${sec2}`;

    let progressBar = parseInt((music_curr/music_dur)* 100);
    seek.value = progressBar;

    let seekbar = seek.value;
    bar2.style.width = `${seekbar}%`;
    dot.style.left = `${seekbar}%`;

});

seek.addEventListener('change', ()=>{
music.currentTime = seek.value * music.duration / 100;
});

let vol_icon = document.getElementById('vol_icon');
let vol = document.getElementById('vol');
let vol_bar = document.getElementsByClassName('vol_bar')[0];
let vol_dot = document.getElementById('vol_dot');

vol.addEventListener('change', ()=>{
if(vol.value == 0) {
vol_icon.classList.remove('bi-volume-up-fill');
vol_icon.classList.remove('bi-volume-down-fill');
vol_icon.classList.add('bi-volume-off-fill');
}
if(vol.value > 0){
vol_icon.classList.remove('bi-volume-up-fill');
vol_icon.classList.add('bi-volume-down-fill');
vol_icon.classList.remove('bi-volume-off-fill');
}
if(vol.value > 50 ){
vol_icon.classList.add('bi-volume-up-fill');
vol_icon.classList.remove('bi-volume-down-fill');
vol_icon.classList.remove('bi-volume-off-fill');
}
let vol_a = vol.value;
vol_bar.style.width = `${vol_a}%`;
vol_dot.style.left = `${vol_a}%`;
music.volume = vol_a / 100;
});

let back = document.getElementById('back');
let next = document.getElementById('next');


back.addEventListener('click', ()=>{
index -= 1;
if(index < 1) {
index = Array.from(document.getElementsByClassName('songItem')).length;
}
music.src = `static/audio/${index}.mp3`;
poster_master_play.src = `static/img/${index}.jpg`;
music.play();
masterPlay.classList.remove('bi-play-circle');
masterPlay.classList.add('bi-pause-circle');
let song_title = songs.filter((ele)=>{
return ele.id == index;
});

song_title.forEach(eles =>{
let {songName} = eles;
title.innerHTML = songName;
});

makeAllBackground();
Array.from(document.getElementsByClassName('songItem'))[index-1].style.background ="rgb(105,105,105,.1)";
makeAllPlays();
e.target.classList.remove('bi-play-circle-fill');
e.target.classList.add('bi-pause-circle-fill'); 
wave.classList.add('active2');
})

next.addEventListener('click', ()=>{
index ++;
if(index > Array.from(document.getElementsByClassName('songItem')).length){
index = 1;
}
music.src = `static/audio/${index}.mp3`;
poster_master_play.src = `static/img/${index}.jpg`;
music.play();
masterPlay.classList.remove('bi-play-circle');
masterPlay.classList.add('bi-pause-circle');
let song_title = songs.filter((ele)=>{
return ele.id == index;
});

song_title.forEach(eles =>{
let {songName} = eles;
title.innerHTML = songName;
});

makeAllBackground();
Array.from(document.getElementsByClassName('songItem'))[index-1].style.background ="rgb(105,105,105,.1)";
makeAllPlays();
e.target.classList.remove('bi-play-circle-fill');
e.target.classList.add('bi-pause-circle-fill'); 
wave.classList.add('active2');
})

let shuffle = document.getElementsByClassName('shuffle')[0];

shuffle.addEventListener('click', ()=>{
let a = shuffle.innerHTML;

switch (a) {
case "next":
shuffle.classList.add('bi-arrow-repeat');
shuffle.classList.remove('bi-music-note-beamed');
shuffle.classList.remove('bi-shuffle');
shuffle.innerHTML = 'repeat';
break;

case "repeat":
shuffle.classList.remove('bi-arrow-repeat');
shuffle.classList.remove('bi-music-note-beamed');
shuffle.classList.add('bi-shuffle');
shuffle.innerHTML = 'random';
break;

case "random":
shuffle.classList.remove('bi-arrow-repeat');
shuffle.classList.add('bi-music-note-beamed');
shuffle.classList.remove('bi-shuffle');
shuffle.innerHTML = 'next';
break;
} 
});


const next_music = ()=>{
if(index == songs.length){
index = 1
} else {
index++;
}
            
music.src = `static/audio/${index}.mp3`;
poster_master_play.src = `static/img/${index}.jpg`;
music.play();
masterPlay.classList.remove('bi-play-circle');
masterPlay.classList.add('bi-pause-circle');
download_music.href = `static/audio/${index}.mp3`;
let song_title = songs.filter((ele)=>{
    return ele.id == index;
});

song_title.forEach(eles =>{
    let {songName} = eles;
    title.innerHTML = songName;
    download_music.setAttribute('download', songName);
});

makeAllBackground();
Array.from(document.getElementsByClassName('songItem'))[index-1].style.background ="rgb(105,105,105,.1)";
makeAllPlays();
e.target.classList.remove('bi-play-circle-fill');
e.target.classList.add('bi-pause-circle-fill'); 
wave.classList.add('active2');
}

const repeat_music = ()=>{
index;
            
music.src = `static/audio/${index}.mp3`;
poster_master_play.src = `static/img/${index}.jpg`;
music.play();
masterPlay.classList.remove('bi-play-circle');
masterPlay.classList.add('bi-pause-circle');
download_music.href = `static/audio/${index}.mp3`;
let song_title = songs.filter((ele)=>{
    return ele.id == index;
});

song_title.forEach(eles =>{
    let {songName} = eles;
    title.innerHTML = songName;
    download_music.setAttribute('download', songName);
});

makeAllBackground();
Array.from(document.getElementsByClassName('songItem'))[index-1].style.background ="rgb(105,105,105,.1)";
makeAllPlays();
e.target.classList.remove('bi-play-circle-fill');
e.target.classList.add('bi-pause-circle-fill'); 
wave.classList.add('active2');
}

const random_music = ()=>{
if(index == songs.length){
index = 1
} else {
index = Math.floor((Math.random() * songs.length) + 1);
}        
music.src = `static/audio/${index}.mp3`;
poster_master_play.src = `static/img/${index}.jpg`;
music.play();
masterPlay.classList.remove('bi-play-circle');
masterPlay.classList.add('bi-pause-circle');
download_music.href = `static/audio/${index}.mp3`;
let song_title = songs.filter((ele)=>{
   return ele.id == index;
});

song_title.forEach(eles =>{
   let {songName} = eles;
   title.innerHTML = songName;
   download_music.setAttribute('download', songName);
});

makeAllBackground();
Array.from(document.getElementsByClassName('songItem'))[index-1].style.background ="rgb(105,105,105,.1)";
makeAllPlays();
e.target.classList.remove('bi-play-circle-fill');
e.target.classList.add('bi-pause-circle-fill'); 
wave.classList.add('active2');
}

music.addEventListener('ended', ()=>{
let b = shuffle.innerHTML;


switch (b) {
case 'repeat':
repeat_music();
break;

case 'next':
next_music();
break;

case 'random':
random_music();
break;
};
});


// Search Songs

let search_result = document.getElementsByClassName('search_result')[0];
let no_results = document.getElementById('no-results');

songs.forEach(element => {
    const {id, songName, poster} = element;
    let card = document.createElement('a');
    card.classList.add('card');
    card.href = '#' + id;
    card.innerHTML = `<img src="${poster}" alt="" >
    <div class="content">
        ${songName}
    </div>`;
    search_result.appendChild(card);
});

let input = document.getElementsByTagName('input')[0];

input.addEventListener('keyup', () => {
    let input_value = input.value.toUpperCase();
    let items = search_result.getElementsByTagName('a');
    let found = false;

    for (let i = 0; i < items.length; i++) {
        let as = items[i].getElementsByClassName('content')[0];
        let text_value = as.textContent || as.innerText;

        if (text_value.toUpperCase().indexOf(input_value) > -1) {
            items[i].style.display = "flex";
            found = true;
        } else {
            items[i].style.display = "none";
        }
    }

    if (input.value == 0) {
        search_result.style.display = "none";
        no_results.style.display = "none";
    } else {
        search_result.style.display = "";
        no_results.style.display = found ? "none" : "block";
    }
});

let playButton = document.getElementById('play-button');

playButton.addEventListener('click', () => {
    if (music.paused || music.currentTime <= 0) {
        music.play();
        wave.classList.add('active2');
        masterPlay.classList.remove('bi-play-circle');
        masterPlay.classList.add('bi-pause-circle');
        playButton.textContent = 'PLAYING'; // Change button text to 'PLAYING'
    } else {
        music.pause();
        wave.classList.remove('active2');
        masterPlay.classList.remove('bi-pause-circle');
        masterPlay.classList.add('bi-play-circle');
        playButton.textContent = 'PLAY'; // Change button text back to 'PLAY'
    }
});

Array.from(document.getElementsByClassName('playlistPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        index = e.target.id;
        music.src = `static/audio/${index}.mp3`;
        poster_master_play.src = `static/img/${index}.jpg`;
        music.play();
        masterPlay.classList.remove('bi-play-circle');
        masterPlay.classList.add('bi-pause-circle');
        playButton.textContent = 'PLAYING'; // Change button text to 'PLAYING'
        let song_title = songs.filter((ele) => {
            return ele.id == index;
        });

        song_title.forEach(eles => {
            let { songName } = eles;
            title.innerHTML = songName;
            download_music.setAttribute('download', songName);
        });

        makeAllBackground();
        Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background = "rgb(105,105,105,.1)";
        makeAllPlays();
        e.target.classList.remove('bi-play-circle-fill');
        e.target.classList.add('bi-pause-circle-fill');
        wave.classList.add('active2');
    });
});
