// Select all elements with the class 'circle'
const circles = document.querySelectorAll('.circle');

circles.forEach(elem => {
    const dots = elem.getAttribute("data-dots");  // Number of total dots
    const marked = elem.getAttribute("data-percent");  // Percentage to be marked
    const percent = Math.floor(dots * marked / 100);  // Calculate the number of marked dots
    let points = "";  // Initialize points string to hold the HTML for each dot
    const rotate = 360 / dots;  // Calculate rotation per dot

    // Loop to create the dots based on the "dots" attribute
    for (let i = 0; i < dots; i++) {
        points += `<div class="points" style="--i:${i}; --rot:${rotate}deg"></div>`;
    }

    // Set the generated HTML points to the element's content
    elem.innerHTML = points;

    // Select all 'points' inside the current circle
    const pointsMarked = elem.querySelectorAll('.points');
    
    // Add the 'marked' class to the percentage of points specified
    for (let i = 0; i < percent; i++) {
        pointsMarked[i].classList.add('marked');
    }
});
