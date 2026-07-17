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
const menuBtn=document.querySelector(".menu-btn");

const nav=document.querySelector("nav");

menuBtn.onclick=()=>{

nav.classList.toggle("active");

};
document.querySelectorAll("nav a").forEach(link=>{

link.addEventListener("click",()=>{

nav.classList.remove("active");

});

});
menuBtn.onclick = () => {

    nav.classList.toggle("active");

};

document.querySelectorAll("nav a").forEach(link => {

    link.addEventListener("click", () => {

        nav.classList.remove("active");

    });

});

// 👇 Paste here

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    const scrollPosition = window.scrollY + 150;

    sections.forEach(section => {

        if (
            scrollPosition >= section.offsetTop &&
            scrollPosition < section.offsetTop + section.offsetHeight
        ) {
            current = section.id;
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});
