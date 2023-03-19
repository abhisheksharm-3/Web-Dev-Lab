var mydiv = document.getElementById("mydiv");
mydiv.addEventListener("mouseover", function () {
    mydiv.innerText="Can I help you?";
});
mydiv.addEventListener("mouseout", function () {
    mydiv.innerText="Hello World!";
});