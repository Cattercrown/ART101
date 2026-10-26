// the clicker button program

// we create a variable named "count", the initia; value is 0

let count = 0;
let colorsCount = 0;

let colors = ["green", "brown", "orange", "limegreen",
    "yellow", "gold", "purple", "red", "pink", "blue", "teal", "turquoise"];

$("#needy-button").click(function () {
    // what to do when the button is clicked
    // first, set up a new value for "count", which is the current value +1


    count = count + 1;


    console.log(count);
    console.log(colors[colorsCount]);

    //now let's find out our button and set a new text for it

    buttonText = "Miku has been fed " + count + " leeks and she feels " + colors[colorsCount] + " today";

    $("#needy-button").html(buttonText);

    $("body").css("background-color", colors[colorsCount]);

    //$("body").append(" <img width='50' src='" +colors[count-1] +".jpg'>");

    if (count >= 25) { $("#needy-button").after("<p> my mood is now... SUPER EXTREME ANGER MODE >:00</p>"); }
    else if (count >= 13) { $("#needy-button").after("<p> my mood is now... SUPER angy</p>"); }
    else if(count >= 5) { $("#needy-button").after("<p> my mood is now... angy</p>"); }
    
    //if (  (count >= 13)  && (count <30)) { $("#needy-button").after("<p> my mood is now... SUPER angy</p>"); }

   //if (  (count >= 30)  && (count <300)) { $("#needy-button").after("<p> my mood is now... MEGA ANGRY EXTREMO MODE!!! >:000</p>"); }

    colorsCount = colorsCount + 1;

    //if we run out of colors start from the first one again
    if (colorsCount >= 12) { colorsCount = 0; };




});

