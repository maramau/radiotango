import { createContext } from 'react';

const ContentContext = createContext({
    player: null,
    contentLeft: null,
    contentRight: null,
    isClosedLeft: true,
    isClosedRight: true,
    showCanvas: false,
});

export default ContentContext;