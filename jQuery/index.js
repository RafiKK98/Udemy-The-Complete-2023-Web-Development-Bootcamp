$("h1").click(() => {
    $("h1").css("color", "purple");
});

$("button").click(() => {
    $("h1").slideUp().slideDown().animate({
        opacity: 0.5,
    });
});

// $(document).on('keypress', (event) => {
//     $("h1").text(event.key);
// })