document.addEventListener("DOMContentLoaded", (event) =>{
    
    var analogie = document.querySelector("#analogie")
    analogie.addEventListener("keyup", (event) => {
        console.log(analogie.value )
    })





    var data = fetch('analogies.json').then(function (response) {
        response.json().then(function (data) {
            console.log(data);     
            var listeAnalogies = document.querySelector(".liste-analogies")
            data.forEach(function (element){
                listeAnalogies.innerHTML += "<div class='wrapper'><h2> Si j'étais " + element.analogies + ", je serais " + element.valeursAnalogies + "</h2> <div class='box'> <h3>" + element.description + "</h3>  <img src='" + element.image + "' alt='' id='image"+element.valeursAnalogies.replace(/ /g, '')+"'> </div> </div>" 

            })
            })
            })

    });

function valider(){
    var analogie = document.querySelector("#analogie")
    var valeurAnalogie = document.querySelector("#valeurAnalogie")
    var descriptionAnalogie = document.querySelector("#descriptionAnalogie")
    var imageAnalogie = document.querySelector("#imageAnalogie")
    var listeAnalogies = document.querySelector(".liste-analogies")
    console.log(analogie)
    listeAnalogies.innerHTML += "<div class='wrapper'><h2> Si j'étais " + analogie.value + ", je serais " + valeurAnalogie.value + "</h2> <div class='box'> <h3>" + descriptionAnalogie.value + "</h3>  <img src='" + imageAnalogie.value + "' alt='' id='imageLambda'> </div> </div>" 
}    



function spawn(){
    let a = document.querySelector(".mention")
    a.style.display="block"
}

let b = document.querySelector(".mention");

function dis(){
    b.classList.toggle("disblock");
}