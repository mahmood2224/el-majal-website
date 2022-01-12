function multiCarousel(){
    // $('#myCarousel').carousel({
    //     interval: false
    // })
    // $('#myCarouselServices').carousel({
    //     interval: false
    // })
    // $('#myCarouselClient').carousel({
    //     interval: 3000
    // })
    // $('.carousel .carouselItem').each(function() {
    //     var minPerSlide = 3;
    //     var next = $(this).next();
    //     if (!next.length) {
    //         next = $(this).siblings(':first');
    //     }
    //     next.children(':first-child').clone().appendTo($(this));
    
    //     for (var i = 0; i < minPerSlide; i++) {
    //         next = next.next();
    //         if (!next.length) {
    //             next = $(this).siblings(':first');
    //         }
    
    //         next.children(':first-child').clone().appendTo($(this));
    //     }
    // });
    
}
module.exports = {
    multiCarousel : multiCarousel,
}