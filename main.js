document.addEventListener('DOMContentLoaded', () => {
    const elemtosCarousel = document.querySelectorAll('.carousel');
    M.Carousel.init(elemtosCarousel,{
        duration: 1000
    });
})