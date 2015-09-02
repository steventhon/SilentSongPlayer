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
