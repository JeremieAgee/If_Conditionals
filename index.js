console.log(`Let's Learn about if statements!`);
console.log(`********************************`);


person = {
  name: "",
  hasDog: true,
  hasCar: false,
  hasHouse: true,
  hasKids:  true,
  hasDogHouse: false,
  hasTruck: true,
};

// TODO: add 5 more boolean properties on the object.




console.log(`Info for ${person.name}`);
console.log(`********************************`);


// This is an if statement.
// If the person has a dog...
// it will log "...has a dog."
// otherwise it will log out
// "...doesn't have a dog."
if (person.hasDog) {
  console.log(`...has a dog.`);
} else {
  console.log(`...doesn't have a dog.`);
}

// TODO: make 5 more if statements
// that print out something if
// the property on a person is
// true. And something else if
// it is false.
if(person.hasCar) {
    console.log('...has a car.');
} else {
    console.log('...does not have a car.');
}
if(person.hasHouse) {
    console.log('...has a house.');
} else {
    console.log('...does not have a house.');
}
if(person.hasKids) {
    console.log('...has a kids.');
} else {
    console.log('...does not have a kids.');
}
if(person.hasDogHouse) {
    console.log('...has a dog house.');
} else {
    console.log('...does not have a dog house.');
}
if(person.hasTruck) {
    console.log('...has a truck.');
} else {
    console.log('...does not have a truck.');
}







// Bonus:
// Add a few more properties on the person object.


// Add if statements using && and ||
// See what you can logically prove about a person using combinations of && and ||.

// Put your if statements in functions
// so you can re-use them.
// Add a second or third object of the type person. See what you can "prove" about different people using the conditionals that you wrote. 
// For example, can you give recommendations for X-mas gifts based on several characteristics at once?

