import React          from 'react';

import PlayerProvider from 'context/player/Provider';

import About          from 'pages/about/Component';
import Contact        from 'pages/contact/Component';

import BarLeft        from 'components/bar-left/Component';
import BarRight       from 'components/bar-right/Component';
import PanelLeft      from 'components/panel-left/Component';
import PanelRight     from 'components/panel-right/Component';
import Player         from 'components/player/Component';
import Canvas         from 'components/canvas/Component';
import {drawFunc}     from 'components/canvas/utils';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

//<Player/>
const App = () => {
  return (
    <>
    <PlayerProvider>
      <BarLeft/>
      <PanelLeft/>
      
      <Canvas drawFunc={drawFunc}/>
      <Player/>
      
      <BarRight/>
      <PanelRight/>    
    </PlayerProvider>
    </>
  );
};

export default App;