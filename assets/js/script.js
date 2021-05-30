$(function () {
    $("#clickComenzar").click(function () {
        alert("Haz click para comenzar o pulsa Enter");
    });
});

$(".card-title").click(function () {
    $(".card-text").toggle();
});