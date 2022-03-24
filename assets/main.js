// 1. Use the id-selector to get your inputs' and the output element from the DOM
// for each imput ill need to repeat the folowing
const inputOne = document.querySelector(`#one`);
const inputTwo = document.querySelector(`#two`);
const inputThree = document.querySelector(`#three`);
const inputFour = document.querySelector(`#four`);
const inputFive = document.querySelector(`#five`);
const inputSix = document.querySelector(`#six`);
const inputSeven = document.querySelector(`#seven`);
const inputEight = document.querySelector(`#eight`);
const inputNine = document.querySelector(`#nine`);
const inputTen = document.querySelector(`#ten`);
const output = document.querySelector(`.output`);
// 2. For each of the inputs, get the value (word) from them

// 3. Generate your template using the values from above and set the output element's value equal to it!
//HINT: You'll need a ton of code before doing anything in this function that's called in your index.html 😜
function generateTemplate() {
  // console.log(inputOne.value);
  let madLib = `${inputOne.value} is on their way to visit the ${inputTwo.value} ${inputThree.value} ${inputFour.value}. They ${inputFive.value} ${inputSix.value} almost crashed their ${inputSeven.value} ${inputEight.value}. No worries though, they made it there ${inputNine.value} and looked ${inputTen.value}.`
  console.log(madLib);
  output.innerHTML = madLib;
    // instead of loging , we need to ad HTML to the output object}
}
