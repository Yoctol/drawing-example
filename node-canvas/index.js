const fs = require('fs');

const Canvas = require('canvas');

const canvas = new Canvas(300, 460);
const ctx = canvas.getContext('2d');

ctx.fillStyle = '#2eb0e0';
ctx.fillRect(0, 0, 300, 35);

ctx.fillStyle = '#3b6e94';
ctx.fillRect(0, 35, 300, 300);

ctx.fillStyle = '#fff';
ctx.fillRect(0, 300, 300, 80);

ctx.strokeStyle = '#2eb0e0';
ctx.beginPath();
ctx.moveTo(0, 340);
ctx.lineTo(300, 340);
ctx.lineWidth = 1;
ctx.stroke();

ctx.fillStyle = '#fff';
ctx.font = '16px Microsoft YaHei, sans-serif';
ctx.textAlign = 'left';
ctx.fillText('監測關鍵字推播', 10, 23);

ctx.font = '18px Microsoft YaHei, sans-serif';
ctx.fillText('[新聞] 靠文青打敗台積電 新鮮人最', 10, 63);
ctx.fillText('嚮往企業出爐', 10, 88);

ctx.fillStyle = '#3b6e94';
ctx.font = '18px Microsoft YaHei, sans-serif';

ctx.textAlign = 'center';

ctx.fillText('檢視原文與分析報告', 150, 327);
ctx.fillText('追蹤', 150, 367);

const out = fs.createWriteStream(__dirname + '/node-canvas.png');
const stream = canvas.pngStream();

stream.on('data', function(chunk) {
  out.write(chunk);
});

stream.on('end', function() {
  console.log('saved png');
});
