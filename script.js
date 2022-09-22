let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes = [{
    quote: `"A name pronounced is the recognition of the individual to whom it belongs. He who can pronounce my name aright, he can call me, and is entitled to my love and service."`,
     person:`Henry David Thoreau`
},{
    quote:`"The glory of my name increases my shame. Less known by mortals, I could better escape their eyes."`,
    person:`Jean Racine`
}, {
    quote:`"Forgive your enemies, but never forget their names."`,
    person:`John F. Kennedy`
}, {
    quote:`"They say we die twice - once when the last breath leaves our body and once when the last person we know says our name."`,
    person:`Al Pacino`
}, {
    quote:`"O peace! how many wars were waged in thy name."`,
    person:`Alexander Pope.`
},{
    quote:`"His name tasted of fire and wings, of curling smoke, of subtlety and strength and the rasping whisper of scales."`,
    person:`Naomi Novik`
}]

btn.addEventListener('click',function(){
    let random = Math.floor(Math.random() * quotes.length)
// console.log(quotes[random].quote)
    quote.innerText = quotes[random].quote
    person.innerText = quotes[random].person
// console.log(quotes[random])


})