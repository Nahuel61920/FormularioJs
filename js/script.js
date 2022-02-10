let user = document.getElementById("user");
let email = document.getElementById("email");
let pass = document.getElementById("password");

let enviar = addEventListener("click",validacion);

function validacion(){
    if(user.value == ""){
		user.setCustomValidity("Este campo es obligatorio");
		user.style.backgroundColor = "#ffdddd";
		return false;
	}else{
		user.setCustomValidity("");
		user.style.backgroundColor = "#fff";
	}

	if(email.value ==""){
		email.setCustomValidity("Comple este campo con un email valido");
		email.style.backgroundColor = "#ffdddd";
		return false;
	}else{
		email.setCustomValidity("");
		email.style.backgroundColor = "#fff";
	}

	if(pass.value ==""){
		pass.setCustomValidity("Ingrese una contraseña valida");
		pass.style.backgroundColor = "#ffdddd"
		return false;
	}else{
		pass.setCustomValidity("");
		pass.style.backgroundColor = "#fff"
	}

    if(pass.value.length < 6 || pass.value.length > 8){
        pass.setCustomValidity('La contraseña debe tener entre 6 y 8 caracteres');
        pass.style.background = '#FFDDDD';
        return false;
    }else{
        pass.setCustomValidity('');
        pass.style.background='#FFF';
    }
}