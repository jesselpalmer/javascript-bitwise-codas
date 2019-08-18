import strings from '../shared/strings'
import { getResponse } from '../shared/guess-service'

const validate = () => {
  const firstOperand = parseInt(document.getElementById('firstOperand').attributes['value'].value)
  const secondOperand = parseInt(document.getElementById('secondOperand').attributes['value'].value)
  const operatorName = document.getElementById('operator').attributes['value'].value
  const guess = parseInt(document.getElementById('guess').value, 10)

  document.getElementById('response').innerHTML = getResponse(firstOperand, secondOperand, operatorName, guess)
}


const Index = () => {
  const currentProblem = strings.problems[0]
  const firstOperand =  currentProblem.firstOperand
  const secondOperand = currentProblem.secondOperand
  const operator = currentProblem.operator

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
}

export default Index