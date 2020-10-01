const onClick = document.querySelector(".button")

const jokes = [
    "What rock group has four men that don't sing? Mount Rushmore.",
    "When I was a kid, my mother told me I could be anyone I wanted to be. Turns out, identity theft is a crime.",
    "A guy goes to his doctor because he can see into the future. The doctor asks him,\"How long have you suffered from that condition?\" The guy tells him, \"Since next Monday.\"",
    "What do sprinters eat before a race? Nothing, they fast!",
    "What concert costs just 45 cents? 50 Cent featuring Nickelback!",
    "What do you call a mac 'n' cheese that gets all up in your face? Too close for comfort food!",
    "Why couldn't the bicycle stand up by itself? It was two tired!",
    "Did you hear about the restaurant on the moon? Great food, no atmosphere!",
    "How many apples grow on a tree? All of them!",
    "Did you hear the rumor about butter? Well, I'm not going to spread it!",
    "I like telling Dad jokes. Sometimes he laughs!",
    "To whoever stole my copy of Microsoft Office, I will find you. You have my Word!"
]

function getJoke() {
    let randomNumber = Math.floor(Math.random() * (jokes.length));
    document.getElementById('displayJoke').innerHTML = jokes[randomNumber];
}

onClick.addEventListener("click", getJoke);