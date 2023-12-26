__path = process.cwd();

require('../settings.js')
var express = require('express');
var router = express.Router();
var creator = global.creator
const listkey = global.apikey

// const Canvas = require('canvas')
// const canvasGif = require('canvas-gif')

router.get('/know', async (req, res) => {
    res.json({
        status: false,
        creator: `${creator}`,
        message: "Masukan parameter text"
    })
})

router.get('/attp', async (req, res) => {
    // var text = req.query.text
    // if (!text) return res.json({
        // status: false,
        // creator: `${creator}`,
        // message: "[!] masukan parameter text"
    // })

    // const file = "./media/attp.gif"
    // let length = text.length
    // var font = 85
    // let fwrap = 400
    // var tggg = text.split(' ')[1];

    // if (length > 15) {
        // font = 75
    // }
    // if (length > 25) {
        // font = 70
    // }
    // if (length > 35) {
        // font = 65
    // }
    // if (length > 45) {
        // font = 60
    // }
    // if (length > 10) {
        // if (tggg) {} else {
            // font = 60
        // }
    // }
    // if (length > 55) {
        // font = 55
    // }
    // if (length > 65) {
        // font = 50
    // }
    // if (length > 75) {
        // font = 45
    // }
    // if (length > 85) {
        // font = 40
    // }
    // if (length > 10) {
        // if (tggg) {} else {
            // font = 40
        // }
    // }
    // if (length > 95) {
        // font = 35
    // }
    // if (length > 105) {
        // font = 30
    // }
    // if (length > 18) {
        // if (tggg) {} else {
            // font = 20
        // }
    // }

    // Canvas.registerFont('./media/ProximaSoft-Bold.ttf', {
        // family: 'Proxima-Soft'
    // })
    // await canvasGif(
        // file, (ctx) => {
            // var couler = ["#FFFA00", "#FF0005", "#FA00FF", "#0005FF", "#00FFFA", "#05FF00"]
            // let jadi = couler[Math.floor(Math.random() * couler.length)]

            // function wrapText(ctx, text, x, y, maxWidth, lineHeight) {
                // var words = text.split(' ');
                // var line = '';
                // var lined = '';
                // var Totll = 1

                // for (var n = 0; n < words.length; n++) {
                    // var cokl = lined + words[n] + ' ';
                    // var metrics = ctx.measureText(cokl);
                    // var testWidth = metrics.width;
                    // if (testWidth > maxWidth && n > 0) {
                        // Totll++
                        // lined = words[n] + ' ';
                    // } else {
                        // lined = cokl
                    // }
                // }

                // //console.log(Totll)
                // x = x + 10
                // if (Totll == 1) {
                    // y = y + (lineHeight / 2)
                // }
                // if (Totll == 2) {
                    // y = y - (lineHeight / 5)
                // }
                // if (Totll == 3) {
                    // lineHeight = lineHeight / 4 + font - 5
                    // y = y - lineHeight + 20
                // }
                // if (Totll == 4) {
                    // y = (y - (lineHeight / 5) * 7)
                // }
                // if (Totll == 5) {
                    // lineHeight = lineHeight / 4 + font
                    // y = y - (lineHeight + 20 * 2)
                // }
                // if (Totll == 6) {
                    // lineHeight = lineHeight / 4 + font - 5
                    // y = y - (lineHeight + 20 * 2)
                // }
                // if (Totll == 7) {
                    // lineHeight = lineHeight / 4 + font
                    // y = y - (lineHeight + 20 * 4)
                // }
                // if (Totll == 8) {
                    // lineHeight = lineHeight / 4 + font - 5
                    // y = y - (lineHeight + 20 * 4)
                // }
                // if (Totll == 9) {
                    // lineHeight = lineHeight / 4 + font
                    // y = y - (lineHeight + 20 * 6)
                // }
                // if (Totll == 10) {
                    // lineHeight = lineHeight / 4 + font - 5
                    // y = y - (lineHeight + 20 * 6)
                // }
                // if (Totll == 11) {
                    // lineHeight = lineHeight / 4 + font
                    // y = y - (lineHeight + 20 * 8)
                // }
                // if (Totll == 12) {
                    // lineHeight = lineHeight / 4 + font - 5
                    // y = y - (lineHeight + 20 * 8)
                // }

                // for (var n = 0; n < words.length; n++) {
                    // var testLine = line + words[n] + ' ';
                    // var metrics = ctx.measureText(testLine);
                    // var testWidth = metrics.width;
                    // if (testWidth > maxWidth && n > 0) {
                        // ctx.textAlign = 'center'
                        // ctx.strokeText(line, x, y)
                        // ctx.fillText(line, x, y);
                        // //console.log('→→ ' + line + ' | ' + x + '/' + y + '≈' + font  + ' - '+Totll)
                        // line = words[n] + ' ';
                        // y += lineHeight;
                    // } else {
                        // line = testLine
                    // }
                // }

                // //console.log('→ ' + line + ' | ' + x + '/' + y + '≈' + font  + ' - '+Totll + '\n')
                // ctx.strokeText(line, x, y)
                // ctx.fillText(line, x, y);
            // }

            // function drawStroked(text, x, y) {
                // ctx.lineWidth = 5
                // ctx.font = `${font}px Proxima-Soft`
                // ctx.fillStyle = jadi
                // ctx.strokeStyle = 'black'
                // ctx.textAlign = 'center'
                // wrapText(ctx, text, x, y, 450, 70)
            // }

            // drawStroked(text, 250, 250)
        // }, {
            // coalesce: false, // whether the gif should be coalesced first (requires graphicsmagick), default: false
            // delay: 0, // the delay between each frame in ms, default: 0
            // repeat: 0, // how many times the GIF should repeat, default: 0 (runs forever)
            // algorithm: 'octree', // the algorithm the encoder should use, default: 'neuquant',
            // optimiser: false, // whether the encoder should use the in-built optimiser, default: false,
            // fps: 7, // the amount of frames to render per second, default: 60
            // quality: 100, // the quality of the gif, a value between 1 and 100, default: 100
        // }
    // ).then((buffer) => {
        // //console.log('→ Done')
        // res.set({
            // 'Content-Type': 'gif'
        // })
        // res.send(buffer)
    // })
})
module.exports = router