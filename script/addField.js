//procurar o botao
document.querySelector("#add-time")
//quando clickar no botao
.addEventListener("click", cloneField)


// executar uma açao
function cloneField() {
    //duolicar os campos
    const newFieldContainer = document.querySelector(".schedule-item").cloneNode(true)
    // limpar os campos
    const fields = newFieldContainer.querySelectorAll("input")
    //para cada campo
    fields.forEach(function(field) {
        console.log(field)
        field.value = ""
    })

    //colocar na pagina
    document.querySelector("#schedule-items").appendChild(newFieldContainer)
}