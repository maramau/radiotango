const drawFunc = (context, frameCount) => {
    const width = context.canvas.width;
    const height = context.canvas.height;

    context.fillStyle = 'red';
    context.fillRect(0, 0, width, height);
}

export {drawFunc};