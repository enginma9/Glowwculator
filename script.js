let i=0;
let text = 'Glowwculator';
let typeContents = '';
let mousePressed = false;
let neon = 1;
var inputlist = "";
var store = "";
var M1 = 0;
var M2 = 0;

const add = (a,b) => a + b;
const subtract = (a,b) => a - b;
const multiply = (a,b) => a * b;
const divide = (a,b) => a / b;

var typeTarget = document.getElementById("title")
const inputArea = document.getElementById( "txt1" );
const operator = document.getElementById( "operator" );
const resultArea = document.getElementById( "txt2" );

// >
const superLefties = document.querySelectorAll('.left');
const superRighties = document.querySelectorAll('.right');
//const supers = Array.from(document.querySelectorAll('.superman'));
// <

const buttons = Array.from(document.querySelectorAll('button'));
buttons.forEach(button => button.addEventListener( 'click', error ));
buttons.forEach(button => button.addEventListener('transitionend', removeTransition));

function removeTransition(e) {
  if (e.propertyName !== 'transform') return;
  e.target.classList.remove('bounce');
}

function keyOperation(e) {
  console.log(e.keyCode, e.key);
  let keyCode = Number(e.keyCode);
  document.getElementById("keyNum").innerText = keyCode;
  document.getElementById("keyLetter").innerText = e.key;
  //if(keyCode == wasd || keyCode == udlr){move the spaceships;
  //}else if(keyCode == top numbers || keyCode == keypad numbers){send e.key to type_in;
  //}else if(keyCode == "."){
    //if(inputArea contains "." already){return}else{type_in(".")}
  //}else if(keyCode == +-*/){
    //if(operatorArea contains +-*/ already){
      //if(inputArea != empty){operate(value);
      //}else{
        //operatorVariable = +-*/;
        //resultArea=inputArea;
        //inputArea='';
        //}
    //}else{operatorVariable = +-*/;}
  //}else if(keyCode == "=" || keyCode == "Enter"){
    //if( )
}
  //if it is an operator, +-*/, see if there is already an operator,
  //if so, check to see if there is a value to work with in the inputArea, if not, replace the operator, if so, send to operate, else put operator in the operator variable, and in id("operator")
  //if it is =, or the enter key, see if there is an operator, if not do nothing, if so, send to operate
}

//logic is fine, but some of this would be duplicated between mouse and keyboard input, so I could save on some code duplication by passing some of this to shared functions


function typeWriter() {
  if ( i < text.length ) {
    typeContents = typeContents.concat(text[i]);
    typeTarget.innerText = typeContents;
    i++;
    setTimeout(typeWriter, 75);
  }else{
    typeContents = '';
  }
}

function type_in(x){
  if(inputlist.length < 9){
    inputlist = inputlist.concat(x);
  }
  inputArea.innerText = inputlist;
}

function clrinput(){
  inputlist = "";
  inputArea.innerText = inputlist;
}

function backone(){
  inputlist = inputlist.slice(0, -1);
  inputArea.innerText = inputlist;
}

function operate(value1, operator, value2){
  // on "=" or a second operator selection, see if there is a number in the bottom box, an operator has been selected, and which, and run corresponding add()/subtract()/etc...

}


window.onload = typeWriter();
window.addEventListener('keydown', keyOperation);

// dev at work:

// when getting x/0, put message in top box, saying "wut?", and turn all supers inward
// add listener for transitions on these, to change them back.
// css = .r/l{transform: rotate(±.25turn);}

function error(){
  console.log('error');
  resultArea.innerText = 'wut?'
  superLefties.forEach( supe => supe.classList.add('r'))
  superRighties.forEach( supe => supe.classList.add('l'))
}

function removeError(){
  resultArea.innerText = ''
  superLefties.forEach( supe => supe.classList.remove('r'));
  superRighties.forEach( supe => supe.classList.remove('l'));
}

/* */
const glowItem1 = document.createElement('div');
glowItem1.setAttribute('id', 'keyNum');                        // does nothing helpful, but I wanted to do it.
glowItem1.classList.add('Glow_Item');
glowItem1.classList.add('superman');
glowItem1.style.backgroundColor = 'black';
glowItem1.style.left="40vw";
glowItem1.style.top="15vh";
document.body.appendChild(glowItem1);
//transform: rotate(0turn);
// listen for wasd/up-down-left-right to move each absolute positioned
const glowItem2 = document.createElement('div');
glowItem2.setAttribute('id', 'keyLetter');                        // does nothing helpful, but I wanted to do it.
glowItem2.classList.add('Glow_Item');
glowItem2.classList.add('superman');
glowItem2.style.backgroundColor = 'black';
glowItem2.style.left="55vw";
glowItem2.style.top="15vh";
document.body.appendChild(glowItem2);
