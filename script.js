let i=0;
let text = 'Glowwculator';
let title = '';
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

const inputArea = document.getElementById( "txt1" );
const operator = document.getElementById( "operator" );
const resultArea = document.getElementById( "txt2" );

const buttons = Array.from(document.querySelectorAll('button'));
buttons.forEach(button => button.addEventListener( 'click', error ));
buttons.forEach(button => button.addEventListener('transitionend', removeTransition));

function removeTransition(e) {
  if (e.propertyName !== 'transform') return;
  e.target.classList.remove('bounce');
}

// >
const superLefties = document.querySelectorAll('.left');
const superRighties = document.querySelectorAll('.right');
//const supers = Array.from(document.querySelectorAll('.superman'));
// <

function type() {
  if ( i < text.length ) {
    title = title.concat(text[i]);
    document.getElementById("title").innerText = title;
    i++;
    setTimeout(type, 75);
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



window.onload = type();


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
glowItem1.setAttribute('id', 'glowItem1');                        // does nothing helpful, but I wanted to do it.
glowItem1.classList.add('Glow_Item');
glowItem1.classList.add('superman');
glowItem1.style.backgroundColor = 'black';
glowItem1.style.left="40vw";
glowItem1.style.top="15vh";
document.body.appendChild(glowItem1);
//transform: rotate(0turn);
// listen for wasd/up-down-left-right to move each absolute positioned
