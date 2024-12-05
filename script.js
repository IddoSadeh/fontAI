const textInput = document.getElementById('textInput');
const fontSize = document.getElementById('fontSize');
const rotate = document.getElementById('rotate');
const xScale = document.getElementById('xScale');
const yScale = document.getElementById('yScale');
const textColor = document.getElementById('textColor');
const backgroundColor = document.getElementById('backgroundColor');
const animationType = document.getElementById('animationType');
const animate = document.getElementById('animate');
const textDisplay = document.getElementById('textDisplay');
const preview = document.getElementById('preview');

let animationInstance;
let heartInterval;

const updateStyles = () => {
    textDisplay.textContent = textInput.value;
    textDisplay.style.fontSize = `${fontSize.value}px`;
    textDisplay.style.transform = `scale(${xScale.value}, ${yScale.value}) rotate(${rotate.value}deg)`;
    textDisplay.style.color = textColor.value;
    preview.style.background = backgroundColor.value;
};

const removeHearts = () => {
    clearInterval(heartInterval);
    document.querySelectorAll('.heart').forEach((heart) => heart.remove());
};

const applyAnimation = () => {
    if (animationInstance) gsap.killTweensOf(textDisplay);
    removeHearts();
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
            animationInstance = gsap.timeline({ repeat: -1, yoyo: true })
                .to(textDisplay, { scale: 1.4, duration: 0.5, ease: "power1.inOut" })
                .to(textDisplay, { scale: 1, duration: 0.5, ease: "power1.inOut" })
                .to(textDisplay, { y: -20, duration: 0.8, ease: "sine.inOut" });
            textDisplay.style.fontFamily = "'Dancing Script', cursive";
            textDisplay.style.color = "#ff69b4";
            gsap.to(preview, {
                backgroundColor: "rgba(255, 182, 193, 0.9)",
                duration: 2,
                ease: "power1.inOut",
                repeat: -1,
                yoyo: true
            });
            const createHeart = () => {
                const heart = document.createElement("div");
                heart.className = "heart";
                heart.style.left = `${Math.random() * 100}%`;
                heart.style.animationDuration = `${Math.random() * 3 + 2}s`;
                preview.appendChild(heart);
                setTimeout(() => preview.removeChild(heart), 5000);
            };
            heartInterval = setInterval(createHeart, 500);
        } else if (type === 'fear') {
            textDisplay.style.fontFamily = "'Creepster', cursive";
            textDisplay.style.color = "#ffffff";
            textDisplay.style.textShadow = "0px 0px 20px #ff0000";
            gsap.to(preview, {
                backgroundColor: "#000000",
                duration: 2,
                ease: "sine.inOut",
                repeat: -1,
                yoyo: true
            });
            const createStaticText = () => {
                const staticText = document.createElement("div");
                staticText.className = "static-text";
                staticText.textContent = "FEAR";
                staticText.style.left = `${Math.random() * 100}%`;
                staticText.style.top = `${Math.random() * 100}%`;
                preview.appendChild(staticText);
                setTimeout(() => preview.removeChild(staticText), 2000);
            };
            setInterval(createStaticText, 200);
            animationInstance = gsap.timeline({ repeat: -1 })
                .to(textDisplay, { scale: 1.5, duration: 0.3, ease: "power4.inOut" })
                .to(textDisplay, { scale: 1, duration: 0.3, ease: "power4.inOut" })
                .to(textDisplay, { rotation: Math.random() * 20 - 10, duration: 0.1, ease: "linear" })
                .to(textDisplay, { rotation: 0, duration: 0.1, ease: "linear" });
        }
    } else {
        gsap.killTweensOf(preview);
        textDisplay.style.fontFamily = "Arial, sans-serif";
        textDisplay.style.color = "#000000";
        preview.style.backgroundColor = "#ffffff";
        removeHearts();
    }
};

textInput.addEventListener('input', updateStyles);
fontSize.addEventListener('input', updateStyles);
rotate.addEventListener('input', updateStyles);
xScale.addEventListener('input', updateStyles);
yScale.addEventListener('input', updateStyles);
textColor.addEventListener('input', updateStyles);
backgroundColor.addEventListener('input', updateStyles);
animate.addEventListener('change', applyAnimation);
animationType.addEventListener('change', applyAnimation);

updateStyles();
