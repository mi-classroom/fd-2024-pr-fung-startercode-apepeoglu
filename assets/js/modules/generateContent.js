const workJSON = 'http://localhost:8080/work.json';
let workList = null;
let currentData = null;

document.addEventListener('DOMContentLoaded', function () {
    initworkList();
});

function initworkList() {
    workList = document.querySelector('[data-js-finished-works]');

    if (!workList) {
        console.error('Element with data-js-finished-works not found.');
        return;
    }

    fetch(workJSON)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json()
        })

        .then(data => {
            console.log('Success:', data);
            currentData = data;
            generateMarkupForworkList(data);
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

function generateMarkupForworkList(data) {
    workList.innerHTML = '';
    workList.innerHTML = data.map(work => {
        return `
                    <li class="topic-item" data-js-finished-work="">
          <a href="${work.url}">
            <h3>${work.title}</h3>
            <p>${work.date}</p>
            <ul class="keywords">
              ${work.keywords}
            </ul>
          </a>
        </li>
        `;
    }).join('');
}

export { initworkList };