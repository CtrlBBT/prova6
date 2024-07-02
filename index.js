// declara um array de notas, sendo o array
// composto de valores númericos
let notas = [7.5, 8.0, 6.0, 9.5, 5.0, 8.5, 7.0, 10.0, 6.5, 9.0]

notas.push(8.0); // ref D

function media(notas) {
    let soma = 0;

    for (let i = 0; i < notas.length; i++) {
        soma += notas[i]; // ref A
    }

    return soma / notas.length;
}

function menorNota(notas) {
    let menorNota = notas[0]; // ref B

    for (let i = 0; i < notas.length; i++) {
        const element = notas[i];
        
    }
}