

//height in cm
//weight in kg
const bmiCalc = (weight, height) => Math.round(weight / Math.pow((height/100), 2));

console.log(bmiCalc(75, 170));