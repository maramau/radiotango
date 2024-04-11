import { useRef, useEffect } from 'react'

import './styles.css';

const Canvas = ({ drawFunc }) => {
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
  
  return <canvas id="canvas-background" width={window.innerWidth} height={window.innerHeight} ref={canvasRef}/>
}

export default Canvas