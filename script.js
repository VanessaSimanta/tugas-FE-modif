let menuIcon = document.querySelector("#menu-icon");
let navBar = document.querySelector(".navbar");
let section = document.querySelectorAll("section");
let navLink = document.querySelectorAll("header nav a")

menuIcon.onclick = () => {
    menuIcon.classList.toggle("fa-times");
    navBar.classList.toggle("active");
}

window.onscroll = () => {
    section.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");
        if (top > offset && top < offset + height) {
            navLink.forEach(links => {
                links.classList.remove("active");
                document.querySelector("header nav a[href*=" + id + "]").classList.add("active");
            })
        }
    })
}
