const container = document.querySelector('.container');
const dotCount = Math.floor(window.innerWidth / 24.8) * Math.floor(window.innerHeight / 30);  // Calculating number of dots

// Function to generate dots in a grid
function generateDots() {
  for (let i = 0; i < dotCount; i++) {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    container.appendChild(dot);
    
    // Animate each dot randomly
    animateDot(dot);
  }
}
// Function to animate dots with random enlargements
function animateDot(dot) {
  setInterval(() => {
    const randomScale = Math.random() * 3 + 0.5;  // Random scale between 0.5 and 2.5
    dot.style.transform = `scale(${randomScale})`;
  }, Math.random() * 1500 + 500);  // Random interval between 0.5s and 2.5s
}
// Initialize dots
generateDots();
