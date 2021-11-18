window.onload = function () {
    let images = document.querySelectorAll("img");

    for (let image of images) {
        image.addEventListener("click", displayAlt);
    }

   
}