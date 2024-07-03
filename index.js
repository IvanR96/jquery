$('h1').text("Welcome to jQuery!");

$("button").text("Click Here");

$("a").attr("href", "https://www.youtube.com");


$("button").on("click", function(){
    $("h1").toggle();
});

$("h1").before("<button>New</button>");
// can use after to create after selected element