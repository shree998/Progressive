window.onload = () => {
  'use strict';

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker
             .register('./sw.js');
  }
}

var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

//To return the value input by the user
function inputLength() {
	return input.value.length;
}

//To create List Item
function createListElement() {
	var li = document.createElement("li");
	li.innerHTML = `<span class="strik">${input.value}</span>`;
	ul.appendChild(li);
	var but = document.createElement("button");
	var done = document.createElement("button");
	done.appendChild(document.createTextNode("Done"));
	done.classList.add("finish");
	li.appendChild(done);
      but.appendChild(document.createTextNode("Delete"));
	but.classList.add("delete");
            li.appendChild(but);
	input.value = "";
}

//To add List item after user clicks the Enter button
function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

//To add List item after user presses Enter Button from the keyboard
function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

//To strikethough the item if pressed "done" or call the remove() function
function strike(event)
{
	let par= event.target.parentElement;
	let child = par.firstChild;
	console.log('Par first child',child);
	if(event.target.className==="finish")
	{
			par.firstChild.classList.toggle("done");
	}
	else
	{
			remove(event);
	}
}

//To remove the list item
function remove(event)
{
	let remove = event.target.parentElement;
	remove.remove();
//	let sib = event.target.parentElement;
//	let rem = sib.previousSibling;
//	let r = event.target.parentNode;
//	console.log('PreviousSibling',sib);
//	console.log('Sib\'s PreviousSibling',rem);
//	console.log('Previous Element Sibling',event.target.previousElementSibling);
//	console.log('Parent Element of Delete',r);
//		ul.removeChild(rem);
}

//Event Listener for handling click
button.addEventListener("click", addListAfterClick);

//Event Listener for handling keypress
input.addEventListener("keypress", addListAfterKeypress);

//Event Listener for handling keypress on done button
ul.addEventListener("click", strike);