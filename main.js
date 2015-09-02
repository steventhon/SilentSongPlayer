var playlist = [];

function song(title, artist, album) {
  this.title = title;
  this.artist = artist;
  this.album = album;
  played = false;
}

song.prototype.add = function() {
  playlist.push(this);
};

var song1 = new song("Title1", "Artist", "Album");
var song2 = new song("Title2", "Artist", "Album");
var song3 = new song("Title3", "Artist", "Album");
var song4 = new song("Title4", "Artist", "Album");
var song5 = new song("Title5", "Artist", "Album");
