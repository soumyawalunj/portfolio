AOS.init({
    duration: 1000,
    once: false,
    offset: 120,
});

// Typing Effect

const words = [
    "Aspiring Software Engineer ",
    "Web Developer ",
    "Python Programmer ",
    "Problem Solver "
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typing = document.querySelector(".typing");

function typeEffect(){

    const currentWord = words[wordIndex];

    if(isDeleting){

        typing.textContent = currentWord.substring(0,charIndex--);

    }

    else{

        typing.textContent = currentWord.substring(0,charIndex++);

    }

    let speed = isDeleting ? 60 : 120;

    if(!isDeleting && charIndex === currentWord.length){

        speed = 1500;

        isDeleting = true;

    }

    else if(isDeleting && charIndex === 0){

        isDeleting = false;

        wordIndex++;

        if(wordIndex === words.length){

            wordIndex = 0;

        }

    }

    setTimeout(typeEffect,speed);

}

typeEffect();