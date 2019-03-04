const quotes = [
    {
        quote: 'be part of the solution not the pollution',
        name: 'mr robot'
    },
    {
        quote: 'some times the man meets his destiny on the road he takes to avoid',
        name: 'wise old man'
    },
    {
        quote: 'discovery requires expermintaion',
        name: 'Agents of S.H.I.E.L.D.'
    },
    {
        quote: 'you wanna be the man, you gotta have a plan',
        name: 'person of interest'
    },
    {
        quote: 'everybody wants happiness nobody wants pain,but you can\'t have rainbow without a little rain',
        name: 'baby driver'
    },
    {
        quote: 'an eye for an eye and the world goes blind',
        name: 'ghandi'
    },
    {
        quote: 'imagination is a weapon, those who lack it are first to die ',
        name: 'goblin slayer'
    },
];
const quoteBtn = document.querySelector('#quoteBtn');
const quoteName = document.querySelector('#quoteName');
const quoteAuthor = document.querySelector('#quoteAuthor');
quoteBtn.addEventListener('click', changeQuote);
function changeQuote() {
    let random = Math.floor(Math.random() * quotes.length);
    quoteName.innerHTML = quotes[random].quote;
    quoteAuthor.innerHTML = quotes[random].name;
}