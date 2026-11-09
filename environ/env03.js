let count = 0;
let colorsCount = 0;

let colors = ["green", "brown", "orange", "limegreen",
    "yellow", "gold", "purple", "red", "pink", "blue", "teal", "turquoise"];

$("#needy-button").click(function () {


    count = count + 1;


    console.log(count);
    console.log(colors[colorsCount]);

    buttonText = "You have voted " + count + " time(s)";

    $("#needy-button").html(buttonText);

});




function askPokemon(correctPokemon) {
    let userGuess = prompt("Guess the Pokémon!");

    if (userGuess && userGuess.toLowerCase() == correctPokemon.toLowerCase()) {
        let pokemonName = correctPokemon.toLowerCase();
        let imageUrl = `https://assets.pokestats.gg/pokeapi/v1/pokemon/versions/generation-v/black-white/animated/358.gif`;

        $("#output").html(`
      <p>You got it! It's ${correctPokemon}!</p>
      <p>${correctPokemon} is #0358 in the Pokédex, originally found in the Hoenn region! 
      Chimecho typically tend to spend their time near the oceans of Santa Cruz to gain the best wind to show off their sound. </p>
      <img src="${imageUrl}" alt="${correctPokemon}" style="max-width: 200px; display: block; margin-top: 100px;">
    `);
    } else {
        $("#output").html("Wrong Pokémon! (Hint: It's found to make lots of musical chimes near the winds.)");
    }
}

$("#good-button").click(function () {
    askPokemon("Chimecho");
});