// Versão com concatenação
function imprimirPessoaComConcatenacao() {
    const nome = prompt("Digite seu nome:");
    const cor = prompt("Digite sua cor favorita:");

    console.log("A cor favorita de " + nome + " é " + cor);
}

// Versão com Template String
function imprimirPessoaComTemplateString() {
    const nome = prompt("Digite seu nome:");
    const cor = prompt("Digite sua cor favorita:");

    console.log(`A cor favorita de ${nome} é ${cor}`);
}
// Versão com concatenação + citação
function imprimirPessoaComCitandoConcatenacao() {
    const nome = prompt("Digite seu nome:");
    const cor = prompt("Digite sua cor favorita:");
    const citacao = prompt("Digite sua citação favorita:");

    console.log("A cor favorita de " + nome + " é " + cor + ". Sua citação favorita é: \"" + citacao + "\"");
}

// Versão com template string + citação em uma única linha
function imprimirPessoaComCitandoTemplate() {
    const nome = prompt("Digite seu nome:");
    const cor = prompt("Digite sua cor favorita:");
    const citacao = prompt("Digite sua citação favorita:");

    console.log(`A cor favorita de ${nome} é ${cor}. Sua citação favorita é: "${citacao}"`);
}
function analisarNome() {
    const nome = prompt("Digite seu nome:");

    const nomeMaiusculo = nome.toUpperCase();
    const tamanhoNome = nome.length;
    const contemLetraA = nome.toLowerCase().includes("a");

    console.log("Seu nome em maiúsculas: " + nomeMaiusculo);
    console.log("Seu nome tem " + tamanhoNome + " caracteres");
    console.log(`Seu nome contém a letra "A"? ${contemLetraA}`);
}
