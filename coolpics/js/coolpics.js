// Function to generate the modal template
function viewerTemplate(pic, alt) {
    return `<div class="viewer">
        <button class="close-viewer">X</button>
        <img src="${pic}" alt="${alt}">
    </div>`;
}

// Function to handle clicks on gallery images
function viewHandler(event) {
    const clickedElement = event.target;

    if (clickedElement.tagName === 'IMG') {
        const srcArray = clickedElement.src.split("-");
        // Correctly construct the new image src
        const newImageSrc = `${srcArray[0]}-full.jpeg`;
        const altText = clickedElement.alt;
        console.log(srcArray);
        const htmlToInsert = viewerTemplate(newImageSrc, altText);

        // Insert the HTML to display the full-size image
        const newElement = document.createElement('div');
        newElement.innerHTML = htmlToInsert;
        document.body.prepend(newElement);

        // Add the event listener for the close button
        document.querySelector(".close-viewer").addEventListener("click", closeViewer);
    }
}

// Function to close the modal
function closeViewer() {
    const viewer = document.querySelector(".viewer");
    if (viewer) {
        viewer.remove();
    }
}

// Event listener for the menu button
const menuButton = document.querySelector(".menu-button");
const hiddenContent = document.querySelector("#contentToHide");

menuButton.addEventListener("click", () => {
    if (hiddenContent.style.display === "none") {
        hiddenContent.style.display = "block";
    } else {
        hiddenContent.style.display = "none";
    }
});

// Function to handle resize event
function handleResize() {
    if (window.innerWidth > 768) {
        hiddenContent.style.display = "block";
    } else {
        if (hiddenContent.style.display !== 'none') {
            hiddenContent.style.display = 'none';
        }
    }
}

handleResize();
window.addEventListener("resize", handleResize);

// Event listener for the gallery images
const gallery = document.querySelector('.gallery');
gallery.addEventListener('click', viewHandler);



