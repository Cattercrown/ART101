let count = 0;
let buttonCreature = {
    name: "Talking Ben",
    species: "digital dog",
    favoriteFood: "telephones",
    moods: ["Ben?", "ho ho ho", "no", "yeas", "eugh", "*hangs up*"]
};

$("#needy-button").click(function () {

    count = count + 1;

    let arrayPosition = count - 1;

    let currentMood = buttonCreature.moods[arrayPosition];

    let message = "<p>You clicked me " + count + " times.</p>";
    
    message = message + "<p>My name is " + buttonCreature.name + ".</p>";
    message = message + "<p>Right now I'm saying: " + currentMood + ".</p>";
    message = message + "<p>I am a " + buttonCreature.species + ".</p>";
    message = message + "<p>My favorite food is " + buttonCreature.favoriteFood + ".</p>";

    $("#output").html(message);

    console.log(count);
    console.log(arrayPosition);
    console.log(currentMood);


});