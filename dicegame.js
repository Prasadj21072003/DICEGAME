var randomNumber = Math.floor((Math.random()*6 )) + 1;
var randomNumberImage = "dice"+ randomNumber +".png";
var randomImageSource = "dice images/"+randomNumberImage;
var source = document.querySelector("#img1");
var newSource = source.setAttribute("src",randomImageSource);





var randomNumber1 = Math.floor((Math.random()*6 )) + 1;
var randomNumberImage1 = "dice"+ randomNumber1 +".png";
var randomImageSource1 = "dice images/"+randomNumberImage1;
var source1 = document.querySelector("#img2");
var newSource1 = source1.setAttribute("src",randomImageSource1);

if (randomNumber>randomNumber1) {
    document.querySelector("h3").innerHTML="🚩PLAYER 1 WINS🚩";
    
} else if(randomNumber<randomNumber1) {
    document.querySelector("h3").innerHTML="🚩PLAYER 2 WINS🚩";
} else{
    document.querySelector("h3").innerHTML="DRAW";

}