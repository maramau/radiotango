import React          from 'react';

import ContentProvider from 'context/content/Provider';

import About          from 'pages/about/Component';
import Contact        from 'pages/contact/Component';

import BarLeft        from 'components/bar-left/Component';
import BarRight       from 'components/bar-right/Component';
import PanelLeft      from 'components/panel-left/Component';
import PanelRight     from 'components/panel-right/Component';
import Player         from 'components/player/Component';
import Canvas         from 'components/canvas/Component';
//import {drawFunc}     from 'components/canvas/utils';
import {drawFunc}     from 'components/canvas/draw2';

import './App.css';

const App = () => {
  return (
    <>
    <ContentProvider>
      <BarLeft/>
      <PanelLeft/>
      
      <Canvas drawFunc={drawFunc}/>
      <Player/>
      
      <BarRight/>
      <PanelRight/>    
    </ContentProvider>
    </>
  );
};

export default App;