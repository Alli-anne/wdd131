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