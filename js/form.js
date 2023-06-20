

function ValidacaoNome () {

    var areaNome = document.getElementById('input_name');
    var areaError = document.getElementById("nome_error");

    let campoNome = document.getElementById('input_name').value;


    var input = document.getElementById('input_name'); 
    var limite = 50;

    if (input.value.length > limite) {
        input.value = input.value.substring(0, limite);
        areaError.innerText = ("Digite apenas 50 caracteres");
        setTimeout(function() {
            areaError.innerText = (" ");
        }, 5000)
        return false;
    }

    if (campoNome === '') {
        areaNome.classList.add("campo-invalido");
        areaError.innerText = "Digite seu Nome!";
        areaError.classList.add("contatoForm__error-Tremor");
        
        setTimeout(function() {
            areaNome.classList.remove("campo-invalido");
            areaError.innerText = (" ");
        }, 5000)

        return false;


    }

    else {
        return true;
    }
}












function ValidacaoEmail () {
    var areaError = document.getElementById("email_error");
    var areaEmail = document.getElementById("input_email");

    let campoEmail = document.getElementById("input_email").value;

    var input = document.getElementById('input_email'); 
    var limite = 200;

    if (input.value.length > limite) {
        input.value = input.value.substring(0, limite);
        areaError.innerText = ("Digite apenas 200 caracteres");
        setTimeout(function() {
            areaError.innerText = (" ");
        }, 5000)
        return false;
    }


    if (campoEmail === '') {
        areaEmail.classList.add("campo-invalido");
        areaError.innerText = "Digite seu Email!";
        areaError.classList.add("contatoForm__error-Tremor");
        
        setTimeout(function() {
            areaEmail.classList.remove("campo-invalido");
            areaError.innerText = (" ");
        }, 5000)

        return false;


    }

    else {
        return true;
    }

}













function ValidacaoEmailFormato (email_fornecido) {
    var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var email_fornecido = document.getElementById("input_email").value;

    var areaError = document.getElementById("email_error");
    var areaEmail = document.getElementById("input_email");
    let campoEmail = document.getElementById("input_email").value;

    if (regex.test(email_fornecido)) {
        return true;
    }else {
            areaEmail.classList.add("campo-invalido");
            areaError.innerText = "O Formato do Email esta incorreto!";
            areaError.classList.add("contatoForm__error-Tremor");
            
            setTimeout(function() {
                areaEmail.classList.remove("campo-invalido");
                areaError.innerText = (" ");
            }, 5000)
    
            return false;
    
    
        }
    


    }











function ValidacaoAssunto () {
    var areaError = document.getElementById("assunto_error");
    var areaAssunto = document.getElementById("input_assunto");

    let campoAssunto = document.getElementById("input_assunto").value;

    var input = document.getElementById('input_assunto'); 
    var limite = 50;

    if (input.value.length > limite) {
        input.value = input.value.substring(0, limite);
        areaError.innerText = ("Digite apenas 50 caracteres");
        setTimeout(function() {
            areaError.innerText = (" ");
        }, 5000)
        return false;
    }


    if (campoAssunto === '') {
        areaAssunto.classList.add("campo-invalido");
        areaError.innerText = "Digite o Assunto que queira falar!";
        areaError.classList.add("contatoForm__error-Tremor");
        
        setTimeout(function() {
            areaAssunto.classList.remove("campo-invalido");
            areaError.innerText = (" ");
        }, 5000)

        return false;


    }

    else {
        return true;
    }
}













function ValidacaoMensagem () {
    var areaError = document.getElementById("mensagem_error");
    var areaMensagem = document.getElementById("input_mensagem");

    let campoMensagem = document.getElementById("input_mensagem").value;

    var input = document.getElementById('input_mensagem'); 
    var limite = 300;

    if (input.value.length > limite) {
        input.value = input.value.substring(0, limite);
        areaError.innerText = ("Digite apenas 300 caracteres");
        setTimeout(function() {
            areaError.innerText = (" ");
        }, 5000)
        return false;
    }


    if (campoMensagem === '') {
        areaMensagem.classList.add("campo-invalido");
        areaError.innerText = "Mande-me uma Mensagem!";
        areaError.classList.add("contatoForm__error-Tremor");
        
        setTimeout(function() {
            areaMensagem.classList.remove("campo-invalido");
            areaError.innerText = (" ");
        }, 5000)

        return false;


    }

    else {
        return true;
    }
}










function verificacaoForm () {
    ValidacaoNome ();
    ValidacaoEmail ();
    ValidacaoEmailFormato ();
    ValidacaoAssunto ();
    ValidacaoMensagem ();

    function validarFormulario(event) {
        if (!ValidacaoNome() || !ValidacaoEmail() || !ValidacaoEmailFormato || !ValidacaoMensagem || !ValidacaoAssunto) {
          event.preventDefault();
          alert("Preencha os campos corretamente antes de enviar o formulário.");
        }
      }
      document.querySelector('form').addEventListener('submit', validarFormulario);
}



