// Select all paragraph elements
const paragraphs = document.querySelectorAll("p");

// Loop through each paragraph
paragraphs.forEach(function(p) {

    // When mouse enters
    p.addEventListener("mouseenter", function() {
        p.style.fontWeight = "bold";
        p.style.color = "blue";
    });

    // When mouse leaves
    p.addEventListener("mouseleave", function() {
        p.style.fontWeight = "normal";
        p.style.color = "black";
    });

});