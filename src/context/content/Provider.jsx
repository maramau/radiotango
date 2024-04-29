import React, { useState }  from "react";

import ContentContext       from "./Context";
import * as Genres          from "pages/genres/index";
import * as Artists         from "pages/artists/index";
import * as Pages           from "pages/pages/index";

const ContextProvider = ({ children }) => {
    const weeksArtist = 'Piazolla';
    const defaultArtist = Artists[weeksArtist].default;
    const defaultPlaylist = defaultArtist.playlist;
    const defaultSong = defaultPlaylist[0];

    const strDefaultPlayer = window.localStorage.getItem('player');
    const defaultPlayer = strDefaultPlayer? JSON.parse(strDefaultPlayer) : defaultSong;
    const [player, setPlayer] = useState(defaultPlayer);
    
    const idxRight = 0;
    const keysRight = Object.keys(Genres);
    const [isAnimated, setIsAnimated] = useState(false);
    const [contentLeft, setContentLeft] = useState('Home');
    const [contentRight, setContentRight] = useState(Genres[keysRight[idxRight]].default);
    const [isClosedLeft, setIsClosedLeft] = useState(true);
    const [isClosedRight, setIsClosedRight] = useState(true);
    const [showCanvas, setShowCanvas] = useState(false);
    
    const removeNoAnimateClass = () => {
        const classPreload = 'preload-prevent-animation';
        const preloads = document.querySelectorAll(`.${classPreload}`);
    
        preloads.forEach((preload) => {
            preload.classList.remove(classPreload);
        });
    };

    const provider = {
        player,
        contentLeft,
        contentRight,
        isClosedLeft,
        isClosedRight,
        showCanvas,
        changePlayer: song => {
            setPlayer(song);
            //window.localStorage.setItem('player', JSON.stringify(newPlayer));
        },
        changeContentLeft: cl => {
            if (Pages[cl]) {
                const newContent = Pages[cl].default;
                
                if (contentLeft !== newContent) {
                    setContentLeft(newContent);
                }
                if (isClosedLeft || contentLeft === newContent) {
                    setIsClosedLeft(!isClosedLeft);
                }
                if (!isAnimated) {
                    removeNoAnimateClass();
                    setIsAnimated(true);
                }
            }
        },
        changeContentRight: cr => {
            const content = Genres[cr] || Artists[cr] || cr === 'Star' && Artists[weeksArtist];

            if (content) {
                const newContent = content.default;
                
                if (contentRight !== newContent) {
                    if (cr === 'Star') {
                        newContent.title = 'Artist of the week'
                    }
                    setContentRight(newContent);
                }
                if (isClosedRight || contentRight === newContent) {
                    setIsClosedRight(!isClosedRight);
                }
                if (!isAnimated) {
                    removeNoAnimateClass();
                    setIsAnimated(true);
                }
            }
        },
        changeIsClosedLeft: isClosed => {
            setIsClosedLeft(isClosed);
            if (!isAnimated) {
                removeNoAnimateClass();
                setIsAnimated(true);
            }
        },
        changeIsClosedRight: isClosed => {
            setIsClosedRight(isClosed);
            if (!isAnimated) {
                removeNoAnimateClass();
                setIsAnimated(true);
            }
        },
        changeShowCanvas: showCanvas => {
            setShowCanvas(showCanvas);
        }
    };

    return (
        <ContentContext.Provider value={provider}>
            {children}
        </ContentContext.Provider>
    );
};

export default ContextProvider;