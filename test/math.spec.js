const assert = require('assert');
const Math = require('../src/math');
const expect = require('chai').expect;
const sinon = require('sinon');

// Note: Só funciona com um único describe/expect sendo chamado

// Teste para funções normais - não precisa do chai
describe('Math class', function () {
    it('Sum two numbers', function () {
        const math = new Math();

        try {
            assert.equal(math.sum(5, 5), 10);
        } catch(e) {
            console.log(e)
        }
    })
})

// Teste para funções com assincronismo - utiliza-se o done, que executa após terminar o tempo da função
let value = 0;

describe('Math class', function () {
    // Hooks (before, beforeEach, after, afterEach) -  Usado para executar algo em relação ao it,
    // no hook na posição literalmente descrita no seus nomes
    beforeEach(function () {
        value = 0
    })

    it('Sum two numbers', function (done) {
        const math = new Math();
        this.timeout(3000); // Dá mais tempo para o mocha fazer o teste 

        value = 5

        math.sum(value, 5, value => {
            assert.equal(value, 10);
            done();
        })
    })

    // Usar it.skip para pular o teste ou it.only para ser o único executado
    it('Multiply two numbers', function() {
        const math = new Math();

        value = 5

        assert.equal(math.multiply(value, 5), 25);
    })
})

// Usando o CHAI como ferramenta de asserting no lugar do assert
describe('Math class', function () {
    it('Multiply two numbers', function () {
        const math = new Math();

        expect(math.multiply(5, 7)).to.equal(35);
    })

    it('Has propertie in the obj', function () {
        const obj = {
            name: "Fábio Tester"
        }

        expect(obj).to.have.property('name');
    })

    it('It has an equal name in the obj', function () {
        const obj = {
            name: "Fábio Tester"
        }

        expect(obj).to.have.property('name').equal('Fábio Tester');
    })

    it('Are the objs equals', function () {
        const obj = {
            name: "Fábio Tester"
        }

        const obj2 = {
            name: "Fábio Tester"
        }

        expect(obj).to.deep.equal(obj2);
    })

    // Usando o Sinon para testar funções
    it('Calls res with sum and index values', function() {
        const req = {};
        const res = {
            load: sinon.spy()
        }

        const math = new Math()

        math.printSum(req, res, 5, 5)

        //expect(res.load.calledOnce)
        expect(res.load.args[0][1]).to.equal(10)
    })
})

