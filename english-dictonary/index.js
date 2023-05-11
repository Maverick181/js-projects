const inputEl = document.getElementById('input');
const infoTextEl = document.getElementById('info-text');
const meaningContainerEl = document.getElementById('meaning-container');
const wordEl = document.getElementById('word');
const meaningEl = document.getElementById('meaning');
const audioEl = document.getElementById('audio');

async function fetchAPI(word) {
    try {
        meaningContainerEl.style.display = 'none';
        infoTextEl.style.display = 'block';
        infoTextEl.innerText =`Searching the meaning of "${word}"...`;
        const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
        const result = await fetch(url).then((res) => res.json());

        if(result.title){
            infoTextEl.style.display = 'none';
            meaningContainerEl.style.display = 'block';
            wordEl.innerText = word;
            meaningEl.innerText ="N/A";
            audioEl.style.display = 'none'; 
        
        }
        else{
        infoTextEl.style.display = 'none';
        meaningContainerEl.style.display = 'block';
        audioEl.style.display = 'inline-flex';
        wordEl.innerText = result[0].word;
        meaningEl.innerText = result[0].meanings[0].definitions[0].definition;
        audioEl.src = result[0].phonetics[0].audio;
        } 
    } catch (error) {
        infoTextEl.innerText =`An error occurred , try again later`;

    }

}

inputEl.addEventListener("keyup", (e) => {
    if (e.target.value && e.key === "Enter") {
        fetchAPI(e.target.value)
    }
});