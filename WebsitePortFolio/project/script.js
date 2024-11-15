document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');

    // Function to update icon based on theme
    const updateIcon = () => {
        themeToggle.textContent = document.body.classList.contains('dark-theme') ? '☀️' : '🌙';
    };

    // Toggle dark theme and icon on button click
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
        localStorage.setItem('theme', document.body.classList.contains('dark-theme') ? 'dark' : 'light');
        updateIcon();
    });

    // Load saved theme on page load
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-theme');
    }
    updateIcon(); // Set initial icon based on theme
});