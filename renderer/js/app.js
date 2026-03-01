document.addEventListener("DOMContentLoaded", async() => {
    await loadNavbar();
    loadPage("dashboard");
});

async function loadNavbar() {
    const container = document.getElementById("navigation");
    const response = await fetch("components/navbar.html");
    container.innerHTML = await response.text();
}

async function loadPage(page){
    const response = await fetch(`pages/${page}.html`);
    const html = await response.text();
    document.getElementById("content").innerHTML = html;
}

document.addEventListener("click", (event) => {
    const page = event.target.dataset.page;
    if(page) {
        loadPage(page);
    }
})