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
