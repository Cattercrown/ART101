// the clicker button program

// we create a variable named "count", the initia; value is 0

let count = 0;

let colors = ["green", "brown", "orange", "limegreen",
    "yellow", "gold", "purple", "red", "pink", "blue", "teal", "turquoise"];

$("#needy-button").click(function () {
    // what to do when the button is clicked
    // first, set up a new value for "count", which is the current value +1


    count = count + 1;

    console.log(count);
    console.log(colors [count-1]);

    //now let's find out our button and set a new text for it

    buttonText = "Miku has been fed " + count + " leeks and the color of that last leek was " + colors[count-1];

    $("#needy-button").html(buttonText);

    $("body").css("background-color",colors[count-1] );

});

