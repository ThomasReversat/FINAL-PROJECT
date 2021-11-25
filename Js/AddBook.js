function titre(){
    titre2 = document.getElementById("titreIn").value
    document.getElementById("TitleBook").innerHTML = titre2;
}
function auteur(){
    auteur2 = document.getElementById("auteurIn").value
    document.getElementById("Author").innerHTML = auteur2;
}
function resume(){
    resume2 = document.getElementById("resumeIn").value
    document.getElementById("Resume").innerHTML = resume2;
}
function date(){
    date2 = document.getElementById("dateIn").value
    document.getElementById("Date").innerHTML = date2;
}
function nombre(){
    nombre2 = document.getElementById("nombreIn").value
    document.getElementById("Nombre").innerHTML = nombre2;
}
function editeur(){
    editeur2 = document.getElementById("éditeurIn").value
    document.getElementById("Editeur").innerHTML = editeur2;
}

function add(){
    titreBook = titreIn.value
    auteurBook = auteurIn.value
    resumeBook = resumeIn.value
    dateBook = dateIn.value
    nombreBook = nombreIn.value
    editeurBook = éditeurIn.value


    EditeurBook = document.getElementById("Editeur").innerHTML
    console.log(EditeurBook)

    card1 = "<div class='card'><div class='cardTop'></div><div class='cardMid'><div class='cornered'><img src='../Images/instagram.png' class='prix'></div>"
    card2 = "<div class='main'><div class='titleCard'><h1 class='author' id='Author'>"+auteurBook+"</h1>"
    card3 = "<h2 class='TitleBook' id='TitleBook'>"+titreBook+"</h2></div>"
    card4 = "<div class='resumeBook'><p style='padding: 20px;' id='Resume'>"+resumeBook+"</p></div></div></div>"
    card5 = "<div class='cardBottom'><div class='cardInfoBot'><p>"+nombreBook+"</p></div><hr class='pointier'>"
    card6 = "<div class='cardInfoBot'><p id='Date'>"+dateBook+"</p></div><hr class='pointier'>"
    card7 = "<div class='cardInfoBot'><p>"+editeurBook+"</p></div></div></div>"
    
    if (titreBook != "" && auteurBook!="" && resumeBook!="" && dateBook!="" && nombreBook!="" && editeurBook!="") {
        document.getElementById("containerAFBbot").insertAdjacentHTML("afterbegin",card1+card2+card3+card4+card5+card6+card7)
    } else {
        alert("veuillez remplir tous les champs")
    }
}
function togg(){
    if(getComputedStyle(ContainerForm).display != "none"){
        ContainerForm.style.display = "none";
    } else {
        ContainerForm.style.display = "flex";
    }
  };