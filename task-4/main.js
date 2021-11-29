//declare a new variable for the empty array 
let importantThings = [];
let objectCreator;
//create a variable for the input field

let inputField = document.querySelector("#important-thing");

let button = document.querySelector("#add-to-list");
let orderList = document.querySelector("ol");
//create an input for the text object
let objectInputField = document.querySelector("#priority-value");
let buttonForAddObject = document.querySelector("#add-object");
//create a button for ordering the object
let buttonObject = document.querySelector("#buttonObject");

//create a function so every time we write text on input fiedl...
//..after pressing the submit button the text will be pushed into the array 

 function addToArray(){  
    importantThings.push(inputField.value) //we push the text inside the input to the array
    //for each items in the array create a list and append the list item to the order list
     let list =  document.createElement("li"); //we create a list
      list.innerHTML= inputField.value; //we set the text in the list with the html text we type in the input field
     inputField.value ="";// we refresh the input field 
     orderList.appendChild(list);//we take the empty order list and we append our new list with the text inside

     console.log(orderList);
    }  

    function addObjectToArray(){

       objectCreator = {};//create a function  where we create an empty object 
      objectCreator.text=objectInputField.value; //we set the  key pair as the result of the input value to
      objectInputField.value="";//we refresh the input text field after we click the buton
      objectCreator.priority = Math.floor(Math.random()*20);// we set the value pair as the result of  a Math.random function
      importantThings.push(objectCreator);//push the object into the array
         
         console.log(importantThings)
    }

    


    function orderTheObjectByPriority(){
       
       //method for order an object list by priority
        importantThings.sort((a,b)=>{
          if(a.priority>b.priority){
              return 1
          }else{
             return  -1
          }
      
         })
      
      console.log(importantThings)
      
    }

    

button.addEventListener("submit",addToArray);
buttonForAddObject.addEventListener("submit",addObjectToArray);
buttonObject.addEventListener("submit",orderTheObjectByPriority)