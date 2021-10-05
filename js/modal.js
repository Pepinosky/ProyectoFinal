

document.addEventListener("DOMContentLoaded", function(event){
    var modal = document.getElementById("myModal");  
    var btn = document.getElementById("publication-btn");
    var span= document.getElementsByClassName("close")[0];
    var btnSubmit= document.getElementById("btnSubmit");
    
    btn.onclick = function(){  
        modal.style.display = "block"; 
    }

    span.onclick = function(){
        modal.style.display = "none";
    }

  

});
