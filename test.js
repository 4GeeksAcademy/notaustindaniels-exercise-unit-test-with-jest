const { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app.js');

test('adds 14 + 9 to equal 23', () => {
    let total = sum(14,9);
    expect(total).toBe(23);
})

test("One euro should be 1.206 dollars", function(){
    //import the function from app.js
    const { fromEuroToDollar } = require('./app.js')

    // use the function like its suppoed to be used
    const dollars = fromEuroToDollar(3.5)

    // if 1 euro are 1.206 dollars, then 3.5 euros should be (3.5 * 1.2)
    const expected = 3.5 * 1.2; 
    
    // this is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
})

test('converts 50 dollars to yen', () => {
    let yen = fromDollarToYen(50);
    let expected = 50 * 127.9 / 1.2;
    expect(yen).toBeCloseTo(expected);
})

test('converts 1000 yen to pound', () => {
    let pound = fromYenToPound(1000);
    let expected = 1000 * 0.8 / 127.9;
    expect(pound).toBeCloseTo(expected);
})