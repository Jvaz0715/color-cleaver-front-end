const colorCombinator = require("./color-combinator.js");
const colorDeconstructor = require("./color-deconstructor.js");
const isValidPrimary = require("./is-valid-primary.js");
const isValidSecondary = require("./is-valid-secondary.js");
const getInput = require("./get-input.js");

// Your code here!

const color1 = getInput(1);
const color2 = getInput(2);
//const noColor = undefined;

if (color1 === undefined && color2 === undefined) {
    console.log('Must enter at least one color')
} else if (color1 && color2 === undefined) {
   console.log(colorDeconstructor(color1));
} else if (color1, color2) {
    console.log(colorCombinator(color1, color2));
}