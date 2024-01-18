// -----------------menu-bars--------------

let menuButton = document.querySelector("#menuButton");
let aside = document.querySelector("aside");
let cursor1 = document.querySelector(".cursor1");
let cursor2 = document.querySelector(".cursor2");


menuButton.addEventListener("click", function () {
    menuButton.classList.toggle("fa-times");
    aside.classList.toggle("active");
});

window.onmousemove = (e) => {
    cursor1.style.top = e.pageY + "px";
    cursor1.style.left = e.pageX + "px";
    cursor2.style.top = e.pageY + "px";
    cursor2.style.left = e.pageX + "px";
}



