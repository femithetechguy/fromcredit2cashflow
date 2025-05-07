'use strict';

// Page Title Handler
const updatePageTitle = () => {
    const pageTitle = "FcTcF Group";
    document.title = pageTitle;
};

// Favicon Handler
const updateFavicon = () => {
    let link = document.querySelector("link[rel~='icon']");
    if (!link) {
        link = document.createElement('link');
        link.rel = 'icon';
        document.head.appendChild(link);
    }
    link.href = './assets/images/favicon.png'; // Fix relative path
};

// Header Text Handler
const updateHeaderText = () => {
    const headerElement = document.getElementById("headerTextLeft");
    if (!headerElement) {
        const newHeader = document.createElement('div'); // Use proper HTML element
        newHeader.id = 'headerTextLeft';
        newHeader.textContent = "FcTcF Group";
        document.body.insertBefore(newHeader, document.body.firstChild); // Better placement
    }
};

// Initialize all updates when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    updatePageTitle();
    updateFavicon();
    updateHeaderText();
});