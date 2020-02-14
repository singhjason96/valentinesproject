
function yesMusic(el){
    var songFiles = [
      './yes-music/AllDayLong.mp3',
      './yes-music/3am.mp3',
      './yes-music/NSA.mp3',
      './yes-music/CumGetIt.mp3',
      './yes-music/DieForYou.mp3'
    ];

    var trackList = ["All Day Long", "3am", "No Strings Attatched", "Cum Get It", "Die For You"];

    var songs = [];
    let bigContainer = document.createElement('div');
    bigContainer.className = "bigContainer";
    el.disabled = true;
    let headTitle = document.createElement('H1');
    headTitle.className = "celebrate";
    headTitle.innerHTML = "Let's Celebrate With Tacos";
    let newDiv = document.createElement('div');
    newDiv.className = "suprise";
    let playlist = document.createElement('h1');
    playlist.innerHTML = "Here's Your Playlist For The Day";
    playlist.className = "playlist";
    document.body.append(headTitle, newDiv, playlist); 
    var elem = document.getElementById('button-clicks');
    elem.remove();
    var heartEmpty = document.getElementById('heart');
    heartEmpty.remove();
    var titleEmpty = document.getElementById('top');
    titleEmpty.remove();

    
    for(let i = 0; i<songFiles.length; i++){
      song = new Audio(`${songFiles[i]}`)
      songs.push(song);
      let divContainer = document.createElement('div');
      divContainer.className = 'divContainer';
      let playButton = document.createElement('button');
      playButton.className = "play";
      // playButton.innerHTML = "Play";
      playButton.onclick = function() {
        songs[i].play();
      }
      divContainer.appendChild(playButton);
      let track = document.createElement('h3');
      track.innerHTML = trackList[i];
      track.className = "track";
      divContainer.appendChild(track);
      let pauseButton = document.createElement('button');
        // pauseButton.innerHTML = 'Pause'; 
        pauseButton.className = 'pause';
        pauseButton.onclick = function() {
          songs[i].pause();
        }
        divContainer.appendChild(pauseButton);
        bigContainer.appendChild(divContainer);
        document.body.append(bigContainer);
    }
    console.log(songs);
    // song.oncanplaythrough = function() {
    //   song.play();
    // }

}


function noMusic(el){
  var songFiles = [
    './no-music/HopelessRomantic.mp3',
    './no-music/DTB.mp3',
    './no-music/InTheDark.mp3',
    './no-music/MyExes.mp3',
    './no-music/InsideMan.mp3'
  ];

  var trackList = ["Hopeless Romantic", "D.T.B", "In The Dark", "My Exes", "Inside Man"];

  var songs = [];
  let bigContainer = document.createElement('div');
  bigContainer.className = "bigContainer";
  el.disabled = true;
  let headTitle = document.createElement('H1');
  headTitle.className = "celebrate";
  headTitle.innerHTML = "Fuck You Then";
  let newDiv = document.createElement('div');
  newDiv.className = "no-suprise";
  let playlist = document.createElement('h1');
  playlist.innerHTML = "Here's Your Playlist For The Day";
  playlist.className = "playlist";
  document.body.append(headTitle, newDiv, playlist); 
  var elem = document.getElementById('button-clicks');
  elem.remove();
  var heartEmpty = document.getElementById('heart');
  heartEmpty.remove();
  var titleEmpty = document.getElementById('top');
    titleEmpty.remove();
  
  for(let i = 0; i<songFiles.length; i++){
    song = new Audio(`${songFiles[i]}`)
    songs.push(song);
    let divContainer = document.createElement('div');
    divContainer.className = 'divContainer';
    let playButton = document.createElement('button');
    playButton.className = "play";
    // playButton.innerHTML = "Play";
    playButton.onclick = function() {
      songs[i].play();
    }
    divContainer.appendChild(playButton);
    let track = document.createElement('h3');
    track.innerHTML = trackList[i];
    track.className = "track";
    divContainer.appendChild(track);
    let pauseButton = document.createElement('button');
      // pauseButton.innerHTML = 'Pause'; 
      pauseButton.className = 'pause';
      pauseButton.onclick = function() {
        songs[i].pause();
      }
      divContainer.appendChild(pauseButton);
      bigContainer.appendChild(divContainer);
      document.body.append(bigContainer);
  }
  console.log(songs);
}

