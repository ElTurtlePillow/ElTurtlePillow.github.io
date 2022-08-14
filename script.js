document.addEventListener("mousemove", (e) => {
    let clientX = e.clientX - 1000;
    let clientY = e.clientY - 1000;
    document.querySelectorAll(".item").forEach((item) => {
        let movement = item.getAttribute("data");
        let x = (clientX * movement) / 250;
        let y = (clientY * movement) / 250;
        item.style.transform = `translate(${x}px, ${y}px)`;
    });
});

setTimeout(() => {
    document.getElementById("lodr").classList.add("uped");
}, 1200)

