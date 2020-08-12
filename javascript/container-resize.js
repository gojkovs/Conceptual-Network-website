$(window).on('resize', function() {
    var win = $(this);
    if (win.width() <= 992) {
        $('.container-resize').addClass('container');
        $('.container-resize').removeClass('large-container');
    }
    else {
        $('.container-resize').removeClass('container');
        $('.container-resize').addClass('large-container');
    }
}).trigger('resize');