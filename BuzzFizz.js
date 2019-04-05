const buzzFizz = (number) => {
    
   let returnString = ''
    
    if (number % 3 == 0){
        returnString = 'Fizz'
    }
    if (number % 5 == 0){
        returnString = returnString + 'Buzz'
    }
    if (returnString !== ''){
        return returnString
    }
    else {
        return number
    }
    }

    module.exports = buzzFizz
