document.querySelector(".creer-titre").addEventListener("click",function(){
    const parent = document.querySelector("body")

    const titre = document.createElement("h1");
    titre.innerHTML = "Title 1";
    titre.style.background = "#333";
    titre.style.color = "#fff";

    parent.append(titre)
})

document.querySelector(".section-2").addEventListener("click",function(){
    const parent = document.querySelector("body")

    const para = document.createElement("p");
    para.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicinglit. Minus, veritatis! Eaque laboriosam minima ex, sit, rerum vel eveniet sapiente et quasi eligendi libero, dolor amet architecto quaerat exercitationem fuga animi!";
    para.style.background = "aqua";
    para.style.color = "blue";

    parent.append(para)

})

document.querySelector(".a-delete").addEventListener("click",function(){
    const parent = document.querySelector(".section-1");
    const enfant = document.querySelector(".para-1");

    document.querySelector(".delete").remove();

    parent.removeChild(enfant) 
})

document.querySelector(".a-remplacer").addEventListener("click",function(){
    const parent = document.querySelector(".section-1");
    const ancElement = document.querySelector(".para");
    const nouvElement = document.querySelector(".titre");

    parent.replaceChild(nouvElement , ancElement)
})

document.querySelector(".btn-creer-conteneur").addEventListener("click", function(){
    const vConteneur = document.createElement("div");
    vConteneur.classList.add("container")
    document.body.append(vConteneur)

    //set Attribute
    vConteneur.setAttribute("id","conteneur")
    vConteneur.setAttribute("name","conteneurName")


    document.body.append(vConteneur)

    document.querySelector(".titre").classList.add("encadre")
    document.querySelector(".titre").setAttribute("id","monTitre")
})