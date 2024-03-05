/**Album: Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album.*/

function make_album(artist_name: string, album_title: string, num_tracks?: number):
{artist_name: string, album_title: string, num_tracks?: number}{
    const album = {
        artist_name, 
        album_title,
        num_tracks
    };if (num_tracks!== undefined) {
        album.num_tracks = num_tracks;
    }
    return album;
}

const album1 = make_album("The Beatles", "Abbey Road",);
const album2 = make_album("The Rolling Stones", "Exile on Main Street",3);

const album3 = make_album("Album 3","Title 3",6);

console.log(album1); // Outputs: {artist: "The Beatles", album: "Abbey Road", num_tracks: 0}
console.log(album2)
console.log(album3)