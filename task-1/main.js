const celebs = [
  "David Beckham",
  "Cher",
  "Madonna",
  "Tom Petty",
  "Cristiano Ronaldo",
  "Whoopi Goldberg",
  "Samuel L Jackson",
  "Angelina Jolie",
  "Richard Osman",
  "Emma Thompson"
];

// task 1
//create a function with the "name parameter" and use the parameter to add 
function makeLegend(name) {
  if(typeof name !== "string") {
    return `A legend requires a string`;
}else{
  return `${name} is now a legend.`;
}
}
  //test step 1 of the first task
console.log(makeLegend(1));// passing a number
console.log(makeLegend("Chirs"));// passing a string



// create a new varaiable for the array(initialised variable)
let legendaryCelebs 

////using the map method on the array we create a new array... 
////that add the string of the makeLegend function for each name 
legendaryCelebs = celebs.map(makeLegend)
//test step 2 of the first task
console.log(legendaryCelebs)


//// Use an array method to produce a new array of all of the celebrity names 
////which start with a vowel and store in a new variable called vowelCelebs.


//array of vowels
let vowelsArray =["A","E","I","O","U","a","e","i","o","u"];
//new empty array where store all the vowels celebrity
let vowelsCelebs = [];


celebs.forEach((name)=>{
  //check if the first letter of each celebrity start with a vowel
  // if so, push the name inside the new emptry arry "vowelscelebs"
    if(vowelsArray.includes(name[0])){
      vowelsCelebs.push(name);
    }
})


// test step 3 of the first stask
console.log(vowelsCelebs);

