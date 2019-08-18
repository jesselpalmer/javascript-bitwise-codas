const strings = require('./strings')

const getPositiveReponse = () => {
  const numPositveResponses = strings.positiveResponses.length
  const index = Math.floor((Math.random() * numPositveResponses))

  return strings.positiveResponses[index]
}

const getNegativeResponse = () => {
  const numNegativeResponses = strings.negativeResponses.length
  const index = Math.floor((Math.random() * numNegativeResponses))

  return strings.negativeResponses[index]
}

const isGuessCorrect = (firstOperand, secondOperand, operateName, guess) => {
  switch (operateName) {
    case '&':
      return (firstOperand & secondOperand) === guess
    case '|':
      return (firstOperand | secondOperand) === guess
    case '^':
      return (firstOperand ^ secondOperand) === guess
    case '~':
      return (~firstOperand) === guess
    case '^':
      return (firstOperand ^ secondOperand) === guess
    case '<<':
      return (firstOperand << secondOperand) === guess
    case '>>':
      return (firstOperand >> secondOperand) === guess
    case '>>>':
      return (firstOperand >>> secondOperand) === guess
    default:
      return false
  }
}

const getResponse = (firstOperand, secondOperand, operatorName, guess) => {
  if (isGuessCorrect(firstOperand, secondOperand, operatorName, guess)) {
    return getPositiveReponse()
  } else {
    return getNegativeResponse()
  }
}

module.exports = { isGuessCorrect, getPositiveReponse, getNegativeResponse, getResponse }
