console.log('Javascript is running!');

/* 
this is a JS block comment
the let statement creates a variable - a chunk of computer memory that can hold references to data that you want to save. we're storing a reference to an element on the page with this line - we're telling Javascript to look for the element with the ID we specify inside of the round brackets (the image tag with the ID of bitmapGraphic)

document refers to the index.html page; querrySelector is how JS uses CSS to select elements on the page (called a method)
*/

// step 1 - select the elements that you want the user to interact with.
let bitmapGraphic = document.querySelector("#bitmapGraphic");

//step 3 - what happens when events are triggered?
function logID() {
    console.log(this.id);
}


//step 2 - how do you want the user to interact with the element?

bitmapGraphic.addEventListener('click', logID);

let vectorGraphic = document.querySelector("#vectorGraphic");

function logID() {
    console.log(this.id);
}

vectorGraphic.addEventListener('click', logID);