module.exports = {
    sayHello,
    operateLyricsApi
}

function sayHello() {
    console.log('hello from lyrics service');
}

// import { getLyrics, getSong } from 'genius-lyrics-api';
const { getLyrics, getSong } = require('genius-lyrics-api')
const options = {
    apiKey: 'dcIAgbQg3iFQuubdUwIvN1k5WURe6Kz5vRqjMobmUwJG1w3b2sgxY10vn3abISkV',
    title: 'hello',
    artist: 'adele',
    optimizeQuery: true
}

function operateLyricsApi(songName = 'hello', artistName = 'adele', msg) {
    options.title = songName
    options.artist = artistName

    getLyrics(options).then((lyrics) => {
        console.log(lyrics)
        msg.reply(lyrics)
    })
}




