document.getElementById("btn1").addEventListener("click", function () {
    
    // Find all div elements that have the class "tutorial"
    const tutorialDivs = document.querySelectorAll("div.tutorial");

    // Change their background color to yellow
    tutorialDivs.forEach(function(div) {
        div.style.backgroundColor = "yellow";
    });

});