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
            tab4u: 'https://www.tab4u.com/tabs/songs/70853_%D7%90%D7%9C%D7%99%D7%90%D7%91_%D7%96%D7%95%D7%94%D7%A8_-_%D7%9E%D7%99%D7%9B%D7%9C.html'
        },
        {
            name: 'הקנאה',
            by: 'יוני בלוך',
            tab4u: 'https://www.tab4u.com/tabs/songs/3537_%D7%99%D7%95%D7%A0%D7%99_%D7%91%D7%9C%D7%95%D7%9A_-_%D7%94%D7%A7%D7%A0%D7%90%D7%94.html'
        },
        {
            name: 'תחרות כלבים',
            by: 'אביתר בנאי',
            tab4u: 'https://www.tab4u.com/tabs/songs/253_%D7%90%D7%91%D7%99%D7%AA%D7%A8_%D7%91%D7%A0%D7%90%D7%99_-_%D7%AA%D7%97%D7%A8%D7%95%D7%AA_%D7%9B%D7%9C%D7%91%D7%99%D7%9D.html'
        },
        {
            name: 'לשוב הביתה',
            by: 'ישי ריבו',
            tab4u: 'https://www.tab4u.com/tabs/songs/8024_%D7%99%D7%A9%D7%99_%D7%A8%D7%99%D7%91%D7%95_-_%D7%9C%D7%A9%D7%95%D7%91_%D7%94%D7%91%D7%99%D7%AA%D7%94.html'
        },
        {
            name: 'whats up!',
            by: '4 non blond',
            tab4u: 'https://tabs.ultimate-guitar.com/tab/4-non-blondes/whats-up-chords-349210'
        },
        {
            name: 'סיגפו',
            by: 'בית הבובות',
            tab4u: 'https://www.tab4u.com/tabs/songs/816_%D7%91%D7%99%D7%AA_%D7%94%D7%91%D7%95%D7%91%D7%95%D7%AA_-_%D7%A1%D7%99%D7%92%D7%A4%D7%95.html'
        },
        {
            name: 'עד שבאת',
            by: 'בית הבובות',
            tab4u: 'https://www.tab4u.com/tabs/songs/823_%D7%91%D7%99%D7%AA_%D7%94%D7%91%D7%95%D7%91%D7%95%D7%AA_-_%D7%A2%D7%93_%D7%A9%D7%91%D7%90%D7%AA.html'
        },
        {
            name: 'יצחק קלפטר',
            by: 'צליל מכוון',
            tab4u: 'https://www.tab4u.com/tabs/songs/1673_%D7%99%D7%A6%D7%97%D7%A7_%D7%A7%D7%9C%D7%A4%D7%98%D7%A8_-_%D7%A6%D7%9C%D7%99%D7%9C_%D7%9E%D7%9B%D7%95%D7%95%D7%9F.html'
        },
        {
            name: 'נגמר',
            by: 'עידן עמדי',
            tab4u: 'https://www.tab4u.com/tabs/songs/4847_%D7%A2%D7%99%D7%93%D7%9F_%D7%A2%D7%9E%D7%93%D7%99_-_%D7%A0%D7%92%D7%9E%D7%A8.html'
        },
        {
            name: 'חלק מהזמן',
            by: 'עידן עמדי',
            tab4u: 'https://www.tab4u.com/tabs/songs/6747_%D7%A2%D7%99%D7%93%D7%9F_%D7%A2%D7%9E%D7%93%D7%99_-_%D7%97%D7%9C%D7%A7_%D7%9E%D7%94%D7%96%D7%9E%D7%9F.html?ton=3#song'
        },
        {
            name: 'מחכה',
            by: 'עידן חביב',
            tab4u: 'https://www.tab4u.com/tabs/songs/4582_%D7%A2%D7%99%D7%93%D7%9F_%D7%97%D7%91%D7%99%D7%91_-_%D7%9E%D7%97%D7%9B%D7%94.html'
        },
        {
            name: 'כמה מתוק',
            by: 'יסמין מועלם',
            tab4u: 'https://www.tab4u.com/tabs/songs/67325_%D7%99%D7%A1%D7%9E%D7%99%D7%9F_%D7%9E%D7%95%D7%A2%D7%9C%D7%9D_-_%D7%9B%D7%9E%D7%94_%D7%9E%D7%AA%D7%95%D7%A7.html?ton=-1.5#song'
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