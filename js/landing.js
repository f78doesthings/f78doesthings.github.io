const footer = document.querySelector("footer");
if (footer) {
    const lastUpdated = new Date("06/14/2024");
    footer.textContent = "Last updated: " + lastUpdated.toLocaleDateString();
}
