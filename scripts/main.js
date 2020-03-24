var page = 0
var intervalCarousel

document.addEventListener('DOMContentLoaded', () => {
    let dotList = document.getElementsByClassName('carousel-dot')

    for (let index = 0; index < dotList.length; index++) {
        dotList[index].setAttribute('onclick', "changePageDot(" + index + ")")
    }

    setIntervalCarousel()
})

function changePage() {
    let carouselContainer = document.querySelector('.carousel-container')
    let dotList = document.getElementsByClassName('carousel-dot')
    let activeDot = document.querySelector('div.active')
    carouselContainer.style.marginLeft = this.page * -100 + '%'
    if (activeDot != undefined) {
        activeDot.classList.remove('active')
    }
    dotList[this.page].classList.add('active')
    if (this.page == 2) {
        this.page = 0
    } else {
        this.page++
    }
}

function changePageDot(page) {
    this.page = page
    changePage()
    resetInterval()
}

function setIntervalCarousel() {
    this.intervalCarousel = setInterval(changePage, 5000);
}

function resetInterval() {
    clearInterval(this.intervalCarousel)
    setIntervalCarousel()
}