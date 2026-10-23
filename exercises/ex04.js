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

    //$("body").append(' ,img width='50' src='" +colors[count-1] +".jpg'>");

    //if we run out of colors start from the first one again

    colorsCount = colorsCount + 1;
    
    if (colorsCount >= 12) { colorsCount = 0; }

    

});

