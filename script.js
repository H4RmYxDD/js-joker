const apiURL = "https://v2.jokeapi.dev/joke/Any";

const jokeDisplay = document.getElementById('jokeDisplay');
const getJokeBtn = document.getElementById('getJokeBtn');

async function getJoke() {
  try {
    const response = await fetch(apiURL);
    const data = await response.json();

    if (data.type === 'twopart') {
      jokeDisplay.innerHTML = `<strong>${data.setup}</strong><br><em>${data.delivery}</em>`;
    } else {
      jokeDisplay.innerHTML = `<strong>${data.joke}</strong>`;
    }
  } catch (error) {
    jokeDisplay.innerHTML = "Hiba történt a vicc betöltése közben!";
  }
}

getJokeBtn.addEventListener('click', getJoke);
