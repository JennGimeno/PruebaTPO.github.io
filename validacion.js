function validar(){ 
    var valor = document.getElementById('nombre').value;
    var valor = document.getElementById('email').value;
    var valor = document.getElementById('telefono').value;
    var valor= document.getElementById('asunto').value;
    var valor= document.getElementById('mensaje').value;
  
    
    
    if(valor.length == 0)
    {
    alert('Debe completar todos los campos');}
return false;
}
    



