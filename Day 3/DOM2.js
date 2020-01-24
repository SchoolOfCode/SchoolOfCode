var changeTextbtn = document.getElementById("changeText");
changeTextbtn.addEventListener("click", changeText);

var toggleColor1 = document.getElementById("toggleColor");
toggleColor1.addEventListener("click", toggleColor);

//A function to change all of the text on the webpage.
function changeText() {
//Create a variable that selects all the elements by class name.
    var text = document.getElementsByClassName("page-text")
//Change the HTML collection into an array.
    text = Array.from(text)
//Create a for loop to select all of the bits of the new array.
for(var i = 0; i < text.length; i++) {
    text[i].innerText = "This our new text"
}
}

var isRed = true
function toggleColor() {
    var title = document.getElementById("title")
    if (!isRed) {
        title.classList.add("red")
    }
    else {
        title.classList.remove("red")
    }
isRed =!isRed
}

// function mouseEventHandler(event) {
    // var box = event.currentTarget;
    //console.log(event);

    //if(event.type === "mouseenter") {
    //  box.classList.add("animate");
//}
//if (event.type === 'mouseleave') {
//    box.classList.remove("animate");
}


    }
}

