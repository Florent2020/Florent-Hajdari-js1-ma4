const gamesUrl = "https://api.rawg.io/api/games";

async function callGames() {

    try {
        const response = await fetch(gamesUrl);
        const games = await response.json();
        createGames(games);
    } catch (error) {
        console.log(error);
    }

}

callGames();


function createGames(games) {
    console.log(games);

    const resultsHtml = document.querySelector(".results");

    let newHTML = "";

    const gamesArray = games.results;

    for (let i = 0; i < gamesArray.length; i++) {

        newHTML += `<div class="game">
                            <h2>${gamesArray[i].name}</h2>
                            <img src="${gamesArray[i].background_image}" alt="${gamesArray[i].name}" />
                        </div>`



    }

    resultsHtml.innerHTML = newHTML;
}