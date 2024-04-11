import eases from 'eases';
import {random} from 'assets/js/random';
import {minMax} from 'assets/js/array';
import {mapRange} from 'assets/js/math';

const palettes = [
    {
      background: 'cyan',
      startColor: '#33FF33',
      endColor:'#AA00AA',
    },
];
const idxPalette = 0;
const speed = 1;
const cantCircles = 1;
const cantSlices = 100;
const arrBins = [];
const arrEases = [];
const angleSlice = 2 * Math.PI / cantSlices * 0.8;
const angleMargin = 2 * Math.PI / cantSlices * 0.2;
const radiusSlice = 300 * 0.9;
const radiusMargin = 300 * 0.1;

let audio, audioContext, audioData, sourceNode, analyserNode;

const initEases = () => {
  // Fill bins and eases arrays
  for (let i = 0; i < cantCircles + 1; i++) {
    const t = (i) / cantCircles;
    
    arrEases.push(eases.quadIn(t - 0.2));
    for (let j = 0; j < cantSlices; j++) {
        arrBins.push(random(50, 240));
    }
  }
};

const initAudio = () => {
    if (!audio) {
      audio = document.querySelector('audio');
  
      if (audio) {
        audioContext = new AudioContext();

        sourceNode = audioContext.createMediaElementSource(audio);
        sourceNode.connect(audioContext.destination);
      
        analyserNode = audioContext.createAnalyser();
        analyserNode.smoothingTimeConstant = 0.9;
        sourceNode.connect(analyserNode);
      
        audioData = new Float32Array(analyserNode.frequencyBinCount);
      }
    }
};

const drawFunc = (context, frameCount) => {
    const width = context.canvas.width;
    const height = context.canvas.height;

    context.fillStyle = palettes[idxPalette].background;
    context.fillRect(0, 0, width, height);

    // Get audio data
    let valRange = 0, val = 0, valMapped = 0;

    if (audioData && !audio.paused) {
      const progress = audio.currentTime / audio.duration;
      const angleTilt = 2 * Math.PI * progress;

      analyserNode.getFloatFrequencyData(audioData);

      for (let i = 0; i < cantCircles; i++) {
        for (let j = 0; j < cantSlices; j++) {
          const bin = arrBins[(i + j) % arrBins.length];

          valRange = minMax(audioData);
          val = audioData[bin];
          valMapped = Math.abs(mapRange(valRange, val));

          // Draw circle
          const startColor = palettes[idxPalette].startColor;
          const startColorObj = {
            r: parseInt(startColor[1], 16) + parseInt(startColor[2], 16),
            g: parseInt(startColor[3], 16) + parseInt(startColor[4], 16),
            b: parseInt(startColor[5], 16) + parseInt(startColor[6], 16),
          };
          const endColor = palettes[idxPalette].endColor;
          const endColorObj = {
            r: parseInt(endColor[1], 16) + parseInt(endColor[2], 16),
            g: parseInt(endColor[3], 16) + parseInt(endColor[4], 16),
            b: parseInt(endColor[5], 16) + parseInt(endColor[6], 16),
          };
          const diffColorObj = {
            r: endColorObj.r - startColorObj.r,
            g: endColorObj.g - startColorObj.g,
            b: endColorObj.b - startColorObj.b,
          }
          const colorObj = {
            r: (startColorObj.r + Math.floor(diffColorObj.r * progress)).toString(16),
            g: (startColorObj.g + Math.floor(diffColorObj.g * progress)).toString(16),
            b: (startColorObj.b + Math.floor(diffColorObj.b * progress)).toString(16),
          };
          const smallRadius = (radiusMargin * i + radiusSlice) * arrEases[(i) % arrEases.length] * valMapped;
          const bigRadius = (radiusMargin * i + radiusSlice) * arrEases[(i + 1) % arrEases.length] * valMapped;
          const angleStart = angleTilt * speed + angleSlice * (i + j + 1) + angleMargin * j;

          context.save();
          context.fillStyle = `#${colorObj.r}${colorObj.g}${colorObj.b}`;
          context.translate(width * 0.5, height * 0.5);
          context.moveTo(smallRadius * Math.cos(angleStart), smallRadius * Math.sin(angleStart));
          context.beginPath();
          context.arc(0, 0, smallRadius, angleStart, angleStart + angleSlice);
          context.lineTo(bigRadius * Math.cos(angleStart + angleSlice), bigRadius * Math.sin(angleStart + angleSlice));
          context.arc(0, 0, bigRadius, angleStart + angleSlice, angleStart, true);
          context.lineTo(smallRadius * Math.cos(angleStart), smallRadius * Math.sin(angleStart));
          context.closePath();
          context.fill();
          context.restore();
        }
      }
    }
};

initEases();

export {drawFunc, initAudio};