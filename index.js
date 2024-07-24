var accordionPanel = document.querySelectorAll(".accordion-panel");
// Set EeventListener for FAQ-Panel:
var panelHeading = document.querySelectorAll(".panel-heading");
var panelButton = document.querySelectorAll("accordion-panel > a");

for (var i = 0; i < panelHeading.length; i++) {

    panelHeading[i].addEventListener("click", function() {
        var panelParagraph = this.nextElementSibling;
        var panelIcon = this.querySelector(".panel-icon");

        // Toogle Visibility-class:
        panelIcon.classList.toggle("visible");
        panelParagraph.classList.toggle("visible");
        this.classList.toggle("visible");

    });
}

// for (var i = 0; i < panelButton.length; i++) {

//     panelButton[i].addEventListener("click", function() {
//         var panelParagraph = this.nextElementSibling;
//         var panelIcon = this.querySelector(".panel-icon");

//         // Toogle Visibility-class:
//         panelIcon.classList.toggle("visible");
//         panelParagraph.classList.toggle("visible");
//         this.classList.toggle("visible");

//     });
// }

// document.addEventListener("keydown", function(event) {
//     if (event.key === "Enter") {
//         var activeElement = document.activeElement;
//         var panelParagraph = activeElement.nextElementSibling();
//         var panelIcon = activeElement.querySelector(".panel-icon");
//         toggleState(panelParagraph, panelIcon);
//     }
// })


// function toggleState(panelAnchor) {
//     var panelParagraph = panelAnchor.nextElementSibling();
//     var panelIcon = panelAnchor.querySelector(".panel-icon");
//     // Toogle Visibility-class:
//     panelIcon.classList.toggle("visible");
//     panelParagraph.classList.toggle("visible");
//     panelHeading.classList.toggle("visible");
// }