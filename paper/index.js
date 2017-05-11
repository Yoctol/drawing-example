const fs = require('fs');
const path = require('path');

const paper = require('paper-jsdom-canvas');

const canvas = paper.createCanvas(300, 460);

paper.setup(canvas);

const rect1 = new paper.Path.Rectangle({
  point: [0, 0],
  size: [300, 35],
});
rect1.fillColor = '#2eb0e0';

const rect2 = new paper.Path.Rectangle({
  point: [0, 35],
  size: [300, 265],
});
rect2.fillColor = '#3b6e94';

const rect3 = new paper.Path.Rectangle({
  point: [0, 300],
  size: [300, 80],
});
rect3.fillColor = '#fff';

paper.view.update();

const out = fs.createWriteStream(__dirname + '/paper.png');
const stream = canvas.pngStream();

stream.on('data', function(chunk) {
  out.write(chunk);
});

stream.on('end', function() {
  console.log('saved png');
});
