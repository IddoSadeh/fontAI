## **Text Manipulator**

### **Overview**
Text Manipulator is a dynamic web app that allows users to manipulate and animate text with various styles and animations. The app provides options to adjust text size, scaling, rotation, color, and background, along with several animation effects, including a whimsical "Love" animation that transforms the entire scene.

---

### **Features**
- **Dynamic Text Manipulation:**
  - Adjust font size, rotation, scaling (X and Y), and color.
  - Change the background color of the canvas.

- **Animation Types:**
  - **None**: Static text manipulation only.
  - **Rotate**: Rotates the text in a continuous loop.
  - **Bounce**: Adds a bouncing effect to the text.
  - **Scale**: Enlarges and shrinks the text rhythmically.
  - **Love**: Pulsates the text like a heartbeat, changes the font, colors, and adds floating heart animations.

- **Toggle Animation:** Turn animations on or off at any time.

---

### **Live Demo**
Try the app live on GitHub Pages:  
[Text Manipulator](https://your-github-username.github.io/your-repository-name)

---

### **Technologies Used**
- **HTML**: Structure and layout of the app.
- **CSS**: Styling, including the floating heart animations.
- **JavaScript**: Functionality, including user interactions and animations.
- **GSAP (GreenSock Animation Platform)**: Smooth and robust animations.
- **Google Fonts**: Aesthetic fonts for animations (e.g., "Dancing Script").

---

### **How to Use**
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/your-repository-name.git
   cd your-repository-name
   ```
2. Open the `index.html` file in your browser.

3. Interact with the controls:
   - Enter your custom text in the text area.
   - Adjust font size, scaling, rotation, and color using sliders and color pickers.
   - Choose an animation type from the dropdown and toggle animation on/off.

4. For the **Love Animation**:
   - Select "Love" from the animation dropdown.
   - Toggle the animation checkbox to experience the pulsating text and floating hearts.

---

### **Folder Structure**
```
/project
├── index.html          # Main HTML file
├── style.css           # Styling for the app
├── script.js           # JavaScript functionality
```

---

### **Dependencies**
- **GSAP**: A CDN is used for animations. No installation is required.
  ```html
  <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
  ```
- **Google Fonts**: The font "Dancing Script" is used for the Love animation.

---

### **Customization**
- Add new animation types by modifying the `applyAnimation` function in `script.js`.
- Change styles in `style.css` to update the look and feel of the app.

---

### **License**
This project is licensed under the MIT License. You are free to use, modify, and distribute it.

---

### **Acknowledgements**
- [GSAP Documentation](https://greensock.com/docs/) for animation guidance.
- [Google Fonts](https://fonts.google.com/) for the playful font used in the Love animation.

---

Feel free to report issues or contribute to the project by submitting a pull request.