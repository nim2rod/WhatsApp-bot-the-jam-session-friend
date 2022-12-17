const qrcode = require('qrcode-terminal');
const express = require('express')
const app = express()
// const PORT = 8000
const port = process.env.PORT || 8000
/////
const http = require('http').createServer(app)

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
    if (message.body === '4 chords song' || message.body === '4 chord song' || message.body === '4chords song') {
        // message.reply('pong');
        random4ChordSong(message)
    }
});

function random4ChordSong(message) {
    const chosenSong = return4ChordSongObj() /// {name: 'הקנאה', by:'יוני בלוך', lyrics:'כגדכ דגכדגכ דגכדגכ דגככ'}
    const strLyricAndName = `${chosenSong.name} - ${chosenSong.by} - /C /G /Am /F /`
    console.log(strLyricAndName);
    msg.reply(strLyricAndName)
}

function return4ChordSongObj() {
    const num = getRandomNum()

    const songs = [
        {
            name: 'one day',
            by: 'matisyahu',
            lyrics: ''
        },
        {
            name: 'girls like you',
            by: 'maroon 5',
            lyrics: ''
        },
        {
            name: 'Say you wan\'t let go',
            by: 'james arthur',
            lyrics: ''
        },
        {
            name: 'Don\'t Stop Believin',
            by: 'Journey',
            lyrics: ''
        },
        {
            name: 'You\'re Beautiful',
            by: 'James Blunt',
            lyrics: ''
        },
        {
            name: 'Where Is the Love',
            by: 'The Black Eyed Peas',
            lyrics: ''
        },
        {
            name: 'Forever Young',
            by: 'Alphaville',
            lyrics: ''
        },
        {
            name: 'I\'m Yours',
            by: 'Jason Mraz',
            lyrics: ''
        },
        {
            name: 'Hey, Soul Sister',
            by: 'Train',
            lyrics: ''
        },
        {
            name: 'Let It Be',
            by: 'The Beatles',
            lyrics: ''
        },
        {
            name: 'No Woman No Cry',
            by: 'Bob Marley',
            lyrics: ''
        },
        {
            name: 'עוד אח אחד',
            by: 'הדג נחש',
            lyrics: ''
        },
    ]
    return songs[num]
}

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
            name: 'תחרות כלבים',
            by: 'אביתר בנאי',
            lyrics: ''
        },
        {
            name: 'רסיסים',
            by: 'רביב קנר',
            lyrics: ''
        },
        {
            name: 'whats up!',
            by: '4 non blond',
            lyrics: ''
        },
        {
            name: 'סיגפו',
            by: 'בית הבובות',
            lyrics: ''
        },
        {
            name: 'עד שבאת',
            by: 'בית הבובות',
            lyrics: ''
        },
        {
            name: 'כל מה שנשאר',
            by: 'בוטן מתוק בקרקס',
            lyrics: ''
        },
        {
            name: 'נגמר',
            by: 'עידן עמדי',
            lyrics: ''
        },
        {
            name: 'חלק מהזמן',
            by: 'עידן עמדי',
            lyrics: ''
        },
        {
            name: 'קרן שמש',
            by: 'בניה ברבי',
            lyrics: ''
        },
        {
            name: 'כמה מתוק',
            by: 'יסמין מועלם',
            lyrics: ''
        },
    ]
    return songs[num]
}

function getRandomNum(min = 0, max = 11) {
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

// app.listen(port, () => {
http.listen(port, () => {
    console.log(`it\'s alive on http://localhost:${port}`)
})