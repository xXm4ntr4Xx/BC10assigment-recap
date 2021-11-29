//create the variables of the image and the button and link them to the respective html tags using the querySelector method
let image = document.querySelector("#cat-here");
let button = document.querySelector("#btn");




//create an async function
async function getRandomCat() {
    
    const response = await fetch("https://api.thecatapi.com/v1/images/search");//assign the link to a variable
    const data = await response.json(); // assign the json file to a variable
    
    const catUrl = data[0].url//assign the link of the random cat to a variable
        

    // call the set attribute and define the type of attribute as first parameter
    // because we call the src attribute we select the cat link as second parameter
        image.setAttribute("src",`${catUrl}`);
  }
  
  

//add an event listener to call the get random cat when the button is clicked
button.addEventListener("click", getRandomCat);

  
  getRandomCat();