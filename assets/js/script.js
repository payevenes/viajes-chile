$(function () {
    $("#clickComenzar").click(function () {
        var email = prompt("Ingresa tu correo");
        alert("Te contactaremos pronto");
    });
});

$(".card-title").click(function () {
    $(".card-text").toggle();
});