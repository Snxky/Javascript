const Liste = []

document.querySelector(".first-button").addEventListener("click",function(e){
    e.preventDefault;
    let nom = document.querySelector("#nom").value;
    let prenom = document.querySelector("#prenom").value;
    let age = document.querySelector("#age").value;
    const UserListe = {};
    UserListe.noms = nom;
    UserListe.prenoms = prenom;
    UserListe.age = age;
    Liste.push(UserListe)


    
})

document.querySelector(".second-button").addEventListener("click",function(e){
    e.preventDefault;
    console.log(Liste);
    Liste.map(function(item,number,array){
        console.log(item)
    })
})