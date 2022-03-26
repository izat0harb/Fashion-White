let goToBottom = document.querySelector(".goto-bottom");

goToBottom.addEventListener("click", function(e) {
    window.scrollTo({
        top: 617,
        let: 0,
        behavior: "smooth"

    });

});





let navigationBar = document.querySelector(".navbar");
let buttonTop = document.querySelector(".btn-top");
let imgsRelated = document.querySelectorAll(".product");
let TopBrands = document.getElementById("Top-Brands");
window.onscroll = function() {
    if (window.scrollY >= 400) {
        buttonTop.style = "transition: .5s all;opacity:1;bottom:0"
        navigationBar.style = "transition: .5s all ease-in-out"
        navigationBar.classList.replace("top--100", "top-0")
    } else {
        buttonTop.style = "transition: .5s all;opacity:0;bottom:-50%";
        navigationBar.style = "transition: .5s all ease-in-out;";
        navigationBar.classList.replace("top-0", "top--100")
    }
    if (window.scrollY >= 2812) {

        imgsRelated.forEach(ele => {
            ele.classList.replace("opacity-0", "opacity-100");
            ele.style = "transition: 4s all ease-in-out;";
        });

    }
    if (window.scrollY >= 4548) {
       
    }

}
buttonTop.addEventListener("click", function(e) {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    });
});