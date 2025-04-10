document.addEventListener('DOMContentLoaded', () => {
    addToEquation();
});

function addToEquation() {
    document.querySelectorAll('span').forEach(span => {
        span.addEventListener('click', (event) => {
            const clickedId = event.target.id;
            console.log(`Span with ID ${clickedId} was clicked.`);
        });
    });
}
