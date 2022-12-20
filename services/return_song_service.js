module.exports = {
    printHello,
    getRandomNum,
    returnSongObj,
    return4ChordSongObj,
}

function printHello() {
    console.log('hello from song service');
}

function getRandomNum(min = 0, max = 11) {
    return Math.floor(Math.random() * (max - min + 1) + min);
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

function return4ChordSongObj() {
    const num = getRandomNum()
    const songs = [
        {
            name: 'One day',
            by: 'Matisyahu',
            lyrics: ''
        },
        {
            name: 'Girl like you',
            by: 'Maroon 5',
            lyrics: ''
        },
        {
            name: 'Say you won\'t let go',
            by: 'James arthur',
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