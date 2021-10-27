$(document).ready(function(){
    // Navbar-menu-Active-Class Add
    $("ul.menu li.menu-item").click(function(){
        $(this).addClass('active').siblings().removeClass('active');
    });

    /********Scroll-bar-Down-smothly*************/

            // $('#menus a[href^="#"]').click(function(e){
            //     e.preventDefault();
            //     var target = this.hash;
            //     $('html, body').animate({
            //     scrollTop: $(target).offset().top -75
            //     },3000);
            // });

            // /***********Scsroll-bar---Up****/
            // $(".top-Scroll").click(function(){
            //     $("html, body").animate({
            //     scrollTop:0
            //     },1000);

            // });

            // $('.top-Scroll').hide();

            // $(window).scroll(function(){
            //     var ourWindow = $(window).scrollTop();

            //     if(ourWindow<500){
            //     $('.top-Scroll').fadeOut(2000);
            //     } else {
            //     $('.top-Scroll').fadeIn(2000);
            //     }

            //     /***Navbar-fixed-Start Here***/
            //     if(ourWindow>0){
            //     $('body').addClass('fixed');
            //     } else {
            //     $('body').removeClass('fixed');
            //     }
            // });
/////////////////////////NAVBAR MENU ACTIVE JS END

        //toggle menu/navbar Scripts
        $('.menu-btn').click(function(){
            $('.nav-menu .menu ').toggleClass("active");
            $('.nav-menu i ').toggleClass("active");
        });
                   // Owl Coursel Js
                $('#slider-owl-carousel').owlCarousel({
                    loop: true,
                    nav: false,
                    dots:true,
                    autoplay: true,
                    autoplayTimeout: 6000,
                    animateOut: 'fadeOut',
                    animateIn: 'fadeIn',
                    item: 1,
                    responsive: {
                        0: {
                            items: 1
                        },
                        768: {
                            items: 1
                        },
                        1000: {
                            items: 1
                        }
                    }
                });

                $('.owl-carousel').owlCarousel({
                    loop:true,
                    margin:10,
                    autoplay: true,
                    nav:true,
                    responsive:{
                        0:{
                            items:1
                        },
                        600:{
                            items:3
                        },
                        1000:{
                            items:5
                        }
                    }
                })

        const root = document.documentElement;
        const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue("--marquee-elements-displayed");
        const marqueeContent = document.querySelector("ul.marquee-content");

        root.style.setProperty("--marquee-elements", marqueeContent.children.length);

        for(let i=0; i<marqueeElementsDisplayed; i++) {
        marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));

  // Scrolling Js End
}
})
