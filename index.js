$("h1").addClass("big-title");

$("img").attr("src");

$("a").attr("href", "https://www.yahoo.com");

$("button").click(function (){
   $("h1").animate({opacity: 0.5}); 
});

$("input").keypress(function(event){
    $("h1").html(event.key);
});
