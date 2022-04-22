function calcularPesoIdeal() {
    // Obtenemos la edad y el peso
    var Edad = document.getElementById('txt_edad').value;
    var PesoActual = document.getElementById('txt_peso_actual').value;

    //Calculamos el peso ideal
    var PesoIdeal = (Edad * 2) + 8;

    var imagen = "";

    //Mostramos los resultado en pantalla
    var contenedor_resultado = document.getElementById('cnt_resultado_texto');
    var contenedor_imagen = document.getElementById('cnt_resultado_imagen')

    var PesoMaximo = 100;
    var PesoMinimo = 1;
    if (PesoActual > PesoMinimo & PesoActual < PesoMaximo) {
        //comparamos si la edad es mayor a 10 años.
        if (Edad > 10) {
            contenedor_resultado.innerHTML = "La edad máxima es 10 años."
            imagen = "bajopeso";
            //Si se cumple la edad, se calcula el peso ideal.
        } else {
            if (PesoActual > PesoIdeal) {
                contenedor_resultado.innerHTML = "Está sobre peso. <br> Su peso ideal es: " + PesoIdeal;
                imagen = "sobrepeso";
            } else {
                if (PesoActual == PesoIdeal) {
                    contenedor_resultado.innerHTML = "Está en su peso ideal. <br> ¡¡Muy Bien!!";
                    imagen = "pesoideal";
                } else {
                    contenedor_resultado.innerHTML = "Está bajo su peso ideal. <br> Su peso ideal es: " + PesoIdeal;
                    imagen = "bajopeso";
                }
            }
        }
    } else {
        contenedor_resultado.innerHTML = "Ingrese un peso válido entre 1 y 100.";
        imagen = "bajopeso";
    }

    contenedor_imagen.innerHTML = "<img src= imagenes/" + imagen + ".png>";

    //imagen correspondiente al estado de peso






}