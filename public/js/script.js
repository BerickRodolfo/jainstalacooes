$('.filter-btn').on('click', function() {

    let type = $(this).attr('id');
    let boxes = $('.project-box');

    $('.main-btn').removeClass('active');
    $(this).addClass('active');

    if(type == 'dsg-btn') {
      eachBoxes('dsg', boxes);
    } else if(type == 'dev-btn') {
      eachBoxes('dev', boxes);
    } else if(type == 'seo-btn') {
      eachBoxes('seo', boxes);
    } else {
      eachBoxes('all', boxes);
    }
  });
  function eachBoxes(type, boxes) {
    if(type == 'all') {
      $(boxes).fadeIn();
    } else {
      $(boxes).each(function() {
        if(!$(this).hasClass(type)) {
          $(this).fadeOut('slow');
        } else {
          $(this).fadeIn();
        }
      });
    }
  }



//MODALS


var modal = document.getElementById('myModal');
var img = $('.myImg');
var modalImg = $("#img01");
var captionText = document.getElementById("caption");
$('.myImg').click(function(){
    modal.style.display = "block";
    var newSrc = this.src;
    modalImg.attr('src', newSrc);
    captionText.innerHTML = this.alt;
});
var span = document.getElementsByClassName("close")[0];
span.onclick = function() {
  modal.style.display = "none";
}


var modal1 = document.getElementById('Modal');
var img1 = $('.myImg1');
var modalImg1 = $("#img");
var captionText1 = document.getElementById("captions");
$('.myImg1').click(function(){
    modal.style.display = "block";
    var newSrc = this.src;
    modalImg.attr('src', newSrc);
    captionText.innerHTML = this.alt;
});
var span = document.getElementsByClassName("close")[0];
span.onclick = function() {
  modal.style.display = "none";
}







//Close Navbar


$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});

const renderModal = (id) => {
  let titulo = "";
  let subtitulo = "";
  let imagem = "";

  switch (id) {
    case 1:

    titulo = "Pamonha";  

    subtitulo = "É bom demais";

    imagem = "C:\Users\Erick\Desktop\projetoreact\jainstalacoes\public\imgs/11.jpeg"


    break;

    case 2:

      titulo = "Suco de Limão com Beterraba";  

      subtitulo = "É Saudável demais";
  
      imagem = "C:\Users\Erick\Desktop\projetoreact\jainstalacoes\public\imgs/12.jpeg"
    

    break;

    case 3:

      titulo = "Suco de Abacaxi";  

      subtitulo = "É Azedo demais";
  
      imagem = "C:\Users\Erick\Desktop\projetoreact\jainstalacoes\public\imgs/13.jpeg"
    

    break;
  }


  
  
}

