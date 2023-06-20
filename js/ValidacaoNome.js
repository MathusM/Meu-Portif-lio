export default function ValidacaoNome () {

    let campoNome = document.getElementById('input_name').value;

    var areaNome = document.getElementById('input_name')


    if (campoNome === '' ) {
        alert ('Preencha seu nome!');
        areaNome.classList.add('.campo-invalido')
        return false;
    }

    else {
        return true;
    }
}