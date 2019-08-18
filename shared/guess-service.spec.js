const expect = require('chai').expect
const { isGuessCorrect, getPositiveReponse, getNegativeResponse } = require('./guess-service')

describe('guessService tests', () => {
  describe('isGuessCorrect tests', () => {
    describe('and tests', () => {
      it('should return true for 9 & 5 === 1', () => {
        const firstOperand = 9
        const secondOperand = 5
        const operator = '&'
        const guess = 1
        expect(isGuessCorrect(firstOperand, secondOperand, operator, guess)).to.equal(true)
      })

      it('should return true for 6 & 4 === 4', () => {
        const firstOperand = 6
        const secondOperand = 4
        const operator = '&'
        const guess = 4
        expect(isGuessCorrect(firstOperand, secondOperand, operator, guess)).to.equal(true)
      })

      it('should return false for 2 & 3 === 9', () => {
        const firstOperand = 2
        const secondOperand = 3
        const operator = '&'
        const guess = 9
        expect(isGuessCorrect(firstOperand, secondOperand, operator, guess)).to.equal(false)
      })
    })

    describe('or tests', () => {
      it('should return true for 3 | 4 === 0', () => {
        const firstOperand = 3
        const secondOperand = 4
        const operator = '|'
        const guess = 7
        expect(isGuessCorrect(firstOperand, secondOperand, operator, guess)).to.equal(true)
      })

      it('should return true for 4 | 8 === 4', () => {
        const firstOperand = 4
        const secondOperand = 8
        const operator = '|'
        const guess = 12
        expect(isGuessCorrect(firstOperand, secondOperand, operator, guess)).to.equal(true)
      })

      it('should return false for 6 & 4 === 12', () => {
        const firstOperand = 6
        const secondOperand = 4
        const operator = '|'
        const guess = 12
        expect(isGuessCorrect(firstOperand, secondOperand, operator, guess)).to.equal(false)
      })
    })
  })

  describe('isGuessCorrect tests', () => {
    describe('getPositiveReponse tests', () => {
      it('should return a response', () => {
        expect(getPositiveReponse()).to.not.equal(null)
      })
    })

    describe('getNegativeReponse tests', () => {
      it('should return a response', () => {
        expect(getNegativeResponse()).to.not.equal(null)
      })
    })
  })
})