// Testes, TDD e BDD
// Testes com o Mocha - Chai - Sinon

//Class Math
class Math {
    sum(a, b, callbakFunc) {
        setTimeout(() => callbakFunc(a + b), 5)
    }

    multiply(a, b) {
        return a * b
    }

    printSum(req, res, a, b) {
        res.load('index', a + b);
    }
}

module.exports = Math;