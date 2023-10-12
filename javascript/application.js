console.log("Hello from JavaScript!");

const fullName = "Chris";

const message = `Hello, ${fullName}`;

console.log(message); // only used in development or terminal only applications never for testing

// Hash

const student = {
  firstName: "John",
  lastName: "Smith",
};

// ruby variables: lower_snake_case
// JS variables: lowerCamelCase

// If statements
const age = 17;

if (age < 18) {
  console.log("you cannot vote");
} else if (age === 17) {
  console.log("you can almost vote");
} else {
  console.log("you can vote");
}


// functions capitalize
const capitalize = (word = 'default') => {
  // get the first letter and put in UpperCase
  const firstLetter = word[0].toUpperCase();
  // we get the rest of the word and we lower case
  const restOfWord = word
    .substring(1)
    .toLowerCase();

    return `${firstLetter}${restOfWord}` // use return to send the desired value to the function when called
}

console.log(capitalize()); // will return the default value
console.log(capitalize('hello')); // will return 'Hello'
