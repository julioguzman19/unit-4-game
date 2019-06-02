
let firstNumber = null;
let secondNumber = null;
let thirdNumber = null;
let fourthNumber = null;

$(document).ready(function() {

    firstImageNumberGenerator()

    secondImageNumberGenerator()
  
    thirdImageNumberGenerator()

    fourthImageNumberGenerator()

   /*  yourCurrentNumber() */

})

function firstImageNumberGenerator(){
  //Image1 Number
  $("#image1Number").on('click',function(){

    if(firstNumber === null){
      firstNumber=Math.floor(Math.random() * Math.floor(12));
    }

    $("#test").html(firstNumber); 
  });
}

function secondImageNumberGenerator(){
  //Image2 Number
  $("#image2Number").on('click',function(){

    if(secondNumber === null){
      secondNumber=Math.floor(Math.random() * Math.floor(12));
    }
    
    $("#test").html(secondNumber); 
  });
}

function thirdImageNumberGenerator(){
   //Image3 Number
   $("#image3Number").on('click',function(){

    if(thirdNumber === null){
      thirdNumber=Math.floor(Math.random() * Math.floor(12));
    }

    $("#test").html(thirdNumber); 
  });
}

function fourthImageNumberGenerator(){
    //Image4 Number
    $("#image4Number").on('click',function(){

      if(fourthNumber === null){
        fourthNumber=Math.floor(Math.random() * Math.floor(12));
      }
 
      $("#test").html(fourthNumber); 
    });
}

/* function yourCurrentNumber(){
  let currentNewNumber = currentNewNumber;
  console.log(currentNewnNumber);
} */



