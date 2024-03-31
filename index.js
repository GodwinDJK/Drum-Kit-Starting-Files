

//document.querySelector(".drum").addEventListener("click", handleClick);
/*
const buttons = document.querySelectorAll("button");

buttons.forEach(function(button) {
    button.addEventListener("click", handleClick)
})

function handleClick() {
    alert("I got clicked")
}

*/


const buttons = document.querySelectorAll("button");

buttons.forEach(function(button) {
    button.addEventListener("click", handleClick)
})

function handleClick() {
    var buttonInnerHTML = this.innerHTML;

    caseOfEvent(buttonInnerHTML);

    animationForTheButtons(buttonInnerHTML);
}


document.addEventListener("keypress", function (event) {

    caseOfEvent(event.key);

    animationForTheButtons(event.key)
    
})

function caseOfEvent(letter) {
    
    switch (letter) {
        case "w":
            var audio = new Audio('./sounds/tom-1.mp3')
            audio.play();
            break;
        case "a":
            var audio = new Audio('./sounds/tom-2.mp3')
            audio.play();
            break;
        case "s":
            var audio = new Audio('./sounds/tom-3.mp3')
            audio.play();
            break;
        case "d":
            var audio = new Audio('./sounds/tom-2.mp3')
            audio.play();
            break;
        case "j":
            var audio = new Audio('./sounds/snare.mp3')
            audio.play();
            break;
        case "k":
            var audio = new Audio('./sounds/crash.mp3')
            audio.play();
            break;
        case "l":
            var audio = new Audio('./sounds/kick-bass.mp3')
            audio.play();
        default:
            break;
    }

}

function animationForTheButtons(buttonPressed) {
    var currentButton = document.querySelector("." + buttonPressed);

    currentButton.classList.add("pressed")

    setTimeout(function () {
        currentButton.classList.remove("pressed");
    }, 100)
}