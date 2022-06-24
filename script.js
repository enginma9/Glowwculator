let i=0;
let text = 'Glowwculator';
let typeContents = '';
let inputString = "";
let store = 0;
var M1 = 0;
var M2 = 0;
let previous = 0;
let operator = '';
const LEFT_2 = 37;
const UP_2 = 38;
const RIGHT_2 = 39;
const DOWN_2 = 40;
const LEFT_1 = 65;
const RIGHT_1 = 68;
const DOWN_1 = 83;
const UP_1 = 87;
const ShipInstruction = [UP_2,DOWN_2,LEFT_2,RIGHT_2,UP_1,DOWN_1,LEFT_1,RIGHT_1];

let add = (a,b) => a+b;
let subtract = (a,b) => a-b;
let multiply = (a,b) => a*b;
let divide = (a,b) => a/b;

let typeTarget = document.getElementById("title")
const inputArea = document.getElementById( "current" );
const operatorArea = document.getElementById( "operator" );
const previousArea = document.getElementById( "previous" );

// sets of 4 divs on each side
const superLefties = document.querySelectorAll('.left');
const superRighties = document.querySelectorAll('.right');

//
const numberButtons = document.querySelectorAll('[data-number]'); //Array.from( //
numberButtons.forEach( numBtn => numBtn.addEventListener( 'click', function(){ operate( Number(numBtn.id)+48, numBtn.id)} ));
const backspaceButton = document.getElementById("backspace");
backspaceButton.addEventListener( 'click', function(){ operate( 8 , 'Backspace' )} );
const plusButton = document.getElementById("plus");
plusButton.addEventListener( 'click', function(){ operate( 107 , '+' )} );
const minusButton = document.getElementById("minus");
minusButton.addEventListener( 'click', function(){ operate( 109 , '-' )} );
const multiplyButton = document.getElementById("multiply");
multiplyButton.addEventListener( 'click', function(){ operate( 106 , '*' )} );
const divideButton = document.getElementById("divide");
divideButton.addEventListener( 'click', function(){ operate( 111 , '/' )} );
const clearButton = document.getElementById("clear");
clearButton.addEventListener( 'click', clrInput  );
const acButton = document.getElementById("AC");
acButton.addEventListener( 'click', function(){ operate( 27 , 'Escape' )} );
const periodButton = document.getElementById("period");
periodButton.addEventListener( 'click', function(){ operate( 110 , '.' )} );
const piButton = document.getElementById("pi");
piButton.addEventListener( 'click', function(){
  console.log("pi button");
  if(inputString==''){
    let pi = Math.PI;
    pi = pi.toFixed(7)
    inputString = pi.toString();
    inputArea.innerText = inputString;
  }

} );
const mcButton = document.getElementById("mem_clear");
mcButton.addEventListener( 'click', function(){
  console.log("mc button");
  m1 = 0;
  m2 = 0;
} );
const m1Button = document.getElementById("memory1");
m1Button.addEventListener( 'click', function(){
  console.log("M1 button")
  if(inputString!=''){
    M1 = Number(inputString);
  }else{
    inputString = M1.toString();
    inputArea.innerText = inputString;
  }
} );
const m2Button = document.getElementById("memory2");
m2Button.addEventListener( 'click', function(){
  console.log("M2 button")
  if(inputString!=''){
    M2 = Number(inputString);
  }else{
    inputString = M2.toString();
    inputArea.innerText = inputString;
  }
 } );
const eqButton = document.getElementById("equals");
eqButton.addEventListener( 'click', function(){ operate( 187 , '=' )} );
const pnButton = document.getElementById("positive_negative");
pnButton.addEventListener( 'click', function(){
  let x = (Number(inputString)*-1)
  inputString = x.toString();
  update();
} );

positive_negative




// Create divs to hold keypresses
const glowItem1 = document.createElement('div');
const glowItem2 = document.createElement('div');
glowItem1.setAttribute('id', 'keyNum');                        // does nothing helpful, but I wanted to do it.
glowItem2.setAttribute('id', 'keyLetter');
glowItem1.classList.add('Glow_Item');
glowItem2.classList.add('Glow_Item');
glowItem1.classList.add('superman');
glowItem2.classList.add('superman');
glowItem1.style.backgroundColor = 'black';
glowItem2.style.backgroundColor = 'black';
glowItem1.style.left="40vw";
glowItem1.style.top="40vh";
document.body.appendChild(glowItem1);
glowItem2.style.left="57vw";
glowItem2.style.top="40vh";
document.body.appendChild(glowItem2);

