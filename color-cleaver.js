const colorCombinator = require("./color-combinator.js");
const colorDeconstructor = require("./color-deconstructor.js");
const isValidPrimary = require("./is-valid-primary.js");
const isValidSecondary = require("./is-valid-secondary.js");
const getInput = require("./get-input.js");

// Your code here!

const color1 = getInput(1);
const color2 = getInput(2);
const noColor = undefined;

if (colorCombinator(noColor, noColor)) {
    console.log('You must enter at least one color');
} 

if (colorCombinator(color1 === 'red', color2 === 'yellow')) {
    console.log('Those two colors make orange');
}