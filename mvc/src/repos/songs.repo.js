import fse from 'fs-extra';

//reads the JSON array and converts to JS-object array
const songs = fse.readJsonSync("./src/db/songs.json");

export const getAllSongs = () => {
    return songs;
}

export const getSongById = (id) => {

}

export const addSong = (song) => {

}

export const updateSong = (id, song) => {

}

export const deleteSong = (id) => {

}