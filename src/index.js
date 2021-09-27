
const englishCode = 'en-US';
const spanishCode = 'en-SP'

exports.getAboutUsLink = (language, code) => {

    switch(language.toLowerCase()) {

        case englishCode.toLowerCase():
            return '/about-us'; 

        case spanishCode.toLowerCase():
            return '/acerda-de'
    }
    return 
}

exports.sum = (a, b) => {
    return a + b;
  }

  exports.capitalizeString = (value) => {
    return value.toUpperCase();
  }

  exports.reverseString = (value) => {
      return value.split('').reverse().join('')
  }

class Calculator {
    
    add(a, b){
        return a + b
    }
    subtract(a, b){
        return a - b
    }
    multiply(a, b){
        return a * b
    }
    divide(a, b){
        return a / b
    }
}

exports.calc = new Calculator();

exports.caeser = (letter, shift) => {

    const manipulator =  letter.split('').map((item, i) => {
        const number = Number(item.charCodeAt(0))
        if(number >= 97 && number <= 122) {
             if (number === 122) {
                  shift == 0 ? 122 : 96 + shift
             }
             const check = number + shift 
             if (check > 122) {
                 let sum = number
                 let base = 96
                 for (let i = 0; i <= shift; i++) {
                     sum < 123 ? sum += 1 : base += 1
                 }
                 return base
             }
 
             return check
        }
        if(number >= 65 && number <= 90) {
         if (number == 90) {
             shift == 0 ? number : shift + 64
         }
         const check = number + shift 
         if (check > 90) {
             let sum = number
             let base = 64
             for (let i = 0; i <= shift; i++) {
                 sum < 91 ? sum += 1 : base += 1
             }
             return base
         }
         return check
    }
    return number
    } )
 
    return manipulator.map(item => String.fromCharCode(item)).join('')
 }

 exports.scrutinize = (arr) => {
    let sortedArr = arr.sort();
    const length = arr.length;
    const max = sortedArr.pop();
    const min = sortedArr.shift();
    const getAverage = Math.floor(max/2)
    const averageArr = [];
    arr.map(item => {
      if (item <= getAverage) {
    averageArr.push(item)
    }
    })
    
    const average = averageArr.pop();
    
      return {
        max: max,
        min: min,
        length: length,
        average: average 
      }
      
    }

