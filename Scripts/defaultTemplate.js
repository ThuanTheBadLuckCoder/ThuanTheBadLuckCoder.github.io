document.addEventListener('DOMContentLoaded', function() {
    fetch('Pages/defaultTemplate.html')
        .then(response => response.text())
        .then(html => {
            const parser = new DOMParser();
            const doc = parser.parseFromString(html, 'text/html');
            const defaultTemplate = doc.getElementById('defaultTemplate').content.cloneNode(true);
            document.getElementById('mainContainer').appendChild(defaultTemplate);
            
            loadComponents();
        })
        .catch(error => console.error('Error loading default template:', error));
    
    function loadComponents() {
        fetch('Component/leftNavi.html')
            .then(response => response.text())
            .then(html => {
                const parser = new DOMParser();
                const doc = parser.parseFromString(html, 'text/html');
                const leftNaviTemplate = doc.getElementById('leftNavi').content.cloneNode(true);
                document.getElementById('leftNavContainer').appendChild(leftNaviTemplate);
                addToggleListener();
            })
            .catch(error => console.error('Error loading leftNavi template:', error));

        fetch('Component/header.html')
            .then(response => response.text())
            .then(html => {
                const parser = new DOMParser();
                const doc = parser.parseFromString(html, 'text/html');
                const headerTemplate = doc.getElementById('header').content.cloneNode(true);
                document.getElementById('headerContainer').appendChild(headerTemplate);
                addInputInteractionListener()
            })
            .catch(error => console.error('Error loading header template:', error));

        fetch('Component/footer.html')
            .then(response => response.text())
            .then(html => {
                const parser = new DOMParser();
                const doc = parser.parseFromString(html, 'text/html');
                const footerTemplate = doc.getElementById('footer').content.cloneNode(true);
                document.getElementById('footerContainer').appendChild(footerTemplate);
            })
            .catch(error => console.error('Error loading footer template:', error));
    }

    function addToggleListener() {
        const toggleOnButton = document.getElementById('buttonCallLeftNavi');
        const toggleOffButton = document.getElementById('buttonTurnOffLeftNavi');
        const leftNaviContainer = document.getElementById('leftNaviContainer');
        const ContainerAsDefault = document.getElementById('ContainerAsDefault');

        toggleOnButton.addEventListener('click', function() {
            leftNaviContainer.classList.add('visible'); 
        });

        toggleOffButton.addEventListener('click', function() {
            leftNaviContainer.classList.remove('visible');
        });

        ContainerAsDefault.addEventListener('click', function() {
            leftNaviContainer.classList.remove('visible');
        }); 

        leftNaviContainer.addEventListener('scroll', function(event) {
            event.stopPropagation();
        });
        window.addEventListener('scroll', function(event) {
            if (!leftNaviContainer.contains(event.target)) {
                leftNaviContainer.classList.remove('visible');
            }
        });
    }

    function addInputInteractionListener() {
        const searchingInput = document.getElementById('searchingInput');
        const searchingContainer = document.getElementById('searchingContainer');
    
        searchingInput.addEventListener('focus', function() {
            searchingContainer.classList.add('focus');
        });
    
        searchingInput.addEventListener('blur', function() {
            searchingContainer.classList.remove('focus');
        });
    }
    
    
});
