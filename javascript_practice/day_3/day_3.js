// display image
function displayImage(data) {
  const pokemonImageURL = data.sprites.other.showdown.front_default;
  console.log(`IMAGE URL : ${pokemonImageURL}`);
  const img = document.createElement("img");
  img.src = pokemonImageURL;
  img.alt = `${data.name} image`;
  const imgCell = document.querySelector("#image-fetch");
  imgCell.innerHTML = ""; // remove prev image
  imgCell.append(img);
}

async function getPokemonDataTry(pokemonName) {
  try {
    response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
    // check for response
    //if error :
    if (!response.ok) {
      //hide the innacurate table
      table.style.display = "none";
      errorBar.style.display = "block"; //display error bar
      if (response.status == 404) {
        // "enter valid pokemon" only when error is not found, else display error status
        errorBarText.textContent = `Enter a valid Pokémon name.`;
      } else {
        errorBarText.textContent = `Error : "${response.status}"`;
      }
      console.log(response); // display failed response object
      throw new Error(`Error : "${response.status}"`); // display http error
    }
    //if successful
    else {
      console.log(`HTTP RESPONSE :`); // display successful response object
      console.log(response);
      const data = await response.json(); //parsing to js ( data )
      //displaying data
      displayImage(data);
      console.log(`NAME : ${data.name}`);
      document.querySelector("#name-fetch").textContent = `${data.name}`;
      // power level = sum of base stats
      let powerLevel = null;
      data.stats.forEach((stat) => {
        powerLevel += stat.base_stat;
        return powerLevel;
      });
      console.log(`POWER_LEVEL : ${powerLevel}`);
      document.querySelector("#powerLevel-fetch").textContent = `${powerLevel}`;
      console.log(`HEIGHT : ${data.height}`);
      document.querySelector("#height-fetch").textContent = `${data.height}`;
      console.log(`WEIGHT : ${data.weight}`);
      document.querySelector("#weight-fetch").textContent = `${data.weight}`;
      console.log(`DATA OBJECT: `);
      console.log(data);
      table.style.display = "block"; //make the table visible
      errorBar.style.display = "none"; //hide the error bar
    }
  } catch (error) {
    console.error(error.message);
  }
}

const searchBtn = document.querySelector("#search-btn");
const searchBar = document.querySelector("#search-bar");
const table = document.querySelector("#table");
const errorBar = document.querySelector("#errorBarDisplay");
const errorBarText = document.querySelector("#errorBarText");
searchBtn.addEventListener("click", () => {
  const pokemonName = searchBar.value;
  getPokemonDataTry(pokemonName);
});
