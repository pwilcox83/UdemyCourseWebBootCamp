
var selector1 = document.getElementById("colourChanger").addEventListener("click", function () {
    var body = document.getElementById("body");
    if (body.style.backgroundColor === "white") {
        body.style.backgroundColor = "purple";
    } else {
        body.style.backgroundColor = "white";
    }

});