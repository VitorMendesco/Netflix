const totalItems = 10;
(function includeItems() {
    const carousel = document.querySelector('.owl-carousel');
    const carouselPath = "assets/img/carousel/";
    for(let i = 1; i <= totalItems; i++) {
        let div = document.createElement('div');
        let img = document.createElement('img');
        div.classList.add('item');
        img.classList.add('item-carousel');
        img.src = `${carouselPath}mini${i}.jpg`;
        div.appendChild(img);
        carousel.appendChild(div);
    }
    setupOwl();
}());

function setupOwl() {
    let owl = $('.owl-carousel')
    owl.owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        dots:false,
        autoplay:true,
        autoplayTimeout:5000,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:4
            }
        }
    });
};