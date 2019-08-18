import strings from './strings'

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

const validate = () => {
  const firstOperand = parseInt(document.getElementById('firstOperand').attributes['value'].value)
  const secondOperand = parseInt(document.getElementById('secondOperand').attributes['value'].value)
  const answer = parseInt(document.getElementById('guess').value, 10)

  if ((firstOperand & secondOperand) === answer) {
    const text = getPositiveReponse()
    document.getElementById('response').innerHTML = text
  } else {
    const text = getNegativeResponse()
    document.getElementById('response').innerHTML = text
  }
}

const firstOperand = Math.floor((Math.random() * 10) + 1)
const secondOperand = Math.floor((Math.random() * 10) + 1)
const operator = strings.operators[0].operator

const Index = () => {
  return (
    <div>
      <span id="firstOperand" value={firstOperand}>{firstOperand}</span>
      <span id="operator" value={operator}> {operator} </span>
      <span id="secondOperand" value={secondOperand}>{secondOperand}</span>
      &nbsp;
      <input type="text" id="guess" />
      <button type="submit" onClick={validate}>
        Submit
      </button>
      <span id="response"></span>
    </div>
  )
};

export default Index;