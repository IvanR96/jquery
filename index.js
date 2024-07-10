$('h1').text("Welcome to jQuery!");

$("button").text("Click Here");

$("a").attr("href", "https://www.youtube.com");


$("button").on("click", function(){
    $("h1").slideUp().slideDown().animate({opacity: 0.5});
});

$("h1").before("<button>New</button>");