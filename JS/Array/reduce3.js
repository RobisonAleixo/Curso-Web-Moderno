
Array.prototype.reduce2 = function (callback) {
    let acumulador = this[0];
    for(let i = 1; i < this.length; i++) {
        acumulador = callback(acumulador, this[i], i, this);
    }
    return acumulador;
};

const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: true },
    { nome: 'Pedro', nota: 9.8, bolsista: false },
    { nome: 'Ana', nota: 8.7, bolsista: true },
];

const todosBolsistas = (resultado, bolsista) => resultado && bolsista;
console.log(alunos.map(a => a.bolsista).reduce2(todosBolsistas));

const algumBolsista = (resultado, bolsista) => resultado || bolsista;
console.log(alunos.map(a => a.bolsista).reduce2(algumBolsista));

/**
 * REDUCE => resulta em um único valor de retorno
 * MAP =>  retorna um array como resultado
 * FOREACH => executa um callback em cada elementos do array
 * FILTER => retorna um novo array de acordo com o callback estabelecido
 */