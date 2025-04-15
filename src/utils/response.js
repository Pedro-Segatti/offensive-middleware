const phrases = [
    "Se burrice fosse energia, você iluminaria uma cidade inteira.",
    "Seu código é tão confuso que até o compilador pediu demissão.",
    "Você é a razão pela qual existem testes automatizados.",
    "Seu QI é tão baixo que precisa de um elevador para alcançar o senso comum.",
    "Seu código é tão ruim que até o Git se recusa a versioná-lo.",
    "Você é a prova viva de que nem todos os bugs são no código.",
    "Seus commits são tão inúteis quanto um 'console.log' em produção.",
    "Você tem tanto carisma quanto um bloco de código morto.",
    "Seu código é tão feio que até o Stack Overflow te baniu.",
    "Você é o tipo de erro que nem o debugger consegue rastrear."
];

function getRandomPhrase() {
    return phrases[Math.floor(Math.random() * phrases.length)];
}

function eggForDev(req, res, next) {
    const randomPhrase = getRandomPhrase()
    res.setHeader('x-egg-for-dev', randomPhrase);
    next();
}

module.exports = { eggForDev, getRandomPhrase, phrases };
