const onClick = document.querySelector(".button")

const jokes = [
    `The way to get started is to quit talking and begin doing. -Walt Disney`,
    `The pessiment sees difficulty in every opportunity. The optimist sees the. -random`,
    `We may enter many defeats but we must not be defeated -Maya Angelou`
]

function getJoke() {
    let randomNumber = Math.floor(Math.random() * (jokes.length));
    document.getElementById('displayQuote').innerHTML = jokes[randomNumber];
}

onClick.addEventListener("click", getJoke);