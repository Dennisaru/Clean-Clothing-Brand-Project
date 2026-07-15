const start = document.querySelector(".start");
const preview = document.querySelector(".preview");
const allClothing = document.querySelector(".all-clothing");
const beginBtn = document.getElementById("clickMe");
const cursor = document.querySelector(".cursor");
const cards = document.querySelectorAll(".card");

const images = [
    "https://images.pexels.com/photos/29226106/pexels-photo-29226106.jpeg",
    "https://images.pexels.com/photos/29668943/pexels-photo-29668943.jpeg",
    "https://images.pexels.com/photos/19177046/pexels-photo-19177046.jpeg",
    "https://images.pexels.com/photos/11308714/pexels-photo-11308714.jpeg"
];


document.addEventListener("mousemove", (event) => {

    const { width, height } = cursor.getBoundingClientRect()

    cursor.style.left = `${event.clientX - width / 2}px`
    cursor.style.top = `${event.clientY - height / 2}px`
})



function createCard(image) {
    return `
        <div class="card">
            <a href="#">
                <img src="${image}" alt="Auren streetwear clothing">
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
        <h1>Auren</h1>
        <h3>-Summer Collection-</h3>
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

cards.forEach(card => {
    card.addEventListener("mouseenter", () => {
        cursor.classList.add("grow");
    });

    card.addEventListener("mouseleave", () => {
        cursor.classList.remove("grow");
    });
});

beginBtn.addEventListener("click", () => {
    start.style.display = "none";
    preview.style.display = "block";

    loadPreview();
});