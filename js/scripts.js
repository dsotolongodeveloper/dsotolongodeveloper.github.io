/*
collapse header*/

screenHeight = $(window).height();
$('.content').css('top',screenHeight);
var avatarBoxHeight = $('#avatar-box').height();
var paddTop = (screenHeight / 2) - (avatarBoxHeight/2)-50;
$('#avatar-box').css('padding-top',paddTop);




$(document).ready(function()
{
    var paralax = new Jarallax();
    paralax.addAnimation('header',[{progress:'0%', opacity:'1'},{progress:'80%', opacity:'0.1'}]);
    paralax.addAnimation('#avatar-box',[{progress:'0%', margin:'0% auto'},{progress:'100%', margin:'-22% auto'}]);


    $(function () {

        var filterList = {

            init: function () {

                // MixItUp plugin
                // http://mixitup.io
                $('#portfoliolist').mixItUp({
                    selectors: {
                        target: '.portfolio',
                        filter: '.filter'
                    },
                    load: {
                        filter: '.desing, .maqueta, .libreria, .web, .codigos'
                    }
                });

            }

        };

        // Run the show!
        filterList.init();


    });
	
	
	/*REDES SOCIALES*/

	/*END REDES SOCIALES*/

});

$(document).on('scroll',function(){

    var posY = $(document).scrollTop();

    if (posY >= screenHeight)
    {
        $("#logoBox").removeClass('hide-logo');
        $("#logoBox").addClass('show-logo');
        $("#contact-box").removeClass('hidden');

    }

    else
    {
        $("#logoBox").removeClass('show-logo');
        $("#logoBox").addClass('hide-logo');
        $("#contact-box").addClass('hidden');

    }


});
