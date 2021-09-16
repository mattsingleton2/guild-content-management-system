$(function() {
    $('#msingleton').click(function(){
        $('#myPhoto').attr("src", "img/mattimage.png");  
    });
    $('#smccutcheon').click(function(){
        $('#myPhoto').attr("src", "img/sarahimage.png");  
    });
    $('#ajalloh').click(function(){
        $('#myPhoto').attr("src", "img/Logo.png");  
    });

    $(".carousel").carousel( { interval: 2000 } );

});
