const playlist = [
  {
    songName: 'Shape of You',
    artist: 'Ed Sheeran',
    album: '÷',
    genre: 'Pop'
  },
  {
    songName: 'Old Town Road',
    artist: 'Lil Nas X',
    album: '7',
    genre: 'Hip Hop'
  },
  {
    songName: 'Blank Space',
    artist: 'Taylor Swift',
    album: '1989',
    genre: 'Pop'
  }
];

function playSong(song) {
  console.log(`Now playing: ${song.songName} by ${song.artist}`);
}

playSong(playlist[0]); // Output: Now playing: Shape of You by Ed Sheeran
