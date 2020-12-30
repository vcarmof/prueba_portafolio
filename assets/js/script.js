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

  

  