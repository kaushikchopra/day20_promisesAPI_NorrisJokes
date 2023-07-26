// Function to fetch data from an API using Promises
async function fetchData(url) {
    try {
        const response = await fetch(url);
        return await response.json();
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

// Function to display Chuck Norris jokes
function displayChuckNorrisJoke() {
    const chuckNorrisBtn = document.querySelector('.chuck-norris-btn');
    const chuckNorrisJokeBlockquote = document.querySelector('.chuck-norris-joke blockquote');

    chuckNorrisBtn.addEventListener('click', () => {
        // Hide the border before generating the joke
        chuckNorrisJokeBlockquote.classList.add('hide-border');

        fetch('https://api.chucknorris.io/jokes/random')
            .then((response) => response.json())
            .then((data) => {
                chuckNorrisJokeBlockquote.textContent = data.value; // Set the joke text directly
                // Restore the border after generating the joke
                chuckNorrisJokeBlockquote.classList.remove('hide-border');
            })
            .catch((error) => {
                console.error('Error fetching Chuck Norris joke:', error);
                chuckNorrisJokeBlockquote.textContent = 'Error fetching Chuck Norris joke';
                // Restore the border after generating the joke
                chuckNorrisJokeBlockquote.classList.remove('hide-border');
            });
    });
}

document.addEventListener('DOMContentLoaded', () => {
    displayChuckNorrisJoke();
});
