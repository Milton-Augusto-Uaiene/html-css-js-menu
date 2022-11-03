// CODIGO DO MENU

(function () {
    var menu = document.querySelector('nav'); // colocar em cache
    window.addEventListener('scroll', function () {
        if (window.scrollY > 0) menu.classList.add('menuFixo'); // > 0 ou outro valor desejado
        else menu.classList.remove('menuFixo');
    });
})();





const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    //Fazendo aparecer os itens
    const navLinks = document.querySelectorAll('.nav-links li');

    //Fazendo o clique do menu funcionar
    burger.addEventListener('click', () => {
      nav.classList.toggle('nav-active');

      //Animações links
      navLinks.forEach((link, index) => {
        if (link.style.animation) {
          link.style.animation = '';
        } else {
          link.style.animation = `navlinkFade 0.5s ease forwards ${index/7+1.5}s`

        }
      });
      //Transformando em X
      burger.classList.toggle('toggle');


    });


  }

  navSlide();