'use strict';

//Получение элементов со страницы:
const box = document.getElementById("box"),
    buttons = document.getElementsByTagName("button"),
    circles = document.getElementsByClassName("circle"),
    wrapper = document.querySelector(".wrapper"),
    hearts = wrapper.querySelectorAll(".heart"),
    oneHeart = wrapper.querySelector(".heart");

// box.style.backgroundColor = "blue";
// box.style.width = "500px";

box.style.cssText = "background-color: blue; width: 500px"

buttons[1].style.borderRadius = "100%";

circles[0].style.backgroundColor = "red";

// for(let i=0; i<hearts.length; i++){
//     hearts[i].style.backgroundColor = "blue";
// }

hearts.forEach(item => {
    item.style.backgroundColor = "blue";
})

const div = document.createElement("div");
// const text = document.createTextNode("SAAALAAAM");

div.classList.add("black");

wrapper.append(div); 
// wrapper.appendChild(div);   Ekside var:
// wrapper.prepend(div);

// hearts[0].before(div);
// wrapper.insertBefore(div, hearts[1]); Ekside var:
// hearts[0].after(div);

// circles[0].remove();
// wrapper.removeChild();

// hearts[0].replaceWith(circles[0]);
// wrapper.replaceChild(circles[0], hearts[0]);

div.innerHTML = "<h1>Hello World</h1>";
// div.textContent = "<h1>Hello World</h1>"; teq yazanda bug ola biler user nese daxil edende

div.insertAdjacentHTML("afterbegin", '<h2>Hello</h2>');