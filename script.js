let parentDiv= document.getElementById('buttonGrid')
let letters= 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

let letterArray = letters.split('')  //EMPTY STRING AS THE DELIMITER

letterArray.forEach((letter) => {
    let button = document.createElement('button')
    button.textContent = letter

    parentDiv.appendChild(button)   // ADD BUTTONS TO THE DIV 

    button.addEventListener('click',(event) =>{       
        // console.log("Button Clicked")
        // console.log(event.target.innerText)
        let pressedLetter = event.target.innerText
        // let audioPath= `sounds/${event.target.innerText}.wav`
        // let audioPath =""

        let audio = new Audio("sounds/"+pressedLetter+ ".wav")
        audio.play()    // Method 
    }) 


})
// - --------------------------------------------------------------------------------
document.addEventListener('keypress',(event) => {
    // console.log("Key Is Presses ")
    let pressedLetter = event.key.toUpperCase();
    let audio = new Audio("sounds/"+pressedLetter+ ".wav");
    audio.play();

    

    // console.log(event.key.toUpperCase())
})
