$('#navbartoggler').on('show.bs.collapse', function() {
    $('body').css('overflow-y', 'hidden');
    $('.navbar-toggler span').toggleClass('closed');
    $('.header-top').toggleClass('header-top-opened');
    $('.navbar').toggleClass('navbar-opened');
    $('.logo-white').toggleClass('logo-white-opened');
    $('.logo-blue').toggleClass('logo-blue-closed');
    $('.navbar-collapse').toggleClass('navbar-collapse-opened');
    $('.dropdown-menu').toggleClass('dropdown-menu-opened');
    $('.nav-link').toggleClass('nav-link-opened');
    $('.icon-bar').toggleClass('icon-bar-opened');
});

$('#navbartoggler').on('hidden.bs.collapse', function() {
    $('body').css('overflow-y', 'auto');
    $('.navbar-toggler span').toggleClass('closed');
    $('.header-top').toggleClass('header-top-opened');
    $('.navbar').toggleClass('navbar-opened');
    $('.logo-white').toggleClass('logo-white-opened');
    $('.logo-blue').toggleClass('logo-blue-closed');
    $('.navbar-collapse').toggleClass('navbar-collapse-opened');
    $('.dropdown-menu').toggleClass('dropdown-menu-opened');
    $('.nav-link').toggleClass('nav-link-opened');
    $('.icon-bar').toggleClass('icon-bar-opened');
});

if ($('.nav-item a').hasClass('active')) {
    $('.active').next().children('.dropdown-menu').show();
    $('.active').children('.caret').addClass('fa-minus');
} else {
    $('.active').next().children('.dropdown-menu').hide();
};

$('.nav-item a').on('click', function() {
    $(this).find('.caret').toggleClass('fa-minus', 'fa-plus');
    $('.caret').not($(this).find('.caret')).each(function(){
        $(this).removeClass('fa-minus');
        $(this).addClass('fa-plus');
    });
});

$(window).on('resize', function() {
    var win = $(this);
    if (win.width() <= 992) {
        $('.white-blue-container-child').addClass('large-container');
        $('.white-blue-container-child').removeClass('container');
    }
    else {
        $('.white-blue-container-child').removeClass('large-container');
        $('.white-blue-container-child').addClass('container');
        $('body').css('overflow-y', 'auto');
    }
}).trigger('resize');