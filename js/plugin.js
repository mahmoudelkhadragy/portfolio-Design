/*global console */
$(document).ready( function(){     // to start write code jquery when page is loaded
    $("body").fadeTo( 2000 , 1 );
    
    $("#learn").click( function(){
        $("#heading").fadeOut();
        setTimeout(function(){
            $("#heading").slideDown();
        }, 4000);
    });
    
    
        setTimeout(function(){
           $("[xxxx]").each( function(){
               var width = $(this).attr("xxxx");
               $(this).animate( { width : width + "%" } , 4000 );  
           })
        
        }, 8000);
    
    $("#www li").click( function(){
        var numX = $(this).attr("h");
        $("#www li").removeClass("active");
        $(".testoo").removeClass("active");
        $(this).addClass("active");
        $('[g='+numX+']').addClass("active");
    });
    
    
});

var myAge = prompt("What is your age?");

if (myAge < 18){
    
    document.getElementById("age").innerHTML = 
        
        "Sorry your age is " + myAge + "you are not allowed here"
    
} else {
    
    document.getElementById("age").innerHTML = 
        
        "you are welcome"
    
}

var myTicket = 200;

if (myTicket < 300){
    
    console.log("it is cheape");
    
} else {
    
    console.log("it is expensive");
    
}