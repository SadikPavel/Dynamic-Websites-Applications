// Make sure the button is clicked
document.getElementById("button1").addEventListener("click", function () {

    // Find all <textarea> and <p> elements in the document
    const elements = document.querySelectorAll("textarea, p");

    // Set their border color to red
    elements.forEach(function(element) {
        element.style.border = "2px solid red";
    });

});

/*document.getElementById("btn1").addEventListener("click", function () {
    
    // Find all div elements that have the class "tutorial"
    const tutorialDivs = document.querySelectorAll("div.tutorial");

    // Change their background color to yellow
    tutorialDivs.forEach(function(div) {
        div.style.backgroundColor = "yellow";
    });

});*/
