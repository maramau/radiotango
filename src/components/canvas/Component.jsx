import {  useRef, 
          useEffect, 
          useContext } from 'react'

import ContentContext  from 'context/content/Context';

import './styles.css';

const Canvas = ({ drawFunc }) => {
  const { showCanvas } = useContext(ContentContext);
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    let frameCount = 0;
    let animationFrameId;
    
    const render = () => {
      frameCount++;
      drawFunc(context, frameCount);
      animationFrameId = window.requestAnimationFrame(render);
    }
    render();
    
    return () => {
      window.cancelAnimationFrame(animationFrameId);
    }
  }, [drawFunc]);
  
  return ( 
    <canvas 
      id="canvas-background"
      width={window.innerWidth}
      height={window.innerHeight}
      ref={canvasRef}
      style={{display: showCanvas? 'block' : 'none'}}
    />
  );
}

export default Canvas