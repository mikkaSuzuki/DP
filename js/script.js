$(document).ready(function(){
    
    $('.navbar-toggler').click(function() {
        $('navbar-toggler').toggleCLass('change')
    })
    
    $(window).scroll(function() {
        let position = $(this).scrollTop();
        
        if (position >= 718) {
            $('.navbar').addClass('navbar-background');
            $('.navbar').addClass('fixed-top');
        }else{
            $('.navbar').removeClass('navbar-background');
            $('.navbar').removeClass('fixed-top');
        }
    })
    
    $('.nav-item a, #go, #back-to-top').click(function (link){
        link.preventDefault();
        
        let target = $(this).attr('href');
        
        $('html, body').animate({
            scrollTop: $(target).offset().top - 25
        }, 1000);
    })
    
//$("#header, .info").ripples({
//      dropRadius: 0,
//     perturbance: 0,
//  })
    
    
//$('.parent-container').magnificPopup({
  // delegate: 'a',
    
    //type: 'image',
    
   // gallery: {
       // enabled: true
        
   // }
    

//}); 
    
    
    
    
    

    
    
    
    
    
});