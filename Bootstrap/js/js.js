let exclusivebrandsRow = document.querySelector("#exclusivebrands .row");
let exclusivebrands = document.querySelector("#exclusivebrands");
let arrw = document.querySelector("#exclusivebrands .arrw");;
let figure = document.querySelectorAll("figure");
let buttonTop = document.querySelector(".btn-top");
window.onscroll = function() {
    if (window.scrollY >= exclusivebrands.offsetTop - 100) {
        arrw.style =
            " transform: translatex(100%); transition: 1.5s all;-webkit-clip-path: polygon(100% 0%, 75% 50%, 100% 100%, 25% 100%, 0% 50%, 25% 0%);clip-path: polygon(100% 0%, 75% 50%, 100% 100%, 25% 100%, 0% 50%, 25% 0%);"
        for (let i = 0; i < figure.length; i++) {
            figure[i].style = `transition: .${i+1}s all linear;opacity: 1;`
        }
    }
    if (window.scrollY >= 400) {
        buttonTop.style = "transition: .5s all;opacity:1;bottom:0"
    } else {
        buttonTop.style = "transition: .5s all;opacity:0;bottom:-50%"
    }

}
buttonTop.addEventListener("click", function(e) {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    });
})