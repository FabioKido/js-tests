// Testes, TDD e BDD
// Testes com o Mocha

//Class Math
class Math {
    sum(a, b, callbakFunc) {
        setTimeout(() => callbakFunc(a + b), 5)
    }

    multiply(a, b) {
        return a * b
    }
}

module.exports = Math;