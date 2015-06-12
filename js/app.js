
var main = function () {
    //scrollto for anchors
    $('a[href^="#"]').click(function(e) {
    // Prevent the jump and the #hash from appearing on the address bar
        e.preventDefault();
    // Scroll the window, stop any previous animation, stop on user manual scroll
        $(window).stop(true).scrollTo(this.hash, {duration:1000, interrupt:true});
    });
    $('a[href="#test"]').click(function() {
        $.scrollTo({target : "100px"});
    });
};
$(document).ready(function(){
    $window = $(window);
    //Captura cada elemento section com o data-type "background"
    $('section[data-type="background"]').each(function(){
        var $scroll = $(this);   
            //Captura o evento scroll do navegador e modifica o backgroundPosition de acordo com seu deslocamento.            
            $(window).scroll(function() {
                var yPos = -($window.scrollTop() / $scroll.data('speed')); 
                var coords = '50% '+ yPos + 'px';
                $scroll.css({ backgroundPosition: coords });    
            });
   });  
});
$(document).ready(main);
$(document).ready($('.carousel').carousel(
));
