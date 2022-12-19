$('body').prepend('<header>');
$('body').append('<footer>');

$('header').load('./inc.html .header', head);
$('footer').load('./inc.html footer > div'); 

let idx = localStorage.idx || 0;  

function head(){
    $('header ul li').eq(idx).find('a').addClass('active');
    //$('header ul li').eq(idx).find('a').css('color','pink');
    test();
    console.log(idx);

    $('header ul li').click(function(){
        let idx = $(this).index();
        localStorage.idx = idx;
    })

    

}

function test(){
    if(window.location.href.split('/')[3] == 'index.html'){
        $('header ul li').eq(idx).find('a').removeClass('active');
    }
}

let didScroll;
let lastScrollTop = 0;
let delta = 5;
let navbarHeight = $('header').outerHeight();

$(window).scroll(function(event){
    didScroll = true;
});

function stop(){
    console.log("stopped")
    clearInterval(interval)
}
stop();

let interval = setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    let st = $(this).scrollTop();
    
    if(Math.abs(lastScrollTop - st) <= delta)
        return;
    
    if (st > lastScrollTop && st > navbarHeight){
        $('.header').addClass('nav-up');
    } else {
        if(st + $(window).height() < $(document).height()) {
            $('.header').removeClass('nav-up')
        }
    }
    lastScrollTop = st;
}
