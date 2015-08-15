var qrImage = require('qr-image');
var fs = require('fs');

qrImage
	.image("", {type:'png', size:20})
	.pipe(fs.createWriteStream("MyQRCode.png"));
	
console.log('QR Code Generated !');