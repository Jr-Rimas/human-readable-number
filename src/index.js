module.exports = function toReadable (number) {
  const numbersOne = {
    '0' : '', '1' : 'one', '2' : 'two', '3' : 'three', '4' : 'four', '5' : 'five', '6' : 'six', '7' : 'seven', '8' : 'eight',
    '9' : 'nine',
  }

  const numbersTwo = {
    '0' : 'ten', '1' : 'eleven', '2' : 'twelve', '3' : 'thirteen', '4' : 'fourteen', '5' : 'fifteen', '6' : 'sixteen', '7' : 'seventeen',
    '8' : 'eighteen', '9' : 'nineteen',
  }

  const dozens = {
    '2' : 'twenty', '3' : 'thirty', '4' :'forty', '5' : 'fifty', '6' : 'sixty', '7' : 'seventy', '8' : 'eighty', '9' : 'ninety'
  }
	
  const hundreds = ['hundred'];
  let numb = number.toString();
  
    switch (true) {
      case numb == '0':
      	return 'zero'

      case numb.length == 1:
        return `${numbersOne[numb]}`;

      case numb.length == 2 && numb[0] == '1':
        return `${numbersTwo[numb[1]]}`;

      case numb.length == 2 && numb[0] != '1':
        return `${dozens[numb[0]]} ${numbersOne[numb[1]]}`.trim();

      case numb.length == 3:
        return `${numbersOne[numb[0]]} ${hundreds[0]} ${check(numb)}`.trim();
    }

  function check(numb) {
    if(numb[1] == '0') {
      return `${numbersOne[numb[2]]}`
    } else if(numb[1] == '1'){
      return `${numbersTwo[numb[2]]}`
    } else {
      return `${dozens[numb[1]]} ${numbersOne[numb[2]]}`
    }
  }
}
