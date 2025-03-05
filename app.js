let amigos = [];

function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();

    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }
    
    if (amigos.includes(nombre)) {
        alert("Este nombre ya ha sido ingresado.");
        return;
    }
    
    amigos.push(nombre);
    actualizarLista();
    input.value = "";
}

function actualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    amigos.forEach((amigo) => {
        const li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Debe haber al menos 2 participantes para hacer el sorteo.");
        return;
    }
    
    let amigosMezclados = [...amigos];
    let asignaciones = {};

    do {
        amigosMezclados = amigosMezclados.sort(() => Math.random() - 0.5);
    } while (amigos.some((amigo, i) => amigo === amigosMezclados[i]));
    
    amigos.forEach((amigo, i) => {
        asignaciones[amigo] = amigosMezclados[i];
    });

    mostrarResultados(asignaciones);
}

function mostrarResultados(asignaciones) {
    const resultadoLista = document.getElementById("resultado");
    resultadoLista.innerHTML = "";

    for (const [amigo, asignado] of Object.entries(asignaciones)) {
        const li = document.createElement("li");
        li.textContent = `${amigo} → ${asignado}`;
        resultadoLista.appendChild(li);
    }
}
