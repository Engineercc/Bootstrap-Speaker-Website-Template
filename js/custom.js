$(document).ready(function () {
    window.sr = ScrollReveal();
    sr.reveal('.navbar', {
        duration: 2000,
        origin: 'top'
    });

    sr.reveal('.showcase-left', {
        duration: 2000,
        origin: 'top',
        distance: '300px'
    });

    sr.reveal('.showcase-right', {
        duration: 2000,
        origin: 'right',
        distance: '300px'
    });
    sr.reveal('.showcase-btn', {
        duration: 2000,
        delay: 1000,
        origin: 'bottom',
        distance: '300px'
    });

    sr.reveal('#testimonial div', {
        duration: 2000,
        origin: 'bottom',
        distance: '100px'
    });

    sr.reveal('.info-btn', {
        duration: 2000,
        origin: 'left',
        distance: '300px'
       
    });

    sr.reveal('.info-left', {
        duration: 2000,
        origin: 'left',
        distance: '300px',
        viewFactor: 0.2
    });

    sr.reveal('.info-right', {
        duration: 2000,
        origin: 'right',
        distance: '300px',
        viewFactor: 0.2
    });

    sr.reveal('.info-details', {
        duration: 2000,
        origin: 'left',
        distance: '300px',
        viewFactor: 0.2
    });

    sr.reveal('.info-features', {
        duration: 2000,
        origin: 'right',
        distance: '300px',
        viewFactor: 0.2
    });

    $('a[href*="#"]').on('click', function(e) {
        e.preventDefault()
      
        $('html, body').animate(
          {
            scrollTop: $($(this).attr('href')).offset().top,
          },
          500,
          'linear'
        )
      })

      $(function(){     
        $(".showcase-img").imagezoomsl( {
            magnifycursor: 'none',                   
            innerzoom: true,
            zoomrange: [2, 2],
            zoomstart: 3,
            magnifierborder: "none",
            scrollspeedanimate: 5,
            zoomspeedanimate: 7,
            loopspeedanimate: 2.5,  
            magnifierspeedanimate: 350         
        });     
      });

      
});