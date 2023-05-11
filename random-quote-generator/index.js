const apiURl ="https://api.quotable.io/random"
const btnEl = document.getElementById('btn');
const quoteEl = document.getElementById('quote');
const authorEl = document.getElementById('author');

async function getQuote(){
    try {
        quoteEl.innerText =`Loading quote...`;
        authorEl.innerText =`...`;
        btnEl.innerText ="Loading ...";
        btnEl.disabled= true;
        const res = await fetch(apiURl);
        const data = await res.json();
        quoteEl.innerText = data.content;
        authorEl.innerText = "~" + data.author;
        btnEl.innerText ="Get a quote";
        btnEl.disabled= false;
    } catch (error) {
        quoteEl.innerText = "An error occurred, please try again later.";
        btnEl.innerText ="Get a quote";
        btnEl.disabled= false;
    }
   
    
}
getQuote();
btnEl.addEventListener('click',getQuote)