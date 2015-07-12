
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


document.onscroll=function(){
    //var height = $(window).height()
bg=document.getElementById("bgsp");
var scroll = window.pageYOffset;
var off = bg.offsetTop;
var entryinviewport = bg.offsetTop - $(window).height();
var exitviewport = entryinviewport+2*$(window).height();
if (scroll >=  entryinviewport && scroll<= exitviewport) {
    var y = parseInt(bg.style.backgroundPositionY);
    var adefile = scroll - entryinviewport;
    var num = (y-adefile)*0.1+'px'
    //$("#bgsp").animate({'background-position-y' : num });
    bg.style.backgroundPositionY = num
}
}