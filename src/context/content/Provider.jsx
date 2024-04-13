import React, { useState } from "react";

import ContentContext from "./Context";
import * as Genres from "pages/genres/index";
import * as Pages from "pages/pages/index";

const ContextProvider = ({ children }) => {  
    const strDefaultPlayer = window.localStorage.getItem('player');
    const defaultPlayer = strDefaultPlayer? JSON.parse(strDefaultPlayer) : {idxAlbum: 0, idxSong: 0};
    const [player, setPlayer] = useState(defaultPlayer);
    
    const idxRight = 0;
    const keysRight = Object.keys(Genres);
    const [contentLeft, setContentLeft] = useState('Home');
    const [contentRight, setContentRight] = useState(Genres[keysRight[idxRight]].default);
    const [isClosedLeft, setIsClosedLeft] = useState(true);
    const [isClosedRight, setIsClosedRight] = useState(true);
    
    const provider = {
        player,
        contentLeft,
        contentRight,
        isClosedLeft,
        isClosedRight,
        changePlayer: song => {
            setPlayer(song);
            //window.localStorage.setItem('player', JSON.stringify(newPlayer));
        },
        changeContentLeft: contentLeft => {
            if (Pages[contentLeft]) {
                setContentLeft(Pages[contentLeft].default);
                if (isClosedLeft) {
                    setIsClosedLeft(false);
                }   
            }
        },
        changeContentRight: contentRight => {
            if (Genres[contentRight]) {
                setContentRight(Genres[contentRight].default);
                setIsClosedRight(false);
            }
        },
        changeIsClosedLeft: isClosed => {
            setIsClosedLeft(isClosed);
        },
        changeIsClosedRight: isClosed => {
            setIsClosedRight(isClosed);
        }
    };

    return (
        <ContentContext.Provider value={provider}>
            {children}
        </ContentContext.Provider>
    );
};

export default ContextProvider;