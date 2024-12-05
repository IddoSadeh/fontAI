// DOM Elements
const textInput = document.getElementById('textInput');
const fontSize = document.getElementById('fontSize');
const rotate = document.getElementById('rotate');
const xScale = document.getElementById('xScale');
const yScale = document.getElementById('yScale');
const textColor = document.getElementById('textColor');
const backgroundColor = document.getElementById('backgroundColor');
const animate = document.getElementById('animate');
const animationType = document.getElementById('animationType');
const textDisplay = document.getElementById('textDisplay');
const preview = document.getElementById('preview');

// Helper to update static styles
const updateStyles = () => {
    textDisplay.textContent = textInput.value;
    textDisplay.style.fontSize = `${fontSize.value}px`;
    textDisplay.style.transform = `scale(${xScale.value}, ${yScale.value}) rotate(${rotate.value}deg)`;
    textDisplay.style.color = textColor.value;
    preview.style.background = backgroundColor.value;
};

// Manage animations
let animationInstance;
const applyAnimation = () => {
    if (animationInstance) gsap.killTweensOf(textDisplay); // Stop previous animation

    const type = animationType.value;
    if (animate.checked && type !== 'none') {
        if (type === 'rotate') {
            animationInstance = gsap.to(textDisplay, {
                rotation: 360,
                repeat: -1,
                duration: 5,
                ease: "linear"
            });
        } else if (type === 'bounce') {
            animationInstance = gsap.to(textDisplay, {
                y: -50,
                repeat: -1,
                yoyo: true,
                duration: 0.5,
                ease: "power1.inOut"
            });
        } else if (type === 'scale') {
            animationInstance = gsap.to(textDisplay, {
                scale: 2,
                repeat: -1,
                yoyo: true,
                duration: 1,
                ease: "sine.inOut"
            });
        }
    }
};

// Event Listeners
textInput.addEventListener('input', updateStyles);
fontSize.addEventListener('input', updateStyles);
rotate.addEventListener('input', updateStyles);
xScale.addEventListener('input', updateStyles);
yScale.addEventListener('input', updateStyles);
textColor.addEventListener('input', updateStyles);
backgroundColor.addEventListener('input', updateStyles);
animate.addEventListener('change', applyAnimation);
animationType.addEventListener('change', applyAnimation);

// Initialize styles
updateStyles();
