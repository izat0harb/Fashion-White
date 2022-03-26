let buttonTop = document.querySelector(".btn-top");
let navigationBar = document.querySelector(".navbar");
window.onscroll = function() {
    if (window.scrollY >= 400) {
        buttonTop.style = "transition: .5s all;opacity:1;bottom:0";
        navigationBar.style = "transition: .5s all ease-in-out;";
        navigationBar.classList.add("bg-light");
        navigationBar.classList.replace("opacity-0", "opacity-100")
    } else {
        buttonTop.style = "transition: .5s all;opacity:0;bottom:-50%";
        navigationBar.style = "transition: .5s all ease-in-out;";
        navigationBar.classList.remove("bg-light");
        navigationBar.classList.replace("opacity-100", "opacity-0")
    }
}

buttonTop.addEventListener("click", function(e) {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    });
});