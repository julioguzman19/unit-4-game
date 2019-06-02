
let firstNumber = null;
let secondNumber = null;
let thirdNumber = null;
let fourthNumber = null;
let currentNumber =0;
let numberToReachTo = 0;

$(document).ready(function() {


    numberToReachToGenerator()

    firstImageNumberGenerator()

    secondImageNumberGenerator()
  
    thirdImageNumberGenerator()

    fourthImageNumberGenerator()


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
    });
}






