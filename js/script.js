"use strict";

$(document).ready(function(){

  function init(){
      cookies();
  };

// Animation quand l'objet est complètement dans la page
$(".wowFull").each(function() {
  var wowHeight = $(this).height();
  $(this).attr("data-wow-offset", wowHeight);
});


// Menu burger
function openMenu(){
  $("nav.container").addClass('show');
  $("nav.container").removeClass('closeMenu');
  $("#Burger").addClass('hide');
  $("#Cross").removeClass('hide');
};

function closeMenu(){
  $("nav.container").addClass('closeMenu');
  $("nav.container").removeClass('show');
  $("#Cross").addClass('hide');
  $("#Burger").removeClass('hide');

};
    $("#Burger").click(function(){
      openMenu();
    });
    $("#Cross").click(function(){
      closeMenu();
    });

// Volet des packs
$('.voletOpen').click(function(event){

  var $this = $(this);
  var $volet = $this.parent().parent().find('.volet');
  var $closeButton = $this.next();
  event.preventDefault();
  $volet.hide("slide", { direction: "left" }, 1000);
  $this.addClass('hide');
  $closeButton.removeClass('hide');

  var $text = $this.parent().parent().find('.text');
  var $parentText = $text.parent();
  var heightText = $parentText.height() + 'px';
  $text.height(heightText).focus();

});

$('.voletClose').click(function(event){
  var $this = $(this);
  var $volet = $this.parent().parent().find('.volet');
  var $openButton = $this.prev();
  event.preventDefault();
  $volet.show("slide", { direction: "left" }, 1000);
  $this.addClass('hide');
  $openButton.removeClass('hide');
});

window.onscroll = function() {
  collapseMenu()
  };

  // Création du Menu Sticky
  function collapseMenu() {

      var menu = document.getElementById("menuBurger");
      var section = document.getElementById("visualIdentity").offsetTop;

      if (window.pageYOffset >= section) {
        menu.classList.add("sticky");
      } else {
        menu.classList.remove("sticky");
      }
  };


  // Anmiation de la barre de menu
    $(document).on("scroll", onScroll);

      //smoothscroll
    $('a[href^="#"]').on('click', function (e) {
          e.preventDefault();
          $(document).off("scroll");

          $('a').each(function () {
              $(this).parent().removeClass('active');
          })
          $(this).parent().addClass('active');

          var target = this.hash,
              menu = target;
          var $target = $(target);
          $('html, body').stop().animate({
              'scrollTop': $target.offset().top + 2
          }, 1000, 'swing', function () {
              window.location.hash = target;
              $(document).on("scroll", onScroll);
          });
      });

      // Activation Menu des pages en cours
      function onScroll(event){
          var scrollPos = $(document).scrollTop();
          $('#menuBurger a').each(function () {
              var currLink = $(this);
              var currLi = $(this).parent();
              var refElement = $(currLink.attr("href"));
              if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
                  $('#menuBurger ul li').removeClass("active");
                  currLi.addClass("active");
              }
              else{
                  currLi.removeClass("active");
              }
          });
        }

        // Message pour les cookies
        function cookies(event){
          cookieChoices.showCookieConsentBar('Ce site utilise des cookies pour vous offrir le meilleur service. En poursuivant votre navigation, vous acceptez l’utilisation des cookies.', 'J’accepte', 'En savoir plus', 'https://addpub.fr/addcom/index.html#pol-conf');
        };

        // Affichage des pages légales
        $("a[href='cond-vente']").click(function(event){
          event.preventDefault();
          $("#cond-vente").slideToggle('slow');
        });
        $("a[href='pol-conf']").click(function(event){
          event.preventDefault();
          $("#pol-conf").slideToggle('slow');
        });
        $("a[href='men-leg']").click(function(event){
          event.preventDefault();
          $("#men-leg").slideToggle('slow');
        })
        $("a[href='copyright']").click(function(event){
          event.preventDefault();
          $("#copyright").slideToggle('slow');
        })
            //fermeture des pages
            $('p.legal-close').click(function(event){
              event.preventDefault();
              $(this).parent().parent().slideToggle('slow');
            });

        // lance les fonctions au demarrage
          init();
});
