$("h1").addClass("big-title");

$("img").attr("src");

$("a").attr("href", "https://www.yahoo.com");

$("h1").click(function (){
   $("h1").css("color", "purple"); 
});

$("button").click(function (){
    $("h1").css("color", "purple"); 
})

$("input").keypress(function(event){
    $("h1").html(event.key);
});

$("h1").on("mouseover", function(){
    $("h1").css("color", "blue");
});