let listaAtores = [

    {
  
      nome: 'Keanu Reeves',
  
      personagem: 'Neo',
  
      filme: 'The Matrix',
  
    },
  
    {
  
      nome: 'David Prowse',
  
      personagem: 'Darth Vader',
  
      filme: 'Star Wars Episódios IV-VI',
  
    },
  
    {
  
      nome: 'Bruce Wayne',
  
      personagem: 'Batman',
  
      filme: 'Batman - O Início'
  
    },
  
  ]

let htmlAtores = ''

for (let listaAtor of listaAtores) {
    
    htmlAtores += `
    
    <div>
        <h2>${listaAtor.nome}</h2>
        <p> 
            Interpreta o personagem ${listaAtor.personagem} no filme ${listaAtor.filme}
        </p>
    </div>`
}

document.querySelector('.container').innerHTML = htmlAtores