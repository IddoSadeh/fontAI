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
        } else if (type === 'love') {
            // Heartbeat effect with sway
            animationInstance = gsap.timeline({ repeat: -1, yoyo: true })
                .to(textDisplay, { scale: 1.4, duration: 0.5, ease: "power1.inOut" }) // Expand
                .to(textDisplay, { scale: 1, duration: 0.5, ease: "power1.inOut" })   // Contract
                .to(textDisplay, { y: -20, duration: 0.8, ease: "sine.inOut" });      // Gentle sway

            // Change text font and color
            textDisplay.style.fontFamily = "'Dancing Script', cursive";
            textDisplay.style.color = "#ff69b4";

            // Scene-wide animation
            gsap.to(preview, {
                backgroundColor: "rgba(255, 182, 193, 0.9)", // Pink background
                duration: 2,
                ease: "power1.inOut",
                repeat: -1,
                yoyo: true
            });

            // Add floating hearts effect
            const createHeart = () => {
                const heart = document.createElement("div");
                heart.className = "heart";
                heart.style.left = `${Math.random() * 100}%`;
                heart.style.animationDuration = `${Math.random() * 3 + 2}s`;
                preview.appendChild(heart);

                // Remove hearts after animation
                setTimeout(() => preview.removeChild(heart), 5000);
            };

            // Generate hearts at intervals
            const heartInterval = setInterval(createHeart, 500);
            animationInstance.eventCallback("onComplete", () => clearInterval(heartInterval));
        }
    } else {
        // Reset styles and clear animations if animation is toggled off
        gsap.killTweensOf(preview);
        textDisplay.style.fontFamily = "Arial, sans-serif";
        textDisplay.style.color = "#000";
        preview.style.backgroundColor = "#ffffff";
        document.querySelectorAll(".heart").forEach(heart => heart.remove());
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
