var owl=$('#idowl1');
owl.owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    autoHeight : true,
         lazyLoad:true,
    animateOut:true,
    responsive:{
        0:{
            items:1

        },
        600:{
            items:2
        },
        1000:{
            items:3
        },
         1024:{
            items:3
        },
        1440:{
            items:4
        }


    }
}).on('shown.bs.tab')


owl.on('mousewheel', '.owl-stage', function (e) {
    if (e.deltaY>0) {
        owl.trigger('next.owl');
    } else {
        owl.trigger('prev.owl');
    }
    e.preventDefault();
});


var owlc=$('#idowl2');
owlc.owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    autoHeight : true,
         lazyLoad:true,
    animateOut:true,
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
}).on('shown.bs.tab')


owl.on('mousewheel', '.owl-stage', function (e) {
    if (e.deltaY>0) {
        owl.trigger('next.owl');
    } else {
        owl.trigger('prev.owl');
    }
    e.preventDefault();
});

