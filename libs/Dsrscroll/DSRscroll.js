/**
 * Created by Ing. Denys Sotolongo Ramos on 3/20/2017.
 */



 /*opciones*/

  sessionVisited = false;
  animatedScroll = false;
  btnTop = false;
  toolbarScrollCh = false;
  ChangeScrollPos = 4;

 function DSRscrollinit(selectLink, animScroll, buttonTop, toolbarScrollChange, ChangeScrollPosition)
 {
   if (selectLink==true)
   {
       sessionVisited = selectLink;
   }

     if (animScroll==true)
     {
         animatedScroll = animScroll;
     }

     if (buttonTop==true)
     {
         btnTop = buttonTop;
     }

     if (toolbarScrollChange==true)
     {
         toolbarScrollCh = toolbarScrollChange;
     }

     if (ChangeScrollPosition == null)
     {
         ChangeScrollPos = 4;
     }
     else
     {
        ChangeScrollPos = ChangeScrollPosition;
     }

 }

function menuActivoConScroll(e) {

    if(sessionVisited)
    {
        $("#link-box a").removeClass("active");
        var scrollPost = $(window).scrollTop();
        var activa = $(".seccion:last").attr("id");
        $(".seccion").each(function(indice)
        {
            var posTop = $(this).offset().top;
            var altura = $(this).height();
            if (scrollPost < posTop + altura) {
                activa = $(this).attr("id");
                return false;
            }
        });
        $("#link-box a[href='#" + activa + "']").addClass("active");
    }

   }



    $(window).scroll(menuActivoConScroll);
    $(document).ready(menuActivoConScroll);

    $(document).ready(function()
    {
        if(btnTop == true)
        {
            $('#linkTopSite').append('<a href="#top" class="gototop">Subir</a>');
        }

        if (animatedScroll==true)
        {
            InternalLink = $('a[href^="#"]');
            InternalLink.on('click',function(e)
            {
                e.preventDefault();
                var href = $(this).attr('href');
                position = $( href ).offset().top;
                $('html, body').animate({ scrollTop : position }, '1100', 'easeInOutExpo');
            });
        }

    });

    $(document).scroll(function()
    {

         if (toolbarScrollCh)
         {
             var pos = $(document).scrollTop();

             if (pos>ChangeScrollPos)
             {
                 $('.headerNav').addClass('scrolling-header');
             }
             else
             {
                 $('.headerNav').removeClass('scrolling-header');
             }
         }



    });



