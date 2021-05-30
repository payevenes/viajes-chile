//Cambiar color de Navbar en scroll después de pasar la sección carousel
$(function () {
    $(document).scroll(function () {
        var $nav = $(".navbar");
        var $picture = $("#carouselExampleControls");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $picture.height());
    });
});

//Formulario de contacto
$(function () {
    $("#clickComenzar").click(function () {
        var email = prompt("Ingresa tu correo");
        alert("Te contactaremos pronto");
    });
});

//Párrafo de las Cards desaparece al click
$(".card-title").click(function () {
    $(".card-text").toggle();
});