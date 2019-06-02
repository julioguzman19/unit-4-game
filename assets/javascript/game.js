
$(document).ready(function() {

    firstImageNumberGenerator()

    secondImageNumberGenerator()
  
    thirdImageNumberGenerator()

    fourthImageNumberGenerator()
})

function firstImageNumberGenerator(){
  //Image1 Number
  $("#image1Number").on('click',function(){
    let firstNumber=Math.floor(Math.random() * Math.floor(12));;
    $("#test").html(firstNumber); //populates 6 where test is the tag
  });
}

function secondImageNumberGenerator(){
  //Image2 Number
  $("#image2Number").on('click',function(){
    let secondNumber=Math.floor(Math.random() * Math.floor(12));;
    $("#test").html(secondNumber); //populates 6 where test is the tag
  });
}

function thirdImageNumberGenerator(){
   //Image3 Number
   $("#image3Number").on('click',function(){
    let thirdNumber=Math.floor(Math.random() * Math.floor(12));;
    $("#test").html(thirdNumber); //populates 6 where test is the tag
  });
}

function fourthImageNumberGenerator(){
    //Image4 Number
    $("#image4Number").on('click',function(){
      let fourthNumber=Math.floor(Math.random() * Math.floor(12));;
      $("#test").html(fourthNumber); //populates 6 where test is the tag
    });
}

function yourCurrentNumber(inputtedNumber){
  let currentNewNumber = currentNewNumber + inputtedNumber;
  console.log(currentNewnNumber);
}



