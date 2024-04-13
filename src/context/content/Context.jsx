import { createContext } from 'react';

const ContentContext = createContext({
    player: null,
    contentLeft: null,
    contentRight: null,
    isClosedLeft: null,
    isClosedRight: null,
});

export default ContentContext;