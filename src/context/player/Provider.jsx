import React, { useState } from "react";

import PlayerContext from "./Context";
import albums from "../utils";

const PlayerProvider = ({ children }) => {  
    const strDefaultPlayer = window.localStorage.getItem('player');
    const defaultPlayer = strDefaultPlayer? JSON.parse(strDefaultPlayer) : {idxAlbum: 0, idxSong: 0};
    const [player, setPlayer] = useState(defaultPlayer);
    
    //const [contentLeft, setContentLeft] = useState('Home');
    //const [contentRight, setContentRight] = useState(null);
    
    const provider = {
        player,
        //contentLeft,
        //contentRight,
        changePlayer: instruction => {
            const instructions = {
                prev: () => {
                    const idxAlbum = player.idxAlbum;
                    const idxSong = player.idxSong;
                    const album = albums[idxAlbum];
                    const toReturn = {};
                    
                    if ((idxSong - 1) < 0) {
                        const albumKeys = Object.keys(albums);

                        toReturn.idxAlbum = (albumKeys.indexOf(String(idxAlbum)) + 1) % albumKeys.length;
                        toReturn.idxSong = albums[toReturn.album].length - 1;
                    } else {
                        toReturn.idxSong = (idxSong - 1) % album.playlist.length;
                        toReturn.idxAlbum = idxAlbum;
                    }

                    return toReturn;
                },
                next: () => {
                    const idxAlbum = player.idxAlbum;
                    const idxSong = player.idxSong;
                    const album = albums[idxAlbum];
                    const toReturn = {};
                    
                    if ((idxSong + 1) % album.playlist.length === 0) {
                        const albumKeys = Object.keys(albums);

                        toReturn.idxSong = 0;
                        toReturn.idxAlbum = (albumKeys.indexOf(String(idxAlbum)) + 1) % albumKeys.length;
                    } else {
                        toReturn.idxSong = (idxSong + 1) % album.playlist.length;
                        toReturn.idxAlbum = idxAlbum;
                    }

                    return toReturn;
                },
                jump: ({idxAlbum, idxSong}) => {

                    return {idxAlbum, idxSong};
                },
                repeat: () => {

                }
            };

            if (instructions[instruction.type]) {
                const newPlayer = instructions[instruction.type](instruction);
                
                setPlayer(newPlayer);
                //window.localStorage.setItem('player', JSON.stringify(newPlayer));
            }
        },
        changeContentLeft: contentLeft => {
            // import Pages
            // import Genres from components/index;

            // Take JSX from a component from Genres
            // return Genres.Jazz for example
            // or from pages
            // Maybe even do an index with all of them mixed
        },
        changeContentRight: contentRight => {
            // When clicking on a genre from Genres.X component
            // check genre?
            // choose JSX from an index with subgenres
            // return Subgenre.Acid_jazz
        }

    };

    return (
        <PlayerContext.Provider value={provider}>
            {children}
        </PlayerContext.Provider>
    );
};

export default PlayerProvider;