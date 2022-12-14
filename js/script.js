function handleToggle() {
    const btnClose = document.querySelector(".btn-close");
    const btnOpen = document.querySelector(".btn-open");
    const toggle = document.querySelector(".navbar-toggle");
    if (toggle.classList.value.includes("action-toggle")) {
        toggle.classList.remove("action-toggle");
        btnOpen.style.display = "none";
        btnClose.style.display = "block";
    } else {
        toggle.classList.add("action-toggle");
        btnOpen.style.display = "block";
        btnClose.style.display = "none";
    }
}

document.addEventListener("scroll", () => {
    let top = document.querySelector(".btn-click-top");
    if (window.scrollY > 400) {
        top.style.display = "block";
    } else {
        top.style.display = "none";
    }
});
