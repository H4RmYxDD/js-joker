const apiURL = "https://v2.jokeapi.dev/joke/Any";

const jokeDisplay = document.getElementById('jokeDisplay');
const getJokeBtn = document.getElementById('getJokeBtn');

async function getJoke() {
  try {
    const response = await fetch(apiURL);
    const data = await response.json();
    jokeDisplay.style.opacity = 0;
    jokeDisplay.style.transform = 'translateY(20px)';

    setTimeout(() => {
      if (data.type === 'twopart') {
        jokeDisplay.innerHTML = `<strong>${data.setup}</strong><br><em>${data.delivery}</em>`;
      } else {
        jokeDisplay.innerHTML = `<strong>${data.joke}</strong>`;
      }

      jokeDisplay.style.opacity = 1;
      jokeDisplay.style.transform = 'translateY(0)';
    }, 300);
  } catch (error) {
    jokeDisplay.innerHTML = "Hiba történt a vicc betöltése közben!";
  }
}

getJokeBtn.addEventListener('click', getJoke);
