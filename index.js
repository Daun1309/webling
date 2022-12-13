$('body').prepend('<header>');
$('body').append('<footer>');

$('header').load('./inc.html header', head);
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