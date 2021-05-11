//grab the DOM elements and save to variables so we can create functionality!

const setupDiv = document.getElementById('setup');
const punchlineDiv = document.getElementById('punchline');
const punchlineBtn = document.getElementById('punchline-button');
const newJokeBtn = document.getElementById('new-joke-button');

//create a variable to store the punchline so it can be reassigned as we go.
let punchline;

//make the 'get punchline' button work

punchlineBtn.addEventListener('click', getPunchline);

function getPunchline() {
    punchlineDiv.innerHTML = punchline;
    punchlineDiv.classList.add('bubble');
    punchlineBtn.classList.toggle('hidden');
    newJokeBtn.classList.toggle('hidden');
}

//make the new joke button work

newJokeBtn.addEventListener('click', getNewJoke);

function getNewJoke() {
    punchlineDiv.innerHTML = '';
    getJoke();
}

//get the joke data from the API

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

          punchlineBtn.classList.toggle('hidden');
          newJokeBtn.classList.toggle('hidden');
    })

}

    //getJoke();