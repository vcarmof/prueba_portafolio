$(function(){

    $("a").click(function(event){
      if (this.hash !== "") {
        event.preventDefault();
  
        var gato = this.hash;
  
        $("html, body").animate({
          scrollTop: $(gato).offset().top
        }, 800, function(){
          window.location.hash = gato;
        });
      }
    });
  
    $('[data-toggle="popover"]').popover();

    $(".card img").click(function(){

        $(".card-body").toggle(500);
  
     }); 



    

  
  });


  //JAVASCRIP
  var nombre = document.getElementById("nombre");

  //LLAMADO A FUNCIONES
  nombre.addEventListener('click', function(){

    color();
  });



//FUNCIONES

function color (){
  
  nombre.classList.toggle("text-dark");


} 

//TYPEFORM

(function() { 
    var qs,js,q,s,d=document, gi=d.getElementById, ce=d.createElement, gt=d.getElementsByTagName, id="typef_orm", b="https://embed.typeform.com/";
     if(!gi.call(d,id)) { js=ce.call(d,"script"); js.id=id; js.src=b+"embed.js";
      q=gt.call(d,"script")[0];
       q.parentNode.insertBefore(js,q) 
      } 
    })();
  

  