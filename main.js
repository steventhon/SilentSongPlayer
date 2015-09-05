var playlist = [];
var shuffle, prev = 0, curr = 0, numPlayed = 0;

// Song constructor
function Song(title, artist, album) {
  this.title = title;
  this.artist = artist;
  this.album = album;
  played = false;
}

// Function to append this song to playlist array
Song.prototype.add = function() {
  playlist.push(this);
};

// Hardcode random Songs
var song1 = new Song("Title1", "Artist1", "Album1");
var song2 = new Song("Title2", "Artist2", "Album2");
var song3 = new Song("Title3", "Artist3", "Album3");
var song4 = new Song("Title4", "Artist4", "Album4");
var song5 = new Song("Title5", "Artist5", "Album5");

// Append Songs to playlist
song1.add();
song2.add();
song3.add();
song4.add();
song5.add();
// Append Songs stored from session storage
for (var i = 0, storage = sessionStorage.length; i < storage; i++) {
  var getStored = sessionStorage.getItem(i);
  playlist.push(JSON.parse(getStored));
}

// Play the Song
function playSong() {
  var obj = playlist[curr];
  numPlayed++;
  for (var x in obj) {
      if (x !== "add" && x !== "played") {
        var thing = document.getElementById(x);
        thing.innerHTML = obj[x];
      }
  }
}

// Play next Song
function playNext() {
  prev = curr;
  if (!numPlayed)
    playSong();
  else if (shuffle)
    playRandom();
  else {
    curr++;
    curr %= playlist.length;
    playSong();
  }
}

// Play previous Song. Does not work two or more times in a row.
function playPrev() {
  curr = prev;
  playSong();
}

// Change shuffle on and off
function shuffleSwitch() {
  shuffle = !shuffle;
  var onOff = document.getElementById("shuffle");
  if (shuffle) {
    onOff.innerHTML = "Shuffle Play On";
    onOff.className = "btn btn-success";      
  }
  else {
    onOff.innerHTML = "Shuffle Play Off";
    onOff.className = "btn btn-primary";
  }
}

// Play random Song
function playRandom() {
  do {
    curr = Math.floor(Math.random() * playlist.length)
  } while (curr === prev)
  playSong();
}

// Add a Song to session storage
function addSong() {
  var para = document.getElementById("addSongText");
  var addTitle = document.getElementById("title").value;
  var addArtist = document.getElementById("artist").value;
  var addAlbum = document.getElementById("album").value;
  if (addTitle && addArtist && addAlbum) {
    var song = new Song(addTitle, addArtist, addAlbum);
    song.add();
    sessionStorage.setItem(sessionStorage.length, JSON.stringify(song));
    para.innerHTML = "Song " + JSON.stringify(song) + " added!";
  }
  else
    para.innerHTML = "Please fill all fields";
}
