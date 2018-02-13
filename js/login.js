function login () {
      
        var usuario = document.getElementById("correo").value;
        var clave = document.getElementById("clave").value;
        
        if ((usuario == "daniel.torres@hotmail.com") && (clave == "12345")){
          alert("Ingreso correcto");
        return true;
        } else {
          alert("Correo o Clave incorrecata Verifique sus datos"); 
          return false;
        }
      }

 