$(document).ready(function(){
    $('#hero-slider').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        items: 1,
        smartSpeed: 1000,
        navText: ['PREV', 'NEXT'],
        dots: false,
        responsive:{
            0:{
               
            }
        }
    })
    $('#project-slider').owlCarousel({
        loop:true,
        margin:24,
        nav:false,
        items: 1,
        smartSpeed: 2000,
        dots: true,
        responsive:{
            0:{
               
            },
            768:{
                items: 1
            },
            1140:{
                items: 2,
                center: true
            }
        }
    })
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        dots: true,
        items: 1,
        smartSpeed: 3000,
})
})