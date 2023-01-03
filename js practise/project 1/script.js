var quotes = [ 'today weather was warm',
                'i have write two lines of js code',
                'now i will run ads on facebook',
                'thanks for watching ',
                'like share and subscribe'
            ]

function newQuote(){

        var randomNumber = Math.floor(Math.random()*(quotes.length));
        document.getElementById('quotesDisplay').innerHTML = quotes[randomNumber];
}