
let firstNumber = null;
let secondNumber = null;
let thirdNumber = null;
let fourthNumber = null;
let currentNumber =0;
let numberToReachTo = 0;
let wins=0;
let losses=0;

$(document).ready(function() {


    numberToReachToGenerator();

    firstImageNumberGenerator();

    secondImageNumberGenerator();
  
    thirdImageNumberGenerator();

    fourthImageNumberGenerator();
    
})

function numberToReachToGenerator(){
  //will get a  max number of 120 and at least 19
  numberToReachTo = Math.floor(Math.random() * Math.floor(101)+19);
  $("#numberToReach").html(numberToReachTo);
 
}

function firstImageNumberGenerator(){
  //Image1 Number
  $("#image1Number").on('click',function(){

    if(firstNumber === null){
      firstNumber=Math.floor(Math.random() * Math.floor(11)+1);
    }

    currentNumber = parseInt(currentNumber) +parseInt(firstNumber);
    $("#currentNumber").html(currentNumber); 

    win();
    lose();
  });
}

function secondImageNumberGenerator(){
  //Image2 Number
  $("#image2Number").on('click',function(){

    if(secondNumber === null){
      secondNumber=Math.floor(Math.random() * Math.floor(11)+1);
    }
    
    currentNumber = parseInt(currentNumber) +parseInt(secondNumber);
     $("#currentNumber").html(currentNumber); 

     win();
     lose();
  });
}

function thirdImageNumberGenerator(){
   //Image3 Number
   $("#image3Number").on('click',function(){

    if(thirdNumber === null){
      thirdNumber=Math.floor(Math.random() * Math.floor(11)+1);
    }

    currentNumber = parseInt(currentNumber) +parseInt(thirdNumber);
    $("#currentNumber").html(currentNumber);  
    
    win();
    lose();
  });
}

function fourthImageNumberGenerator(){
    //Image4 Number
    $("#image4Number").on('click',function(){

      if(fourthNumber === null){
        fourthNumber=Math.floor(Math.random() * Math.floor(11)+1);
      }

      currentNumber = parseInt(currentNumber) +parseInt(fourthNumber);
      $("#currentNumber").html(currentNumber); 

      win();
      lose();
    });
}

//WIN and LOSE will be included in each ImageNumberGenerating function
function win(){

  if(currentNumber === numberToReachTo){
    console.log("you won");
    wins++;
    reset();
  }
}

function lose(){

  if(currentNumber > numberToReachTo){
    console.log("you lost");
    losses++;
    reset();
    return;
  }
}

//resetting game function will be inserted in win and lose functions
function reset(){
  let firstNumber = null;
  let secondNumber = null;
  let thirdNumber = null;
  let fourthNumber = null;
  let currentNumber =null;
  let numberToReachTo = null;
  let wins=0;
  let losses=0;
  $("#currentNumber").html(currentNumber);
  $("#numberToReach").html(numberToReachTo);
  console.log(currentNumber);
  console.log(numberToReachTo);
  console.log(losses);
}