function error(){
  console.log('error');
  previousArea.innerText = 'wut?';
  superLefties.forEach( supe => supe.classList.add('r'));
  superRighties.forEach( supe => supe.classList.add('l'));
  setTimeout(removeError, 3000);
}
function removeError(){
  clrAll();
  superLefties.forEach( supe => supe.classList.remove('r'));
  superRighties.forEach( supe => supe.classList.remove('l'));
}

function keyOperation(e) {
  console.log(e.keyCode,typeof e.keyCode, e.key, typeof e.key);
  let keyCode = Number(e.keyCode);
  document.getElementById("keyNum").innerText = keyCode;
  document.getElementById("keyLetter").innerText = e.key;

  operate(keyCode, e.key);
}

let turn =0;
function typeWriter() {
  if ( i < text.length ) {
    typeContents = typeContents.concat(text[i]);
    typeTarget.innerText = typeContents;
    i++;
    turn += .25;
    glowItem1.style.webkitTransform = 'rotate(' + (turn*-1) + 'turn)';
    glowItem2.style.webkitTransform = 'rotate(' + turn + 'turn)';
    setTimeout(typeWriter, 75);
  }else{
    typeContents = '';
  }
}

function typeIn(x){
  if(inputString.length < 9){
    inputString = inputString.concat(x);
  }
  inputArea.innerText = inputString;
}
function clrInput(){
  inputString = "";
  inputArea.innerText = inputString;
}
function clrAll(){
  inputString = "";
  previous = '';
  operator = '';
  update();
}
function clrMem(){
  var M1 = 0;
  var M2 = 0;
}
function backone(){
  inputString = inputString.slice(0, -1);
  inputArea.innerText = inputString;
}
function reset(passed){
  previous = 0;
  inputString = passed.toString();
  operator = '';
  previousArea.innerText = '';
  operatorArea.innerText = operator;
  inputArea.innerText = inputString;
}
function update(){
  previousArea.innerText = previous.toString();
  operatorArea.innerText = operator;
  inputArea.innerText = inputString;
}

window.onload = typeWriter();
window.addEventListener('keydown', keyOperation);
//document.body.onkeyup = function(e){};

// dev at work:
function operate(code, value){
  if ( ShipInstruction.includes(code) ){
    zoom(code);
    return 0;
  }else if(code>=48 && code<=57){ // 0-9
    typeIn(value)
  }else if(code == 110 || code == 190 ){
    if(inputString.includes('.')){
      return;
    }else{typeIn('.');}
  }else if(code == 8){ // 'Backspace'
    backone();
  }else if(code == 27){ // 'ESCAPE'
    clrAll();
  }else if(code == 107 || code == 109 || code == 106 || code == 111 ){ // '+-*/'
    if(inputString == ''){
      return;
    }else if(previousArea.innerText == ''){
      previous = Number(inputString);
      operator = value;
      inputString = '';
      update();
    }
  }else if(code==187||code==13){                                       //end if operator  // = 187 equals 13 enter
    if(inputString != '' && operator != ''){ // not blank
      doMath(operator);
    }else{
      return;
    }
  }
}//end operate()

function doMath(operator){
  switch(operator){
    case '+':
      reset( add(previous, Number(inputString) ) );
      break;
    case '-':
      reset( subtract(previous, Number(inputString) ) );
      break;
    case '*':
      reset( multiply(previous, Number(inputString) ) );
      break;
    case '/':
      if(Number(inputString)==0){
        error();
      }else{
        reset( divide(previous, Number(inputString) ) );
      }
      break;
    default:
      clrAll();
      return;
  }//end switch
}//end doMath()

function forward(ship){
  console.log("forward ship", ship)
  //if facing toward edge (0 is straight down)
    //check to see if moving that direction would put past boundary
      // if so, move, if not, do nothing.
  //else move in direction of facing
}
function back(ship){
  console.log("back ship", ship)
}
function turnShip(ship, turns){
  if( turns == 1 ){
    console.log("turn ship", ship, "right")
  }else if(turns == -1){
    console.log("turn ship", ship, "left")
  }
}

function zoom(code){
  switch(code){
    case UP_1:
      forward(1);
      break;
    case DOWN_1:
      back(1);
      break;
    case LEFT_1:
      turnShip(1,-1);
      break;
    case RIGHT_1:
      turnShip(1,1);
      break;
    case UP_2:
      forward(2);
      break;
    case DOWN_2:
      back(2);
      break;
    case LEFT_2:
      turnShip(2,-1);
      break;
    case RIGHT_2:
      turnShip(2,1);
      break;
  }
}
