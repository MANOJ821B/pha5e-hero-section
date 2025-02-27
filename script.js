document.addEventListener("mousemove", function (event) {
    let x = (window.innerWidth / 2 - event.clientX) / 50;
    let y = (window.innerHeight / 2 - event.clientY) / 50;

    document.querySelector(".hero").style.transform = `translate(${x}px, ${y}px)`;
});
