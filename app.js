
const fromDollarToYen = function(valueInEuro) {
    
    let valueInDollar = valueInEuro * 1.07;
    
    return valueInDollar;
}

module.exports = { fromDollarToYen};