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
                    <a href="https://twitter.com/GriziaMauro" target='_blank'>
                        <FaXTwitter/>
                    </a>
                </div>
                <div className="btn-app">
                    <a href="https://www.facebook.com/profile.php?id=61553601988444" target='_blank'>
                        <FaFacebook/>
                    </a>
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
                    <a href="https://www.instagram.com/@griziamauro" target='_blank'>
                        <FaInstagram/>
                    </a>
                </div>
                <div className="btn-app">
                    <a href="https://www.threads.net/@maurogrizia" target='_blank'>
                        <FaThreads/>
                    </a>
                </div>
            </div>
        </div>
        </>
    );
};

export default Social;