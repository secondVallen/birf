document.querySelector("button").addEventListener("click", function() {
    document.querySelector("button").classList.add("invisible");
    document.querySelector("body").style.backgroundImage = "url('images/fivestar.jpeg')";
    setTimeout(function() {
        document.querySelector("body").style.backgroundImage = "none";
    }, 2000);
    document.querySelector("body").style.backgroundColor = "#3e3947";
    setTimeout(function() {
        document.querySelector(".text").classList.remove("invisible");
        document.querySelector(".character").classList.remove("invisible");
    }, 4000);
})