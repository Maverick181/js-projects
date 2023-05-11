const apiURL = "https://api.waifu.pics/sfw/cringe";
const btnEl = document.getElementById('btn');
const animeContainerEl = document.querySelector('.anime-container');
const animeImageEl = document.querySelector('.anime-img');
const animeNameEl = document.querySelector('.anime-name');

btnEl.addEventListener('click', async () => {
    try {
        btnEl.disabled = true;
        // animeNameEl.disabled =true;
        btnEl.innerText ="Loading Gif...";
        const img = await fetch(apiURL).then
        ((response) => response.json());
        btnEl.innerText ="Get Anime Gif";
        animeContainerEl.style.display = 'block';
        animeImageEl.src = img.url;
        btnEl.style.disabled = false;
        // animeContainerEl.style.display = 'none';
        console.log(img.url);
        btnEl.disabled = false;
    } catch (error) {
        btnEl.disabled =false;
        // animeNameEl.disabled =false;
        btnEl.innerText ="Get Anime Gif";
        // animeNameEl.innerText =" An error occurred, please try again later.";

    }

});