function adicionarItem() {
    let lista = document.getElementById("lista");
    let novoItem = document.createElement("li");
    novoItem.textContent = "Item" + (lista.children.length + 1);
    lista.appendChild(novoItem);
}