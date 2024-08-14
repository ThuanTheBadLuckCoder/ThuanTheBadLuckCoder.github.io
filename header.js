// header.js
document.addEventListener("DOMContentLoaded", function() {
    fetch('header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header-container').innerHTML = data;
        });
});


document.addEventListener("DOMContentLoaded", function() {
    fetch('leftNavi.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('left-navbar').innerHTML = data;
        });
});


// Get the button, popup div, and overlay
const button = document.getElementById("popupButton");
const popup = document.getElementById("popupDiv");
const overlay = document.getElementById("overlay");
const close = document.querySelector(".popup .close");

// Show the popup and overlay when the button is clicked
button.addEventListener("click", function() {
    popup.style.display = "block";
    overlay.style.display = "block";
});

// Hide the popup and overlay when the close button is clicked
close.addEventListener("click", function() {
    popup.style.display = "none";
    overlay.style.display = "none";
});

// Hide the popup and overlay when clicking outside the popup
overlay.addEventListener("click", function() {
    popup.style.display = "none";
    overlay.style.display = "none";
});

function goBack() {
    if (document.referrer) {
        // If there is a previous page, navigate to it
        window.history.back();
    } else {
        // If no referrer is available, navigate to a default page (optional)
        window.location.href = 'https://thuanthebadluckcoder.github.io/';
    }
}
