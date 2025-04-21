"use strict";

let keyboardImage;

window.onload = () => {
    keyboardImage = document.getElementById("mainImg");

    keyboardImage.addEventListener("mouseover", () => {
        keyboardImage.src = `../images/keyboard%20pictures/zoom75topview.jpg`;
    });

    keyboardImage.addEventListener("mouseout",() => {
        keyboardImage.src= "../images/keyboard%20pictures/zoom75side.jpg";
    });
}