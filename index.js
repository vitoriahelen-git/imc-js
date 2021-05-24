const calculaImc = (peso, altura) => {
    const resultado = peso / (altura * altura);
    return resultado;
}

const mensagemImc = (resultado) => {
    if (resultado < 17) {
        return 'Muito abaixo do peso';
    }
    if (resultado <= 18.49) {
        return 'Abaixo do peso';
    }
    if (resultado <= 25) {
        return 'Peso normal';
    }
    if (resultado <= 30) {
        return 'Acima do peso';
    }
    if (resultado <= 35) {
        return 'Obesidade I';
    }
    if (resultado <= 40) {
        return 'Obesidade II (severa)';
    }
    if (resultado >  40) {
        return 'Obesidade III (mórbita)'
    }

}
const botao = document.getElementById('resultado')
const peso = document.getElementById('peso')
const altura = document.getElementById('altura')

botao.addEventListener('click', function (e) {
    e.preventDefault()
    const resultado = calculaImc(peso.value, altura.value)
    const mensagem = mensagemImc(resultado)
    const imc = document.getElementById('imc')
    const diagnostico = document.getElementById('diagnostico')

    imc.value = resultado
    diagnostico.value = mensagem
})