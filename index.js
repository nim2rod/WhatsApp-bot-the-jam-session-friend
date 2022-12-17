const qrcode = require('qrcode-terminal');
const express = require('express')
const app = express()
// const PORT = 8000
const port = process.env.PORT || 8000

const { readFile } = require('fs')
const { Client, LocalAuth } = require('whatsapp-web.js');

const client = new Client({
    authStrategy: new LocalAuth()
});

client.on('qr', qr => {
    qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
    console.log('Client is ready!');
});

client.on('message', message => {
    console.log(message.body);
});

client.on('message', message => {
    if (message.body === 'תביא שיר') {
        // message.reply('pong');
        randomSong(message)
    }
});

function randomSong(msg) {
    const chosenSong = returnSongObj() /// {name: 'הקנאה', by:'יוני בלוך', lyrics:'כגדכ דגכדגכ דגכדגכ דגככ'}
    const strLyricAndName = `${chosenSong.name} - ${chosenSong.by}`
    console.log(strLyricAndName);
    msg.reply(strLyricAndName)
}

function returnSongObj() {
    const num = getRandomNum()

    const songs = [
        {
            name: 'מיכל',
            by: 'אליאב זוהר',
            lyrics: ''
        },
        {
            name: 'הקנאה',
            by: 'יוני בלוך',
            lyrics: ''
        },
        {
            name: 'one day',
            by: 'matysyahu',
            lyrics: ''
        },
    ]
    return songs[num]
}

function getRandomNum(min = 0, max = 2) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

client.initialize();

app.get('/', (req, res) => {
    // res.status(200).send({})
    readFile('./home.html', 'utf8', (err, html) => {
        if (err) {
            res.status(500).send
        }
        res.send(html)
    })
})

app.listen(port, () => {
    console.log(`it\'s alive on http://localhost:${PORT}`)
})