    window.onload = () => {
        var modeloDatos = {
            "notas": []
        };

        document.getElementById("boton").addEventListener("click", nuevaNota);

        if (window.localStorage.getItem("notas")) {
            console.log("Existe");
            modeloDatos = JSON.parse(window.localStorage.getItem("notas"));
            muestraNotas(modeloDatos.notas);
        } else {
            console.log("No existe");
        }

        function nuevaNota() {
            textoNota = document.getElementById("input1").value;
            document.getElementById("input1").value = "";
            textoNota2 = document.getElementById("input2").value;
            document.getElementById("input2").value = "";

            var notaDiv = document.createElement("div");
            notaDiv.className = "nota";
            notaDiv.innerHTML = textoNota;
            notaDiv.innerHTML = textoNota2;

            document.getElementById("contenedor-notas").appendChild(notaDiv);

            moverNota(notaDiv);

            guardarPosicionNota(notaDiv);

            modeloDatos.notas.push({
                texto: textoNota,
                texto2: textoNota2,
                left: notaDiv.style.left,
                top: notaDiv.style.top
            });

            window.localStorage.setItem("notas", JSON.stringify(modeloDatos));
        }

        

        function moverNota(element) {
            var offsetX, offsetY, isDragging = false;

            element.addEventListener("mousedown", function (e) {
                isDragging = true;
                offsetX = e.clientX - element.getBoundingClientRect().left;
                offsetY = e.clientY - element.getBoundingClientRect().top;
            });

            document.addEventListener("mousemove", function (e) {
                if (!isDragging) return;

                element.style.left = e.clientX - offsetX + "px";
                element.style.top = e.clientY - offsetY + "px";
            });

            document.addEventListener("mouseup", function () {
                isDragging = false;
            });
        }

        function guardarPosicionNota(notaDiv) {
            notaDiv.addEventListener("mouseup", function () {
                for (var i = 0; i < modeloDatos.notas.length; i++) {
                    if (modeloDatos.notas[i].texto === notaDiv.innerHTML) {
                        modeloDatos.notas[i].left = notaDiv.style.left;
                        modeloDatos.notas[i].top = notaDiv.style.top;
                        break;
                    }
                }
                window.localStorage.setItem("notas", JSON.stringify(modeloDatos));
            });
        }
    };
