document.addEventListener('DOMContentLoaded', () => {
    let carouselContainer = document.querySelector('.carousel-container')
    let dotList = document.getElementsByClassName('carousel-dot')
    let page = 1
    let prevPage = 1
    setInterval(() => {
        carouselContainer.style.marginLeft = page * -100 + '%'
        dotList[prevPage].classList.remove('active')
        dotList[page].classList.add('active')
        prevPage = page
        if (page == 2) {
            page = 0
        } else {
            page++
        }
    }, 2000);
})