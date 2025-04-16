const lista_de_compras= []

while(true){
    const opcao = Number(prompt("digite 1 para adicionar item na lista, 2 para remover ou 3 para mostrar lista completa."))
    if (opcao===1){
        const item = prompt("digite o item que deseja adicionar")
        lista_de_compras.push(item)
        alert(`o item ${item} foi adicionado a lista com sucesso!`)

}else if (opcao===2){
    const item = prompt("digite o item que deseja remover")
    if (lista_de_compras.includes(item)){
        lista_de_compras.splice(item)
        alert(`o item ${item} foi removido da lista!`)
    } else {
        alert("o item nao existe na lista!")
    }
    
} else if (opcao===3){
    alert(`a lista está assim ${lista_de_compras}`);
    
} else {
    alert("opcao invalida! saindo...");
    break
    
}

}