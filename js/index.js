const showSections = elements => {
    elements.forEach((element) => {
        if (element.isIntersecting) {
            element.target.classList.add('show')
        }
    })
}

const observer = new IntersectionObserver(showSections, {
    threshold: 0.30
}
)

const sections = document.querySelectorAll(".section")

sections.forEach(section => {
    observer.observe(section);
})
