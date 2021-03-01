const colorCombinator = require("./color-combinator.js");
const colorDeconstructor = require("./color-deconstructor.js");
const isValidPrimary = require("./is-valid-primary.js");
const isValidSecondary = require("./is-valid-secondary.js");
const getInput = require("./get-input.js");

// Your code here!

const color1 = getInput(1);
const color2 = getInput(2);

// Checks to see if a valid secondary color is inputted without a second input
if (isValidSecondary(color1) && color2 === undefined) {
    console.log(` The color ${color1} is made of ${colorDeconstructor(color1)}`);
} 


// Checks to see if only one primary color is inputted
if (isValidPrimary(color1) && color2 === undefined) {
    console.log('please select one more primary color.');
}

// Checks to see if two primary colors are inputted that are not the same
if (isValidPrimary(color1) && isValidPrimary(color2) && color1 !== color2) {
    console.log(`Those colors make the color ${colorCombinator(color1, color2)}`);
} 

// Checks to see if a primary and secondary color are inputted
if (isValidPrimary(color1) && isValidSecondary(color2) || isValidPrimary(color2) && isValidSecondary(color1)) {
    console.log('You have selected a primary and a secondary color. Please select two different primary colors or one secondary color.')
}

// Checks to see if inputs are the same
if (color1 === color2 && color1 !== undefined) {
    console.log('You have inputted the same thing twice. Please select two different primary colors or one secondary color.')
}

// Checks if nothing is inputted
if (color1 === undefined) {
    console.log('Nothing has been inputted. Please select two different primary colors or one secondary color.');
}


// Checks to see if two different secondary colors are inputted
if (isValidSecondary(color1) && isValidSecondary(color2) && color1 !== color2) {
    console.log('Those are both secondary colors. Please select two different primary colors or one secondary color.')
}

// Checks to see if only valid colors are inputted in both inputs
if (((color1 !== 'red' && color1 !== 'blue' && color1 !== 'yellow' && color1 !== 'orange' && color1 !== 'purple' && color1 !== 'green') && color1 !== undefined)){
    console.log('Your first input is not a valid color. Please select two different primary colors or one secondary color.')
};

if ((color2 !== 'red' && color2 !== 'blue' && color2 !== 'yellow' && color2 !== 'orange' && color2 !== 'purple' && color2 !== 'green') && color1 !== undefined && color2 !== undefined) {
    console.log('Your second input is not a valid color. Please select two different primary colors or one secondary color.')
}

/*
// Class Review led by Alex

if (color1 === undefined && color2 === undefined) {
    // Case 1: error
    console.log('No colors provided. Error.')
}

else if (color1 !== undefined && color2 === undefined) {
    // Case 2: deconstruct color 1
    const isColor1Valid = isValidSecondary(color1);
    if (isColor1Valid) {
        const deconstruction = colorDeconstructor(color1);
        console.log('Deconstruction is' + deconstruction);
    } else {
        console.log('Color 1 is not a valid secondary color')}
}

else {
        // Case 3: combine color1 and color2
    const isColor1Valid = isValidPrimary(color1);
    const isColor2Valid = isValidPrimary(color2);
    if (isColor1Valid && isColor2Valid) {
        const combination = colorCombinator(color1, color2);
        console.log('Combination is' + combination);
    } else {
        console.log('At least one color is not valid.')
    }
}
*/