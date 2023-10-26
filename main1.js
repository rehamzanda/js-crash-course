// gquery is a javascript library 
// quertSelector is used to select not only id from 
// html , also tags and classes

//Single element:
//console.log(document.getElementById('my-form'));
console.log(document.querySelector('h1'));
// it will grab the first h1 in my code
console.log(document.querySelector('.container'));

//Multiple element:

console.log(document.querySelectorAll('.item'));
//console.log(document.getElementsByClassName('item'));
//console.log(document.getElementsByTagName('li'));

const items = document.querySelectorAll('.item');

items.forEach(item => console.log(item));

//manipulating with list items:

//const ul = document.querySelector('.items');
//ul.firstElementChild.textContent='Hello';
//ul.children[1].innerText='Brad';
//ul.lastElementChild.innerHTML="<h1>Hello</h1>";

//ul.firstElementChild.remove();

//manipulating with btn:

//const btn = document.querySelector('.btn');
//btn.style.background='red';
//add an event while clicking on the btn:
//btn.addEventListener("the event", the function that you want to run when this event happend)
//btn.addEventListener('click', (e) =>{
    // call the method preventdefault to get red of the default actions
 /*   e.preventDefault();
    console.log(e); //take a look to the event object on the console
    console.log(e.target); // it gives me the btn which is the target of the event
    console.log(e.target.className);
    document.querySelector('#my-form').style.background='#ccc';//when you click the color of form will change
    //i can use a class I created in css and place it on other element by clicking on the btn
    document.querySelector('body').classList.add('bg-dark');
} );*/

//if you want to make the event when hovering the mouse you
//replacce click with mouseover
//and mouseout when you remove the mouse from the btn the changes will be active



// i want to add a user and put him in the list bellow:

const myForm= document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');


myForm.addEventListener('submit', onSubmit);

function onSubmit(e){
    e.preventDefault();
    if(nameInput.value === '' || emailInput.value === '' ){
        msg.classList.add('error');
        msg.innerHTML='Please enter all fields';
        setTimeout(() => msg.remove(), 3000);
    }else{
    const li= document.createElement('li');
    li.appendChild(document.createTextNode(`${nameInput.value}:${emailInput.value}`));
    userList.appendChild(li);

    //clear fields:
    nameInput.value='';
    emailInput.value='';
    }
}