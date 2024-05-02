const themeSelctor = document.getElementById("themeSelector");

function changeTheme() {
    if (themeSelctor.value === "dark") {
        document.body.classList.add("dark");
        logo.src = 'byui-logo_white.png';
    }
    else {
        document.body.classList.remove("dark");
        logo.src = 'byui-logo_blue.webp';
    }
}

themeSelector.addEventListener('change', changeTheme);