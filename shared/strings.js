const strings = {
  positiveResponses: 
  [
    "You are becoming wiser by the momemt.",
    "You are on the path the enlightenment."
  ],
  negativeResponses: [
    "You are not yet engligtened",
    "The path to true englightenment comes with setbacks. Try again."
  ],
  operators: [
    {
      name: 'and',
      operator: '&'
    },
    {
      name: 'or',
      operator: '|'
    },
    {
      name: 'xor',
      operator: '^'
    },
    {
      name: 'not',
      operator: '~'
    },
    {
      name: 'left-shift',
      operator: '<<'
    },
    {
      name: 'right-shift',
      operator: '>>'
    },
    {
      name: 'zero-fill-right-shift',
      operator: '>>>'
    }
  ]
}

module.exports = strings
