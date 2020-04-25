const sportsUrl = "https://api.rawg.io/api/games/4200";

async function createGameDetails() {

    const heading = document.querySelector("h1");
    const image = document.querySelector(".image");
    const description = document.querySelector(".description");



    try {
        const response = await fetch(sportsUrl);
        const games = await response.json();


        console.log(games);

        heading.innerHTML = games.name;
        image.style.backgroundImage = `url(${games.background_image})`;
        description.innerHTML = games.description;


    } catch (error) {
        console.log(error);
    }

}

createGameDetails();