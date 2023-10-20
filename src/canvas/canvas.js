export const draw = (canvas) => {
  if (canvas.getContext) {
    const ctx = canvas.getContext('2d');
    // drawing code here

    ctx.strokeStyle = 'rgb(255,255,255)';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(100, 100);
    ctx.lineTo(1500, 100);
    ctx.stroke();
    ctx.strokeStyle = 'rgb(255,0,0)';
    ctx.beginPath();
    ctx.moveTo(100, 200);
    ctx.lineTo(1500, 200);
    ctx.stroke();
    ctx.strokeStyle = 'rgb(0,205,0)';
    ctx.beginPath();
    ctx.moveTo(100, 300);
    ctx.lineTo(1500, 300);
    ctx.stroke();
    ctx.strokeStyle = 'rgb(0,0,200)';
    ctx.beginPath();
    ctx.moveTo(100, 400);
    ctx.lineTo(1500, 400);
    ctx.stroke();
  } else {
    // canvas-unsupported code here
  }
};
