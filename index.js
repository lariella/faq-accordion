// Set EeventListeners for FAQ-Panel:
var panelHeading = document.querySelectorAll(".panel-heading");

// OnClick:
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

// Keyboard navigation:
document.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        var activeElement = document.activeElement;
        if (activeElement.classList.contains("panel-heading")) {
            
            var panelParagraph = activeElement.nextElementSibling;
            var panelIcon = activeElement.querySelector(".panel-icon");
    
            // Toggle Visibility-class:
            panelIcon.classList.toggle("visible");
            panelParagraph.classList.toggle("visible");
            activeElement.classList.toggle("visible");

        }
    }
})

