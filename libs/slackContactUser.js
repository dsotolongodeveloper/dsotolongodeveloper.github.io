/**
 * Created by denys on 3/27/2017.
 */


$(document).ready(function(){


    var url = "https://hooks.slack.com/services/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";

    $("#bt-send-contact").on("click",function(e)
    {
        e.preventDefault();
        
        message = $(".message-contact-status").attr("data-role");
        
        var emailData = $('#contact-email').val();
        var msjData = $('#contact-msj').val();
        
        if (validator(emailData,msjData)==true)
        {
            var myJSONStr = 'payload= {"username": "'+emailData+'","icon_url": "", "text":"'+msjData+'"}'; 
            debugger;
            postMessageToSlack(myJSONStr,url,message);
        }        
        else 
        {
            //alert(validator(emailData,msjData));
           
        }
        
        
    });
    
    $("#contact-email").on('keyup',function()
    {        
        $(this).removeClass("fadeIn");
        $(this).removeClass("validator-error");
        $('#contact-email-message').text("");
    });
    
    $("#contact-email").on('blur',function()
    {        
        
        $(this).removeClass("fadeIn");
        $(this).removeClass("validator-error");
        $('#contact-email-message').text("");
        
    });
    
    $("#contact-msj").on('keyup',function()
    {        
        $(this).removeClass("fadeIn");
        $(this).removeClass("validator-error");
        $('#contact-msj-message').text("");
    });

    });

function validator(email,msj)
{
    result = true;  
    
    if( !(/\w{1,}[@][\w\-]{1,}([.]([\w\-]{1,})){1,3}$/.test(email)) ) 
    {
    
       $('#contact-email-message').text("umm! creo que esto no es un correo"); 
               $('#contact-email-message').addClass("fadeIn");                 
              $('#contact-email').addClass("validator-error"); 
                $('#contact-email').select(); 
        result = false;
        
    }
    
     if (msj=="")
    {
        $('#contact-msj-message').text("este campo no puede estar vacio"); 
               $('#contact-msj-message').addClass("fadeIn");                 
              $('#contact-msj').addClass("validator-error"); 
                $('#contact-msj').select();
        result = false;
    }
    
    if (email=="")
    {
        $('#contact-email-message').text("umm!!! si no pones el correo , como te contacto"); 
               $('#contact-email-message').addClass("fadeIn");                 
              $('#contact-email').addClass("validator-error"); 
                $('#contact-email').select();
        result = false;
    }
    
    
   
    
    return result;
    
}

function postMessageToSlack(data,url,msj){
    var xmlhttp = new XMLHttpRequest(),
        webhook_url = url,
        myJSONStr= data;
    
    xmlhttp.open('POST', webhook_url, false);
    xmlhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    try{
         xmlhttp.send(myJSONStr);
    }catch(e)
    {
        
    }
   

    if(xmlhttp.readyState == 4) {
        // Si la respuesta HTTP es OK
        if(xmlhttp.status == 200) {
            if(msj=="1")
            {
               $(".message-contact-status").addClass("hidden");
               $(".message-contact-status").att("data-role","0"); 
            }
            $(".message-contact-status").text("Gracias por Contactarme");
            $(".message-contact-status").removeClass("hidden");
        } else {
            if(msj=="1")
            {
               $(".message-contact-status").addClass("hidden");
               $(".message-contact-status").att("data-role","0"); 
            }
            $(".message-contact-status").addClass("error");
            $(".message-contact-status").text("Ops ha ocurido un error");
            $(".message-contact-status").removeClass("hidden");
        }
    }
}

