function animateBox(day, color) {
    const box = document.getElementById('animatedBox');

    
    box.style.backgroundColor = color;

    
    box.style.transform = 'translateY(-100vh)';

    
    setTimeout(function () {
        box.style.transform = 'translateY(0)';
    }, 1000);

    
    console.log('Selected day: ' + day + ', Color: ' + color);
}
