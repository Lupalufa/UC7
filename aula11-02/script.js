let titulo = document.getElementById("titulo")
console.log(typeof titulo);
console.log(titulo.innerText)

function verificarInput(){
    let input = document.getElementById('nome');
    // console.log(input)
    if(input.value.length < 5){
        input.className = 'erro'
    }
    else{
        input.className = 'sucesso';
    }

}