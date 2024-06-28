// Selecting elements...
var selectedAuthor = document.querySelector('#author');
var selectedQuote = document.querySelector('#quote');


// Array of objects || Quotes..

var quotes = [
    {
        'author': 'Sarah Dessen, Just Listen',
        'quote': "Don't think or judge, just listen."
    },
    {
        'author': 'Roy T. Bennett, The Light in the Heart',
        'quote': "Be mindful. Be grateful. Be positive. Be true. Be kind."
    },
    {
        'author': 'Winston S. Churchill',
        'quote': "Success is not final, failure is not fatal: it is the courage to continue that counts"
    },
    {
        'author': 'Fran Lebowitz, The Fran Lebowitz Reader',
        'quote': "Think before you speak. Read before you think"
    },
    {
        'author': 'Isaac Asimov, Foundation',
        'quote': "Never let your sense of morals prevent you from doing what is right."
    },
    {
        'author': 'Salvador Dali',
        'quote': "Have no fear of perfection - you'll never reach it."
    },
    {
        'author': 'Helen Keller',
        'quote': "When one door of happiness closes, another opens; but often we look so long at the closed door that we do not see the one which has been opened for us"
    },
    {
        'author': 'Theodore Roosevelt',
        'quote': "Do what you can, with what you have, where you are."
    },

    {
        'author': 'J.K. Rowling',
        'quote': 'It is impossible to live without failing at something, unless you live so cautiously that you might as well not have lived at all – in which case, you fail by default'
    },
    {
        'author': 'Maya Angelou',
        'quote': 'You may encounter many defeats, but you must not be defeated. In fact, it may be necessary to encounter the defeats, so you can know who you are, what you can rise from, how you can still come out of it.'
    },
    {
        'author': 'Jane Austen',
        'quote': 'There is no charm equal to tenderness of heart.'
    },
    {
        'author': 'Leo Tolstoy',
        'quote': 'Everyone thinks of changing the world, but no one thinks of changing himself.'
    },
    {
        'author': 'Helen Keller',
        'quote': 'Alone we can do so little; together we can do so much.'
    }
]


/*

To check whether the same number gets repeated to ensure a 
new different quote is generated on every button press...

*/

var lastRandomNumber = -1;

// Actual function that does things...
function sayAquote() {

    var randomNumber;
    do {
        randomNumber = Math.floor(Math.random() * quotes.length);
    } while (randomNumber === lastRandomNumber); // Keep generating until it's different

    lastRandomNumber = randomNumber; // Update the last random number

    selectedAuthor.innerHTML = `~ ${quotes[randomNumber].author}`;
    selectedQuote.innerHTML = `❛${quotes[randomNumber].quote}❜`;
}



