const colorCombinator = require("./color-combinator.js");
const colorDeconstructor = require("./color-deconstructor.js");
const isValidPrimary = require("./is-valid-primary.js");
const isValidSecondary = require("./is-valid-secondary.js");
const getInput = require("./get-input.js");

// Your code here!

const color1 = getInput(1);
const color2 = getInput(2);
//const noColor = undefined;

if (isValidSecondary(color1) && color2 === undefined) {
    console.log(`${colorDeconstructor(color1)} make ${color1}`);
} 

if (isValidSecondary(color1) && color2 === color1) {
    console.log('Please only input one secondary color at a time');
} 

if (isValidPrimary(color1) && isValidPrimary(color2) && color1 !== color2) {
    console.log(`Those colors make the color ${colorCombinator(color1, color2)}`);
}

if (color1 === color2) {
    console.log('Those are both the same color. Please select two different primary colors.')
}