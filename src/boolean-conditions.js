// Initialise the didPass variable with a boolean value
let didPass = true

// 1. Create a conditional statement that changes the answer variable to the string
// "Well done, you passed!" if didPass is true, or "Sorry, try again!" if didPass
// is false
let answer 
if (didPass){
 answer = "Well done, you passed!" 
}else{
  answer = "Sorry, try again!"
}
console.log(answer)

// 2. When you're done and the test passes, changing didPass to the opposite boolean
// and run the test again to make sure it still passes


// Assume didPass is a boolean variable that determines whether the condition is met

if (didPass) {
  answer = "Well done, you passed!";
} else {
  answer = "Sorry, try again!";
}

// Now, change the value of didPass to the opposite boolean and test again
didPass = !didPass;

// Create the conditional statement again
if (didPass) {
  answer = "Well done, you passed!";
} else {
  answer = "Sorry, try again!";
}
  console.log(answer)

// Don't change the code below this line
module.exports = {
  didPass,
  answer
}