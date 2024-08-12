document.addEventListener('DOMContentLoaded', function() {
    fetch('Pages/test.html')
    .then(response => response.text())
    .then(html => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');
        const mainTemplate = doc.getElementById('test').content.cloneNode(true);
        document.getElementById('mainContent').appendChild(mainTemplate);
    })
    .catch(error => console.error('Error loading header template:', error));

});
