document.addEventListener("DOMContentLoaded", () => {
    const boxes = document.querySelectorAll(".fade-box");

    boxes.forEach((box, index) => {
        setTimeout(() => {
            box.classList.add("fade-in");
        }, index * 300);
    });
});
