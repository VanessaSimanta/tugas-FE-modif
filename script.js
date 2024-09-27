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

const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
          if(entry.isIntersecting) {
            entry.target.classList.add("in-view");
            entry.target.classList.remove("not-in-view");
          }
          else {
            entry.target.classList.remove("in-view");
            entry.target.classList.add("not-in-view");
          }
        }
      )},
    {
      rootMargin: '0px',
      threshold: [0, 0.1, 1],
    }
  )

  const tag = document.querySelectorAll("div, h3, h2");
  tag.forEach((tag) => {
    observer.observe(tag)
  })


