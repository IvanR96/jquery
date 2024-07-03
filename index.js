$('h1').text("Welcome to jQuery!");

$("button").text("Click Here");

$("a").attr("href", "https://www.youtube.com");

$("button").click(function (){
    $("h1").css("color", "blue");
});