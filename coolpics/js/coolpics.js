document.querySelector("#year").textContent = new Date().getFullYear();

const toggleButton = document.querySelector("#toggleButton");
const contentToHide = document.querySelector("#contentToHide");

toggleButton.addEventListener("click", () => {
    if (contentToHide.style.display === 'none') {
        contentToHide.style.display = 'block';
    } else {
        contentToHide.style.display = 'none';
    }
});

// Function to check screen size and show/hide element
function checkScreenSize() {
    if (window.innerWidth > 768) { // Change 768 to the desired screen width breakpoint
        contentToHide.style.display = 'block';
    } else {
        // Check if the navigation menu was previously hidden
        // If it was hidden, keep it hidden; otherwise, show it
        if (contentToHide.style.display !== 'none') {
            contentToHide.style.display = 'none';
        }
    }
}

// Call the function on page load
window.addEventListener('load', checkScreenSize);

// Call the function on window resize
window.addEventListener('resize', checkScreenSize);




