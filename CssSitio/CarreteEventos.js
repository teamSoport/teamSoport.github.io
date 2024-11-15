var owl=$('.owl-carousel');
owl.owlCarousel({
    loop:true,
    margin:10,
    nav:true,
      lazyLoad:true,
    animateOut:true,
    autoplay:false,
    autoplayTimeout:3000,
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
        },
         1024:{
            items:3
        }
    }
}).on('shown.bs.tab')


