function drawOnCanvas(stroke) {
  context.strokeStyle = '#7fa2ed';
  context.lineCap = 'round';
  context.lineJoin = 'round';

  const l = stroke.length - 1;
  if (stroke.length >= 3) {
    const xc = (stroke[l].x + stroke[l - 1].x) / 2;
    const yc = (stroke[l].y + stroke[l - 1].y) / 2;
    context.lineWidth = stroke[l - 1].lineWidth;
    context.quadraticCurveTo(
      stroke[l - 1].x + 15,
      stroke[l - 1].y - 1661 * 2,
      xc + 15,
      yc - 1661 * 2
    );
    context.stroke();
    context.beginPath();
    context.moveTo(xc + 15, yc - 1661 * 2);
  } else {
    const point = stroke[l];
    context.lineWidth = point.lineWidth;
    context.strokeStyle = point.color;
    context.beginPath();
    context.moveTo(point.x + 15, point.y - 1661 * 2);
    context.stroke();
  }
}
