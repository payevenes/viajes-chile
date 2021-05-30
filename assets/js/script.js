$(function () {
    $(document).scroll(function () {
        var $nav = $(".navbar");
        var $picture = $("#carouselExampleControls");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $picture.height());
    });
});

$(function () {
    $("#clickComenzar").click(function () {
        var email = prompt("Ingresa tu correo");
        alert("Te contactaremos pronto");
    });
});

$(".card-title").click(function () {
    $(".card-text").toggle();
});