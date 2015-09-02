$(document).ready(function() {
  var playlist = [];
  var shuffle, prev, next, curr = 0;
  
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
  var song1 = new Song("Title1", "Artist", "Album");
  var song2 = new Song("Title2", "Artist", "Album");
  var song3 = new Song("Title3", "Artist", "Album");
  var song4 = new Song("Title4", "Artist", "Album");
  var song5 = new Song("Title5", "Artist", "Album");
  
  // Append Songs to playlist
  song1.add();
  song2.add();
  song3.add();
  song4.add();
  song5.add();
  
  // Play the Song
  function playSong() {
    var obj = playlist[curr];
    for (var x in obj) {
      if (x !== "add" && x !== "played")
        console.log(x + ": " + obj[x]);
    }
  }
  
  // Plays Songs in random order without repeats
  for (var i = 0, len = playlist.length, obj; i < len; i++) {
    do {
      obj = playlist[Math.floor(Math.random() * len)];
    } while (obj.played === true);
    
    obj.played = true;
    
    for (var x in obj) {
      if (x !== "add" && x !== "played")
        console.log(x + ": " + obj[x]);
    }
  }
});
