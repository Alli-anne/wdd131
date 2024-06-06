function viewerTemplate(pic, alt) {
    return `<div class="viewer">
        <button class="close-viewer">X</button>
        <img src="${pic}" alt="${alt}">
    </div>`;
}

// Function to handle clicks on gallery images
function viewHandler(event) {
    const clickedElement = event.target;
    const srcArray = clickedElement.src.split("-");
    const newImageSrc = srcArray[0] + "-full.jpeg";
    const altText = clickedElement.alt;

    const htmlToInsert = viewerTemplate(newImageSrc, altText);
    document.body.insertAdjacentHTML("afterbegin", htmlToInsert);

    document.querySelector(".close-viewer").addEventListener("click", closeViewer);
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
    if (window.innerWidth > 700) {
        contentToHide.style.display = "block";
    } else {
        if (contentToHide.style.display !== 'none') {
            contentToHide.style.display = 'none';
    }
}
}
handleResize();
window.addEventListener("resize", handleResize);
// Event listener for the gallery images
const gallery = document.querySelector('.gallery');
gallery.addEventListener('click', viewHandler);

// Initial call and event listener for window resize



