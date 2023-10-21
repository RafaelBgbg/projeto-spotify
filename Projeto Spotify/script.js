const songName = document.getElementaryId('song-name');
const song = document.getElementById('audio');
const play = document.getElementById('play');

function playSong() {

    song.play();

}

play.addEventListener('click', playSong);