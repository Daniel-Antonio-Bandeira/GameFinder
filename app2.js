function criarCard(jogo) { //criação do card
    let novoCard = document.createElement("div")
    let tituloCard = document.createElement("h4")
    let descricaoCard = document.createElement("p")
    let imgCard = document.createElement("img")

    tituloCard.textContent = jogo.name
    descricaoCard.textContent = `⭐ Nota: ${jogo.rating}`

    imgCard.src = jogo.background_image 
    imgCard.alt = jogo.name

    novoCard.append(imgCard, tituloCard, descricaoCard)
    novoCard.className = "card-jogo"

    return novoCard
}

//renderização
function renderizarJogos(jogos, container) {
    container.innerHTML = ""

    jogos.forEach(jogo => {
        const card = criarCard(jogo)
        container.appendChild(card)
        
    });
}

//main
const btnEnviar = document.getElementById('enviar')

const input = document.getElementById("buscar")

    input.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            btnEnviar.click()
        }
    })


btnEnviar.addEventListener("click", async () => {
    const campoBusca = document.getElementById('buscar')  
    const valorCampoBusca = campoBusca.value.trim()
    
    
    if (event.key === "Enter" && input.value.trim() !== "") {
        btnEnviar.click()
    }   

    const campoResultados = document.getElementById('resultados') 
    campoResultados.innerHTML = "<p>Carrengando...</p>"

    const url = `https://api.rawg.io/api/games?key=104f85df341e4b138a173b681536f807&search=${valorCampoBusca}`

    try {
        const resposta = await fetch(url)
        const dados = await resposta.json()

        renderizarJogos(dados.results, campoResultados)
        campoBusca.value = ""
    } catch (erro) {
        campoResultados.innerHTML = "<p>Erro ao buscar jogos</p>"
        console.error(erro)
    }
 
})