var arrPublications = [];

function addProduct() {
    var title= document.getElementById("txtTitle").value;
    var content = document.getElementById("txtContent").value;

    var objPublication = new Object();
    objPublication.title= title;
    objPublication.content= content;

    arrPublications.push(objPublication);
    setPublication();
}

function setPublication(){
    var divPublications= document.getElementById("divPublications");
    divPublications.innerHTML= "";
    
    for(var i= 0; i < arrPublications.length; i++){
        var pTitle= document.createElement("h2");
        var pContent= document.createElement("p");
        var div = document.createElement("div");

        pTitle.setAttribute("class", "publication-title");
        pTitle.innerHTML= arrPublications[i].title;

       
        pContent.setAttribute("class", "publication-content");
        pContent.innerHTML= arrPublications[i].content;

        div.setAttribute("class", "publication");
        div.appendChild(pTitle);
        div.appendChild(pContent);
        
        divPublications.appendChild(div)

    }
}