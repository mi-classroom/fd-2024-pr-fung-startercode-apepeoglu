const imgJSON = 'http://localhost:8080/works/works/n-pola/04-results/images/metadata.json';
let images = null;

document.addEventListener('DOMContentLoaded', function () {
    createImages();
});

function createImages() {
    images = document.querySelector('[data-js-finished-work-img]');

    if (!images) {
        console.error('Element with data-js-finished-work-img not found.');
        return;
    }

    fetch(imgJSON)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json()
        })

        .then(data => {
            generateImages(data);
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

function generateImages(data) {
    images.innerHTML = '';
    images.innerHTML = data.map(img => {
        return `
                    <li>
            <img src="${img.src}" alt="${img.metadata.title}">
                    </li>
        `;
    }).join('');
}

export { createImages };