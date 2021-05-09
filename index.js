//grab the DOM elements and save to variables so we can create functionality!

const setupDiv = document.getElementById('setup');
const punchlinDiv = document.getElementById('punchline');
const punchlineBtn = document.getElementById('punchline-button');
const newJokeBtn = document.getElementById('new-joke-button');

async function getJoke() {
    const jokePromise = await fetch('https://official-joke-api.appspot.com/jokes/programming/random');
    const joke = await jokePromise.json();
    joke.forEach(data => {
       setup = data.setup;
       punchline = data.punchline; 
       setupDiv.innerText = setup;
         const punchlineDivBubble = document.createElement("div");
         punchlineDivBubble.innerText = `${punchline}`;
         punchlineDiv.appendChild(punchlineDivBubble);
    })

}

    getJoke();