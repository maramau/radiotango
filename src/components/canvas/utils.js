let audio, audioContext, sourceNode;
let analyserL, analyserR, bufferLengthL, bufferLengthR, audioDataArrayL, audioDataArrayR;
let audioIndex, audioValue;

const initAudio = () => {
    if (!audio) {
        audio = document.querySelector('audio');
        if (audio) {
            // make a Web Audio Context
            audioContext = new AudioContext();
            sourceNode = audioContext.createMediaElementSource(audio);
            sourceNode.connect(audioContext.destination);

            const splitter = audioContext.createChannelSplitter(2);

            analyserL = audioContext.createAnalyser();
            analyserL.fftSize = 8192;
            
            analyserR = audioContext.createAnalyser();
            analyserR.fftSize = 8192;
            
            splitter.connect(analyserL, 0, 0);
            splitter.connect(analyserR, 1, 0);

            // Make a buffer to receive the audio data
            bufferLengthL = analyserL.frequencyBinCount;
            audioDataArrayL = new Uint8Array(bufferLengthL);

            bufferLengthR = analyserR.frequencyBinCount;
            audioDataArrayR = new Uint8Array(bufferLengthR);

            sourceNode.connect(analyserL);
            sourceNode.connect(analyserR);
        }
    } else {
        sourceNode.connect(audioContext.destination);
        sourceNode.connect(analyserL);
        sourceNode.connect(analyserR);
    } 
    return sourceNode;
};

const drawLine = (ctx, points) => {
    let origin = points[0];

    ctx.beginPath();
    ctx.strokeStyle = 'rgba(255,255,255,0.5)';
    ctx.lineJoin = 'round';
    ctx.moveTo(origin.x, origin.y);

    for (let i = 0; i < points.length; i++) {
        ctx.lineTo(points[i].x, points[i].y);
    }

    ctx.lineTo(origin.x, origin.y);
    ctx.stroke();
}

const connectPoints = (ctx, pointsA, pointsB) => {
    for (let i = 0; i < pointsA.length; i++) {
        ctx.beginPath();
        ctx.strokeStyle = 'rgba(255,255,255,0.5)';
        ctx.moveTo(pointsA[i].x, pointsA[i].y);
        ctx.lineTo(pointsB[i].x, pointsB[i].y);
        ctx.stroke();
    }
}



const drawFunc = (context) => {
    const running = audio && !audio.paused;

    // Drawing
    if (running) {
        const width = window.screen.width, height = window.screen.height;
const centerX = width / 2, centerY = height / 2;
const angleExtra = 90;
const radius = height <= 600 ? 120 : 160;
const steps = height <= 600 ? 60 : 120;
const interval = 360 / steps;
const pCircle = 2 * Math.PI * radius;
const distUp = 1.1, distDown = 0.9;
const pointsUp = [], pointsDown = [];

// Create points
for(let angle = 0; angle < 360; angle += interval) {

    pointsUp.push({
        angle: angle + angleExtra,
        x: centerX + radius * Math.cos((-angle + angleExtra) * Math.PI / 180) * distUp,
        y: centerY + radius * Math.sin((-angle + angleExtra) * Math.PI / 180) * distUp,
        dist: distUp
    });
    pointsDown.push({
        angle: angle + angleExtra + 5,
        x: centerX + radius * Math.cos((-angle + angleExtra + 5) * Math.PI / 180) * distDown,
        y: centerY + radius * Math.sin((-angle + angleExtra + 5) * Math.PI / 180) * distDown,
        dist: distDown
    });
}

        // get the current audio data
        analyserL.getByteFrequencyData(audioDataArrayL);
        analyserR.getByteFrequencyData(audioDataArrayR);

        for (let i = 0; i < pointsUp.length; i++) {
            audioIndex = Math.ceil(pointsUp[i].angle * (bufferLengthL / (pCircle * 2))) | 0;
            // get the audio data and make it go from 0 to 1
            audioValue = audioDataArrayL[audioIndex] / 255;
            pointsUp[i].dist = 1.1 + audioValue * 0.8;
            pointsUp[i].x = centerX + radius * Math.cos(-pointsUp[i].angle * Math.PI / 180) * pointsUp[i].dist;
            pointsUp[i].y = centerY + radius * Math.sin(-pointsUp[i].angle * Math.PI / 180) * pointsUp[i].dist;

            audioIndex = Math.ceil(pointsDown[i].angle * (bufferLengthR / (pCircle * 2))) | 0;
            // get the audio data and make it go from 0 to 1
            audioValue = audioDataArrayR[audioIndex] / 255;
        
            pointsDown[i].dist = 0.9 + audioValue * 0.2;
            pointsDown[i].x = centerX + radius * Math.cos(-pointsDown[i].angle * Math.PI / 180) * pointsDown[i].dist;
            pointsDown[i].y = centerY + radius * Math.sin(-pointsDown[i].angle * Math.PI / 180) * pointsDown[i].dist;

            context.clearRect(0, 0, width, height);
            drawLine(context, pointsUp);
            drawLine(context, pointsDown);
            connectPoints(context, pointsUp, pointsDown);
        }
    }
};

export {drawFunc, initAudio};