/**  BMI = mass / height^2, mass in kg height in meters **/

let markMass = 72.57;
let markHeight = 1.73;

let johnMass = 81.65;
let johnHeight = 1.85;

let markBMI = markMass / Math.pow(markHeight, 2);
let johnBMI = johnMass / johnHeight * johnHeight;

let markFatter = markMass > johnMass;

console.log("Mark is fatter than John? " + markFatter);

