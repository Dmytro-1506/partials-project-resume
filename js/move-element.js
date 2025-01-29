import anime from "animejs";

function moveElement() {
    // Target the ".box" element and animate it
    anime({
      targets: '.photo',         // Element(s) to animate
      translateX: 250,         // Move 250px horizontally
      rotate: '1turn',         // Rotate 360 degrees
      backgroundColor: '#FF6347', // Change background color to tomato
      duration: 2000,          // Animation duration in milliseconds
      easing: 'easeInOutQuad', // Easing function
    });
    
    // Add a button to trigger the animation
    document.getElementById('startAnimation').addEventListener('click', () => {
      anime({
        targets: '.text-box',
        translateY: [-50, 0],  // Move from -50px to original position
        opacity: [0, 1],       // Fade in
        duration: 1000,
        easing: 'easeOutQuad'
      });
    });
}

export default moveElement;
