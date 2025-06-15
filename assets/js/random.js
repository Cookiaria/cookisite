let headersData = [];
let previousIndex = -1; // Initialize with an invalid index
const randomHeaderElement = document.getElementById('randomHeader');

fetch('/assets/randomstrings.json')
    .then(response => response.json())
    .then(data => {
        headersData = data.headers;
        randomHeader();
    });

function randomHeader() {
    if (headersData.length > 0) {
        let randomIndex;
        do {
            randomIndex = Math.floor(Math.random() * headersData.length);
        } while (randomIndex === previousIndex && headersData.length > 1); // Ensure we don't get stuck in a loop if there's only one header
        
        previousIndex = randomIndex;
        randomHeaderElement.innerHTML = headersData[randomIndex];
    }
}