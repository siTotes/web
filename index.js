var express = require('express'),
    cors = require('cors'),
    expressLayout = require('express-ejs-layouts'),
    secure = require('ssl-express-www');
const PORT = process.env.PORT || 8080 || 5000 || 3000

var apirouter = require('./routes/api')

var app = express()
app.set('view engine', 'ejs');
app.use(expressLayout);
app.use(express.static("assets"))
app.enable('trust proxy');
app.set("json spaces", 2)
app.use(cors())
app.use(secure)
const fs = require('fs')

global.patuUrl = {full:'',ori:''}

app.get('/', (req, res) => {
    // res.json({
        // status: true,
        // creator: `${creator}`,
        // message: "Rest Api Key Ini Buatan ( M.saiful.anam.r ) apikey ini buat bot nya sendiri yaitu sitotes-md"
    // })
    res.render('index', {
        layout: 'index'
    });
})

app.use('/api', apirouter)


//━━━[ shorting link / url ]━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\\
app.use(async function(req, res, next) {
    if(!req.originalUrl.includes('favicon.ico')){
        global.patuUrl.full = req.protocol + '://' + req.get('host') + req.originalUrl
        global.patuUrl.ori = req.originalUrl
        
        let vv
        ch = 0
        //console.log('→', patuUrl.ori)
        if(patuUrl.ori.split('/').length > 3){
        }else{
            if(patuUrl.ori.split('/')[1].length > 17){
                vv = await shortUrlFind(patuUrl.ori.split('/')[1])
                if(vv == ''?false:true) ch++
            }
        }
        app.get('*', async function(req, res){
            if(ch==0){
                res.json({
                    status : true,
                    creator : `${creator}`,
                    message : "ERROR 404 HALAMAN TIDAK TERSEDIA"
                })
            }else{
                vv = await shortUrlFind(patuUrl.ori.split('/')[1])
                res.redirect(vv);
            }
        })
    }
    return next()
})

app.get('/shlink', async (req, res) => {
    var link = req.query.link
    if(!link){
        res.json({
            status : true,
            creator : `${creator}`,
            message : "ERROR ID SALAH, JIKA INGIN BUAT MASUKAN PARAMETER LINK"
        })
    }else{
        if(!link.includes('://')){
            return res.json({
                status : true,
                creator : `${creator}`,
                message : "INI BUKAN LINK"
            })
        }else{
            res.json({
                status : true,
                creator : `${creator}`,
                url : 'https://web.sitotes.repl.co/'+ await shortUrlSave(link)
            })
        }
    }
})

app.get('/shlink.json', async (req, res) => {
    res.json(await shortUrlFindAll())
})




async function shortUrlSave(link) {
    const {
        MongoClient,
        ObjectId
    } = require('mongodb');
    
    const url = 'mongodb+srv://sitotes:sitotes01@dbwacluster.d5awtyl.mongodb.net/?retryWrites=true&w=majority'
    const client = new MongoClient(url);
    await client.connect()
    const db = client.db('RestApi')
    const shorturl = db.collection('shorturl')
    
    let vhs = await shorturl.find({ url: link }).toArray()
    if(vhs.length > 0){
        await client.close()
        return vhs[0].id
    }
    
    
    const otpot = await shorturl.insertOne({url: link})
    await shorturl.updateOne({ _id: otpot.insertedId }, { $set: { id: otpot.insertedId.toHexString() } })
    await client.close()
    return otpot.insertedId.toHexString()
}



async function shortUrlFind(obid) {
    const {
        MongoClient,
        ObjectId
    } = require('mongodb');
    
    const url = 'mongodb+srv://sitotes:sitotes01@dbwacluster.d5awtyl.mongodb.net/?retryWrites=true&w=majority'
    const client = new MongoClient(url);
    await client.connect()
    const db = client.db('RestApi')
    const shorturl = db.collection('shorturl')
    const otpot = await shorturl.find({ id: obid }).toArray()
    await client.close()
    if(!otpot[0]) return ''
    if(otpot[0]) return otpot[0].url
    return otpot
}

async function shortUrlFindAll() {
    const {
        MongoClient,
        ObjectId
    } = require('mongodb');
    
    const url = 'mongodb+srv://sitotes:sitotes01@dbwacluster.d5awtyl.mongodb.net/?retryWrites=true&w=majority'
    const client = new MongoClient(url);
    await client.connect()
    const db = client.db('RestApi')
    const shorturl = db.collection('shorturl')
    const otpot = await shorturl.find().toArray()
    await client.close()
    return otpot
}
//━━━[ shortlink finish ]━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\\


app.listen(PORT, '0.0.0.0', () => {
    console.log("Server running on port " + PORT);
});

module.exports = app