$(function() {
    $('#msingleton').click(function(){
        $('#myPhoto').attr("src", "img/mattimage.png");  
    });
    $('#smccutcheon').click(function(){
        $('#myPhoto').attr("src", "img/Logo.png");  
    });
    $('#ajalloh').click(function(){
        $('#myPhoto').attr("src", "img/Logo.png");  
    });

    $(".carousel").carousel( { interval: 2000 } );
    //Abdulai, I've commented your script because it doesn't work and breaks the functionality on the other lines. Fix it first and then we're good to go.
    // function selection(){
    //     var selected=document.getElementById("#inputGroupSelect").value;
    //     if(selected==0){
    //       document.getElementById("#input1").removeAttribute("hidden");
    //     }else{
    //       //elsewhere actions
    //     };
});
