
//VALIDACIONES
function inicio(){
    let user= document.getElementById("usuario").value;
    let password= document.getElementById("clave").value;

    if (user=="Luisa" && password=="1234") {
        window.location.href = "../citas/citas.html";
    }else{
        alert("Datos incorrectos")
    }
}