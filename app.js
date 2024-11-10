//clock    
//Variable
const hourHand = document.getElementById('hour');
const minuteHand = document.getElementById('minute');
const secondHand= document.getElementById('second');




//function clock
function setTime() {

const currentDate = new Date();
const secondRatio = currentDate.getSeconds() / 60;
const minuteRatio = (secondRatio + currentDate.getMinutes()) / 60;
const hourdRatio = (minuteRatio + currentDate.getHours()) / 12;

wareegSamee(secondHand, secondRatio);
wareegSamee(minuteHand, minuteRatio);
wareegSamee(hourHand, hourdRatio);
}


function wareegSamee(element, rotationRation){
    element.style.setProperty('--wareeg', rotationRation *360);
}
setTime();
setInterval(setTime, 100)



//Buttons
//variables
const bntOne = document.getElementById('button1');
const bntTwo= document.getElementById('button2');
const bntThree = document.getElementById('button3');
const bntFour = document.getElementById('button4');
 const clock = document.querySelector('.clock')
 const button = document.querySelectorAll('button');


 // change node list to on array-->
 const buttonsAray = Array.from(button)

 const colors = ['#fad90','#f19292','#edf0f2','#ffe100']
console.log(colors);

// EventListeners
buttonsAray[0].addEventListener('click', changeToOrange);
buttonsAray[1].addEventListener('click', changeToRed);
buttonsAray[2].addEventListener('click', changeToGrey);
buttonsAray[3].addEventListener('click', changeToYellow);

function changeToOrange(){
    clock.style.background = colors[0];
}

function changeToRed(){
    clock.style.background = colors[1];
}

function changeToGrey(){
    clock.style.background = colors[2];
}

function changeToYellow(){
    clock.style.background = colors[3];
}



// functions