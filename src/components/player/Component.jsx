import { useContext, useEffect, useState } from 'react';
import AudioPlayer from 'react-h5-audio-player';
import PlayerContext from 'context/player/Context';
import albums from 'context/utils';

import 'react-h5-audio-player/lib/styles.css';
import './styles.css';
import { initAudio } from 'components/canvas/utils';

const Player = () => {
    const { player, changePlayer } = useContext(PlayerContext);
    const handleSongChange = (instruction) => {
        changePlayer(instruction);
    };

    const album = albums[player.idxAlbum];
    const playlist = album.playlist;
    const song = playlist[player.idxSong];
    
    const [sourceNode, setSourceNode] = useState(null);

    useEffect(() => {
        const audio = initAudio();
        setSourceNode(audio);

        return ( () => {
            if (sourceNode) {
                sourceNode.disconnect();
            }
            
        });
    }, []);

    return (
        <>
        <AudioPlayer
            autoPlay={false}
            autoPlayAfterSrcChange
            customAdditionalControls={[/*'LOOP'*/]}
            layout="horizontal"
            showJumpControls={false}
            showSkipControls
            showFilledProgress
            src={song.src}
            footer={`${album.name} - ${song.name}`}
            onClickPrevious={() => {handleSongChange({type: 'prev'})}}
            onClickNext={() => {handleSongChange({type: 'next'})}}
            //onPlay={}
            onEnded={() => {handleSongChange({type: 'next'})}}
        />
        </>
    );
};

export default Player;