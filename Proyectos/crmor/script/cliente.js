function agregar_cliente() {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var id_cliente = document.getElementById("txt_rut").value;
    var dv = document.getElementById("txt_dv").value;
    var nombres = document.getElementById("txt_nombres").value;
    var apellidos = document.getElementById("txt_apellidos").value;
    var email = document.getElementById("txt_email").value;
    var celular = document.getElementById("txt_num_telef").value;

    var raw = JSON.stringify({
        "id_cliente": id_cliente,
        "dv": dv,
        "nombres": nombres,
        "apellidos": apellidos,
        "email": email,
        "celular": celular,
        "fecha_registro": "2022-05-13"
    });

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    fetch("http://frontend171.com/api/cliente", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
}


function obtener_datos_clientes(){

}


function completar_tabla(){

}