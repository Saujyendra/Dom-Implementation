// Select elements
const greeting = document.getElementById("greeting");
const nameInput = document.getElementById("nameInput");
const greetBtn = document.getElementById("greetBtn");
const boxes = document.querySelectorAll(".box");

// Greeting function
greetBtn.addEventListener("click", () => {
    const name = nameInput.value.trim();

    if (name === "") {
        alert("Enter your name first!");
        return;
    }

    greeting.innerText = `Hello, ${name} 👋`;
});

// Color change for boxes
boxes.forEach(box => {
    box.addEventListener("click", () => {
        const color = box.getAttribute("data-color");
        box.style.backgroundColor = color;
        box.style.color = "white";
    });
});