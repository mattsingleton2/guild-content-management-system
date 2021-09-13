$(function() {
    $(".carousel").carousel( { interval: 2000 } );
});

function selection(){
    var selected=document.getElementById("#inputGroupSelect").value;
    if(selected==0){
      document.getElementById("#input1").removeAttribute("hidden");
    }else{
      //elsewhere actions
    }
  }
