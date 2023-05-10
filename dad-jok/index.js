const btnEl = document.getElementById("btn");
const jokeEl = document.getElementById("joke");

const apiKey = "brEcMHd19iaFRhELlIfmxw==uFiAissHFIMKnkCs";
const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1";

const options = {
    method: "GET",
    headers: {
        "X-Api-Key": apiKey,
    },
};

const getJoke = async () => {

    try {

        jokeEl.innerText = "Updating...";
        btnEl.disabled = true;
        btnEl.innerText = "Loading...";
        const response = await fetch(apiURL, options);
        const data = await response.json();
        // console.log(data);
        jokeEl.innerText = data[0].joke;
        btnEl.disabled = false;
        btnEl.innerText = "Tell Me A Joke";

    } catch (error) {
        jokeEl.innerText = "An error happned. Please try again later.";
        btnEl.disabled = false;
        btnEl.innerText = "Tell Me A Joke";
        console.log(error);
    }


}

btnEl.addEventListener("click", getJoke)