
var main = function () {
    //scrollto for anchors
    $('a[href^="#"]').click(function(e) {
    // Prevent the jump and the #hash from appearing on the address bar
        e.preventDefault();
    // Scroll the window, stop any previous animation, stop on user manual scroll
        $(window).stop(true).scrollTo(this.hash, {duration:800, interrupt:true, easing : 'swing'});
    });
    $('a[href="#test"]').click(function() {
        $.scrollTo({target : "100px"});
    });
};

$(document).ready(main);
$(document).ready($('.carousel').carousel(
));


