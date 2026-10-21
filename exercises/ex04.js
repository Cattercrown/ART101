// the clicker button program

// we create a variable named "count", the initia; value is 0

let count =0;

let colors = ["green", "brown (ew)", "orange (yikes)", "light green (oh thank god)",
    "yellow (maybe she should've been fed a different leek)", "gold (you must feel lucky)", "purple (is that even possible?)", "red (maybe she should throw up!)", "pink (i'm just not gonna tell you any more colors)", "undefined", "undefined (told ya)", "undefined", "undefined", "undefined", "undefined", "undefined", "undefined", "undefined", "undefined (you can stop clicking now)", "undefined", "undefined", "UNDEFINED", "undefined (i'm tired of this grandpa)", "undefined (WELL THAT'S TOO DAMN BAD!)"];

    let buttonText=""

$("#needy-button").click(function () {
    // what to do when the button is clicked
    // first, set up a new value for "count", which is the current value +1


    count = count + 1;


    //now let's find out our button and set a new text for it

buttonText="Miku has been fed " + count + " leeks and the color of that last leek was " + colors[count-1];

    $("#needy-button").html ( buttonText );

});

