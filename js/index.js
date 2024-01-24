const sections = document.querySelectorAll('.section')


const showSections = elements => {
    elements.forEach((element) => {
        if (element.isIntersecting) {
            element.target.classList.remove('hidden')
            element.target.classList.add('show')
        }
    })
}

const observer = new IntersectionObserver(showSections, {
    threshold: 0.60
}
)

const containers = document.querySelectorAll(".container")

sections.forEach(section => {
    observer.observe(section);
})
