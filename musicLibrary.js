function Library(name, creator) {
  this.name = name;
  this.creator = creator;
  this.playlists = [];
}

function Playlist(name) {
  this.name = name;
  this.tracks = [];
  this.overallRating = function(tracks) {
    const ratings = this.tracks.map((track) => {
      return track.rating;
    });
    const totalRating = ratings.reduce((a, b) => {return a + b;}, 0);
    return totalRating/ratings.length;
  }

  this.totalDuration = function(tracks) {
    const lengths = this.tracks.map((track) => {
      return track.length;
    });
    const totalLength = lengths.reduce((a, b) => {return a + b;}, 0);
    return totalLength;
  }
}

function Track(title, rating, length) {
  this.title = title;
  this.rating = rating;
  this.length = length;
}

const musicLibrary = new Library('Phleg Library', 'Phleg');
const playlist1 = new Playlist('playlist1');
const track1 = new Track('Passive', 4, 360);
const track2 = new Track('Hail to the King', 5, 300);
const track3 = new Track('Burried Alive', 3, 395);
playlist1.tracks.push(track1, track2, track3);
musicLibrary.playlists.push(playlist1);
playlist1.overallRating()

console.log('Libraries:', musicLibrary);
console.log('===========================');
console.log('Play lists:', playlist1);
console.log('===========================');
console.log(`Overal Rating: ${playlist1.overallRating()}`);
console.log(`Total duration: ${playlist1.totalDuration()}`);
