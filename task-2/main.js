
//create a set interval that increase the counter of the paragraph inside the html file every seconds.
//select the paragraph using the dom and assign an value inside the html page to your chosing number
let paragraph = document.querySelector("p");
//create a counter
counter = 0;
//create an increment function
let incrementParagraph = function() {
    //increase the counter
    counter++;
//set the iner html of paragraph to the counter variable
   paragraph.innerHTML=`${counter}`;

// if the counter === 12 call the clear interval function to stop the counter adding 1 every second
   if(counter === 12){
       clearInterval(timer);
   }
}



// use the set interval set to (1000==1sec),so will repeat the operation inside the incrementParagraph every second
let timer = setInterval(incrementParagraph, 1000)



     


 




