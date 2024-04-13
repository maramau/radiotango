import React, { useState } from "react";

import ContentContext from "./Context";
import * as Genres from "pages/genres/index";
import * as Pages from "pages/pages/index";

const ContextProvider = ({ children }) => {  
    const strDefaultPlayer = window.localStorage.getItem('player');
    const defaultPlayer = strDefaultPlayer? JSON.parse(strDefaultPlayer) : {idxAlbum: 0, idxSong: 0};
    const [player, setPlayer] = useState(defaultPlayer);
    
    
    const keysRight = Object.keys(Genres);
    const idxRight = 0;
    const [contentLeft, setContentLeft] = useState('Home');
    const [contentRight, setContentRight] = useState(Genres[keysRight[idxRight]].default);
    
    const provider = {
        player,
        contentLeft,
        contentRight,
        changePlayer: song => {
            setPlayer(song);
            //window.localStorage.setItem('player', JSON.stringify(newPlayer));
        },
        changeContentLeft: contentLeft => {
            if (Pages[contentLeft]) {
                setContentLeft(Pages[contentLeft].default);
            }
        },
        changeContentRight: contentRight => {
            if (Genres[contentRight]) {
                setContentRight(Genres[contentRight].default);
            }
        }
    };

    return (
        <ContentContext.Provider value={provider}>
            {children}
        </ContentContext.Provider>
    );
};

export default ContextProvider;