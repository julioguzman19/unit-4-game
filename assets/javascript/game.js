let firstNumber = null;
let secondNumber = null;
let thirdNumber = null;
let fourthNumber = null;
let currentNumber =0;
let numberToReachTo = 0;
let wins=0;
let losses=0;

/*Calling functions*/
$(document).ready(function() {

    //populate numberToReachTo random number and currentNumber zero to screen
    numbersGenerator(); 
    //assigning random number 1-12 to 4 images
    firstImageNumberGenerator(); 

    secondImageNumberGenerator();
    
    thirdImageNumberGenerator();

    fourthImageNumberGenerator();

    //if your current number equals your number you are trying to reach. win function runs
    if(currentNumber === numberToReachTo){
      wins();
    }
    //if your current number equals your number you are trying to reach. lose function runs
    if(currentNumber > numberToReachTo){
      lose();
    }
})

/*FUNCTIONS*/

//
function numbersGenerator(){
  //will get a  max number of 120 and at least 19
  numberToReachTo = Math.floor(Math.random() * Math.floor(101)+19);
  $("#numberToReach").html(numberToReachTo);
  $("#currentNumber").html(currentNumber);
 
}

function firstImageNumberGenerator(){
  //Image1 Number
  $("#image1Number").on('click',function(){

    if(firstNumber === null){
      firstNumber=Math.floor(Math.random() * Math.floor(11)+1);
    }

    if (numberToReachTo > currentNumber ){
    currentNumber = parseInt(currentNumber) +parseInt(firstNumber);
    $("#currentNumber").html(currentNumber);
    }

    if(numberToReachTo < currentNumber){
      lose();
      reset();
    }

    if(currentNumber === numberToReachTo){
      win();
      reset();
    }

  });
}

function secondImageNumberGenerator(){
  //Image2 Number
  $("#image2Number").on('click',function(){

    if(secondNumber === null){
      secondNumber=Math.floor(Math.random() * Math.floor(11)+1);
    }
    
    if (numberToReachTo > currentNumber ){
      currentNumber = parseInt(currentNumber) +parseInt(secondNumber);
      $("#currentNumber").html(currentNumber); 
    }

    if(numberToReachTo < currentNumber){
      lose();
      reset();
    }

    if(currentNumber === numberToReachTo){
      win();
      reset();
    }

  });
}

function thirdImageNumberGenerator(){
   //Image3 Number
   $("#image3Number").on('click',function(){

    if(thirdNumber === null){
      thirdNumber=Math.floor(Math.random() * Math.floor(11)+1);
    }

    if (numberToReachTo > currentNumber ){
      currentNumber = parseInt(currentNumber) +parseInt(thirdNumber);
      $("#currentNumber").html(currentNumber);  
    }

    if(numberToReachTo < currentNumber){
      lose();
      reset();
    }

    if(currentNumber === numberToReachTo){
      win();
      reset();
    }

  });
}

function fourthImageNumberGenerator(){
    //Image4 Number
    $("#image4Number").on('click',function(){

      if(fourthNumber === null){
        fourthNumber=Math.floor(Math.random() * Math.floor(11)+1);
      }

      if (numberToReachTo > currentNumber ){
        currentNumber = parseInt(currentNumber) +parseInt(fourthNumber);
        $("#currentNumber").html(currentNumber); 
      }

      if(numberToReachTo < currentNumber){
        lose();
        reset();
      }
  
      if(currentNumber === numberToReachTo){
        win();
        reset();
      }

    });
}

function win(){
  wins= wins +1;
  $("#totalWins").html(wins); 
}

function lose(){
    losses = losses+ 1;
    $("#totalLosses").html(losses); 
}

//resetting game function will be inserted in win and lose functions
function reset(){
  firstNumber = null;
  secondNumber = null;
  thirdNumber = null;
  fourthNumber = null;
  currentNumber = 0;
  numberToReachTo = 0;
  numbersGenerator();
}







