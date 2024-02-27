// Album: Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album.

interface Album {
    album_name: string;
    album_title: string;
    album_track?: number; // Optional parameter for the number of tracks
}

function make_album(name: string, title: string, track?: number): Album {
    let album: Album = {
        album_name: name,
        album_title: title
    };
    if (track !== undefined) {
        album.album_track = track;
    }
    
    return album;
}

let album1: Album = make_album("Album1", "title1", 20);
let album2: Album = make_album("Album2", "title2");
let album3: Album = make_album("Album3", "title3", 20);

console.log(album1);
console.log(album2);
console.log(album3);
