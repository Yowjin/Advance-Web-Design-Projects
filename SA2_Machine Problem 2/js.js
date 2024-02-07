function animateBox(day, color) {
    const box = document.getElementById('animatedBox');

    // Set the color of the box
    box.style.backgroundColor = color;

    // Fall from the top
    box.style.transform = 'translateY(-100vh)';

    // After a short delay, reset position
    setTimeout(function () {
        box.style.transform = 'translateY(0)';
    }, 1000); // I-adjust ang delay kung kinakailangan

    // Log the selected day and color
    console.log('Selected day: ' + day + ', Color: ' + color);
}
