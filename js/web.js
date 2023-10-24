document.addEventListener("DOMContentLoaded", function () {
    const gif = document.getElementById("gif");
    const button = document.getElementById("next-page-button");
    
    gif.addEventListener("load", function() {
        setTimeout(function() {
            button.style.display = "block";
        }, gif.duration * 1000);
    });
});
