const showMoreWork = () => {
    const finishedWorkList = document.querySelectorAll('[data-js-finished-work]');
    const showMoreBtn = document.querySelector('[data-js-more-work-btn]');

    if (!finishedWorkList || !showMoreBtn) {
        console.error('Finished work list or show more button not found.');
        return;
    }

    finishedWorkList.forEach(work => {
        work.classList.add('is-hidden');
        console.log(work);
    });

    let first5Works = Array.from(finishedWorkList).slice(0, 5);
    first5Works.forEach(work => {
        work.classList.remove('is-hidden');
    });

    showMoreBtn.addEventListener('click', () => {
        finishedWorkList.forEach(work => {
            work.classList.remove('is-hidden');
        });
    });
};

document.addEventListener('DOMContentLoaded', function () {
    showMoreWork();
});

export { showMoreWork };
