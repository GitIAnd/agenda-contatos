const form = document.getElementById('form-agenda')
const inputNumeroContato = document.getElementById('numero-contato');
const contato = []
const numero = []

let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    if (inputNumeroContato.value.length < 10) {
        alert ("Número incorreto")
    } else {
        adicionaLinha ();
        atualizaTabela ();
    }
    
});

function adicionaLinha () {
    const inputNomeContato = document.getElementById('nome-contato');

    if (contato.includes(inputNomeContato.value)) {
        alert (`O contato: ${inputNomeContato.value} já existe`);
    } else {
        contato.push(inputNomeContato.value);
        numero.push(parseFloat(inputNumeroContato.value));

        let linha = '<tr>';
        linha += `<td>${inputNomeContato.value}</td>`;
        linha += `<td>${inputNumeroContato.value}</td>`;
        linha += `</tr>`;

        linhas += linha;
    }

    inputNomeContato.value = '';
    inputNumeroContato.value = '';
}

function atualizaTabela () {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

function validaNumero () {

    
}