for (let i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        let clickedButton = this.innerHTML;
        animator(clickedButton);
        makeSound(clickedButton);
    })
}

function makeSound(key){
    switch (key) {
        case "a":
            let tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "s":
            let tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "d":
            let tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "f":
            let tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            let snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "k":
            let crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "l":
            let kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
        default:
            console.log("invalid key");
            break;
    }
}

document.addEventListener("keydown",function (event){
    animator(event.key);
    makeSound(event.key);
})

function animator(key){
let button =  document.querySelector("."+key);
button.classList.add("pressed");
setTimeout(function (){
    button.classList.remove("pressed");
},100)
}