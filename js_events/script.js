const btn = document.querySelectorAll("button"),
    overlay = document.querySelector(".overlay");

// btn.onclick = function () {
//     alert("Click");
// }

// btn.onclick = function () {
//     alert("Second click");
// }

// btn.addEventListener('click', () => {
//     alert('Click');
// });

// let i = 0;
const deleteElement = (e) => {
    console.log(e.target);
    console.log(e.type);
    // i++;
    // if (i ==1) {
    //     btn.removeEventListener("click", deleteElement)
    // }
};

// btn.addEventListener('click', deleteElement);
// overlay.addEventListener('click', deleteElement);


btn.forEach(btn => {
    btn.addEventListener("click", deleteElement, {once: true});
})

const link = document.querySelector("a");

link.addEventListener("click", function(event){
    event.preventDefault();

    console.log(event.target);
})