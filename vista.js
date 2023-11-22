function muestraNotas(arrayNotas) {
    var contenedorNotas = document.getElementById("contenedor-notas");
    contenedorNotas.innerHTML = "";

    for (nota of arrayNotas) {
        var notaDiv = document.createElement("div");
        notaDiv.className = "nota";
        notaDiv.innerHTML = nota.texto;
        notaDiv.style.left = nota.left;
        notaDiv.style.top = nota.top;

        makeElementDraggable(notaDiv);

        contenedorNotas.appendChild(notaDiv);
    }
}