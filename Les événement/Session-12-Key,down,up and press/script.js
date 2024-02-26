// let msg = document.getElementById('message');
// msg.addEventListener("keydown", (event) => {
//     console.log('key down')
// });
// msg.addEventListener("keypress", (event) => {
//     console.log('key press')
// });
// msg.addEventListener("keyup", (event) => {
//     if (event.keyCode === 65)
//     console.log('you clicked Enter')
// });

// let zone = document.getElementById('message');
// zone.addEventListener('keydown', (event) => {
// console.log(`key=${event.key},code=${event.code}`);
// });

document.querySelector(".btn").addEventListener("click", function(e){
    e.preventDefault();
    let nom = document.querySelector("#nom")
    if (nom.value.length == ''){
        nom.classList.add('error')
    }

})
