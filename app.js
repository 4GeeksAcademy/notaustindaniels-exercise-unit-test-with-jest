const fromDollarToYen = function(valueInDollar){
    // convert the given valueInDollar to yen
    let valueInYen = valueInDollar * 127.9 / 1.2;
    //return the yen value
    return valueInYen;
}

const fromYenToPound = function(valueInYen){
    // convert the given valueInYen to pound
    let valueInPound = valueInYen * 0.8 / 127.9;
    //return the pound value
    return valueInPound;
}

const fromEuroToDollar = function(valueInEuro){
    // convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.2;
    //return the dollar value
    return valueInDollar;
}

const sum = (a,b) => {
    return a + b
}

console.log(sum(7,3))

module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };