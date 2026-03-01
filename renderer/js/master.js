document.addEventListener("DOMContentLoaded", async() => {
    const container = document.getElementById("navigation");

    const response = await fetch("components/navbar.html");
    const result = await response.text();

    container.innerHTML = result;
});

function loadPage(page) {
    fetch(`renderer/${page}.html`)
    .then(res => res.text())
    .then(html => {
        document.getElementById("content").innerHTML = html;
    })
}