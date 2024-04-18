import { useState }         from 'react';

import {    FaShareNodes,
            FaFacebook,
            FaYoutube,
            FaInstagram,
            FaSpotify,
            FaSoundcloud,
            FaXTwitter,
            FaThreads
}                           from 'react-icons/fa6';

import "./styles.css";

const Social = () => {
    const [showSocials, setShowSocials] = useState(false);

    const togglemenus = () => {
        setShowSocials(showSocials => {return !showSocials;})
    };
    
    return (
        <>
        <div className="container-socials">
            <div className={`menu-toggle ${showSocials? 'open' : ''}`} onClick={togglemenus}>
                <FaShareNodes className="toggle"/>
            </div>
            
            <div className={`menu-round ${showSocials? 'open' : ''}`}>
                <div className="btn-app">
                    <FaXTwitter/>
                </div>
                <div className="btn-app">
                    <FaFacebook/>
                </div>
                <div className="btn-app">
                    <FaYoutube/>
                </div>
            </div>
            
            <div className={`menu-line ${showSocials? 'open' : ''}`}>
                <div className="btn-app">
                    <FaSoundcloud/>
                </div>
                <div className="btn-app">
                    <FaSpotify/>
                </div>
                <div className="btn-app">
                    <FaInstagram/>
                </div>
                <div className="btn-app">
                    <FaThreads/>
                </div>
            </div>
        </div>
        </>
    )
    return (
        <>
        <div id="menu" className={showSocials? 'open' : 'close'}>
            <FaShareNodes className="toggle" onClick={() => {setShowSocials(showSocials => {return !showSocials;})}}/>
            <div id="socials">
                <FaFacebook/>
                <FaYoutube/>

                <FaInstagram/>
                <FaSpotify/>
                
                <FaSoundcloud/>
                <FaXTwitter/>
                
                <FaThreads/>
            </div>
        </div>
        </>
    );
};

export default Social;