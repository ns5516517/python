$('#slider').owlCarousel({
    loop:true,
    margin:80,
    nav:true,
    dots:true,
    autoplay:true,
    dotsData:function(currentItem, item) {
        return $(item).attr('data-dot');
      },
    // autoplay:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:2
        }
    }
})

console.log('dzc')