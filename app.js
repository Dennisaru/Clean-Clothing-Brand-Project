const start = document.querySelector(".start");
const preview = document.querySelector(".preview");
const allClothing = document.querySelector(".all-clothing");
const beginBtn = document.getElementById("clickMe");

const images = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa0Hl104jY2t_YoneHMrQDTkNU2fo8S97UQ_u9srSxZA&s=10",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRccB8HoQGX-S828rBlHJ16MKFdq7zZ_44ymMOj0gAdVQ&s=10",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVk6MDo73GdDifSP_VcAxSeI1r9mgB5y-hay_tV4PnKQ&s=10"
];

function createCard(image) {
    return `
        <div class="card">
            <a href="#">
                <img src="${image}" alt="Leyux streetwear clothing">
            </a>
        </div>
    `;
}

function loadPreview() {
    const previewCards = images
        .slice(0, 3)
        .map(image => createCard(image))
        .join("");

    preview.innerHTML = `
    <div class="brandHeader">
        <h1>Leyux</h1>
    </div>
        <div class="preview-container">
            ${previewCards}
        </div>

        <button id="seeMore" class="btn">
                    See more
                    <span></span>
        </button>
    `;

    const seeMoreBtn = document.getElementById("seeMore");

    seeMoreBtn.addEventListener("click", () => {
        preview.style.display = "none";
        allClothing.style.display = "block";
    });
}

beginBtn.addEventListener("click", () => {
    start.style.display = "none";
    preview.style.display = "block";

    loadPreview();
});