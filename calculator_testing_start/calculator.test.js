const {
  sum,
  subtract,
  multiply,
  divide,
  modulus,
  even,
  odd,
} = require("./calculator");


//28/28 tests passed 

//--------SUM TEST CASES ----------------------------------------------------------------------------------------------------

describe('sum test cases', () => { 
  
  test('can add two small positive numbers', () => {
    expected = 5;
    actual = sum(2, 3);
    expect(actual).toBe(expected);
  });

//-----
  
  test('can add two large positive numbers', () => {
    expected = 4500;
    actual = sum(1500, 3000);
    expect(actual).toBe(expected);
  });


//---------


  test('can add two negative numbers', () => {
    expected = -60;
    actual = sum(-30, -30);
    expect(actual).toBe(expected)
    
  });

//-------------  
  test('can add zero', () => {
    expected = 2;
    actual = sum(0, 2);
    expect(actual).toBe(expected)
    
  });
});



//--------SUBTRACT TEST CASES ----------------------------------------------------------------------------------------------------

describe('subtract test cases', () => { 
  
  test('can subtract two small positive numbers', () => {
    expected = 2;
    actual = subtract(5, 3);
    expect(actual).toBe(expected);
  });

//-----
  
  test('can subtract two large positive numbers', () => {
    expected = 3000;
    actual = subtract(6000, 3000);
    expect(actual).toBe(expected);
  });


//---------


  test('can subtract two negative numbers', () => {
    expected = 40;
    actual = subtract(-30, -70);
    expect(actual).toBe(expected)
    
  });

//-------------  
  test('can subtract zero', () => {
    expected = -8;
    actual = subtract(0, 8);
    expect(actual).toBe(expected)
    
  });
});



//--------MULTIPLY TEST CASES ----------------------------------------------------------------------------------------------------

describe('multiply test cases', () => { 
  
  test('can multiply two small positive numbers', () => {
    expected = 24;
    actual = multiply(8, 3);
    expect(actual).toBe(expected);
  });

//-----
  
  test('can multiply two large positive numbers', () => {
    expected = 60000;
    actual = multiply(300, 200);
    expect(actual).toBe(expected);
  });


//---------


  test('can multiply two negative numbers', () => {
    expected = 12;
    actual = multiply(-3, -4);
    expect(actual).toBe(expected)
    
  });

//-------------  
  test('can multiply zero', () => {
    expected = 0;
    actual = multiply(0, 3);
    expect(actual).toBe(expected)
    
  });
});




//--------DIVIDE TEST CASES ----------------------------------------------------------------------------------------------------

describe('divide test cases', () => { 
  
  test('can divide two small positive numbers', () => {
    expected = 2;
    actual = divide(6, 3);
    expect(actual).toBe(expected);
  });

//-----
  
  test('can divide two large positive numbers', () => {
    expected = 4;
    actual = divide(8000, 2000);
    expect(actual).toBe(expected);
  });


//---------


  test('can divide two negative numbers', () => {
    expected = 3;
    actual = divide(-60, -20);
    expect(actual).toBe(expected)
    
  });

//-------------  
  test('can divide zero', () => {
    expected = Infinity;
    actual = divide(6, 0);
    expect(actual).toBe(expected)
    
  });
});





//--------MODULUS TEST CASES ----------------------------------------------------------------------------------------------------

describe('modulus test cases', () => { 
  
  test('can mod two small positive numbers', () => {
    expected = 0;
    actual = modulus(6, 2)
    expect(actual).toBe(expected);
  });

//-----
  
  test('can mod two large positive numbers', () => {
    expected = 1500;
    actual = modulus(1500, 5000);
    expect(actual).toBe(expected);
  });


//---------


  test('can mod two negative numbers', () => {
    expected = -0;
    actual = modulus(-90, -30);
    expect(actual).toBe(expected)
    
  });

//-------------  
  test('can mod zero', () => {
    expected = 0;
    actual = modulus(0, 9);
    expect(actual).toBe(expected)
    
  });
});




//--------EVEN TEST CASES ----------------------------------------------------------------------------------------------------

describe('even test cases', () => { 
  
  test('can check small positive numbers', () => {
    expected = false;
    actual = even(3);
    expect(actual).toBe(expected);
  });

//-----
  
  test('can check large positive numbers', () => {
    expected = true;
    actual = even(6400);
    expect(actual).toBe(expected);
  });


//---------


  test('can check negative numbers', () => {
    expected = true;
    actual = even(-96);
    expect(actual).toBe(expected)
    
  });

//-------------  
  test('can check zero', () => {
    expected = true;;
    actual = even(0);
    expect(actual).toBe(expected)
    
  });
});



//--------ODD TEST CASES ----------------------------------------------------------------------------------------------------

describe('odd test cases', () => { 
  
  test('can check small positive numbers', () => {
    expected = true;
    actual = odd(7);
    expect(actual).toBe(expected);
  });

//-----
  
  test('can check large positive numbers', () => {
    expected = true;
    actual = odd(8519);
    expect(actual).toBe(expected);
  });


//---------


  test('can check negative numbers', () => {
    expected = false;
    actual = odd(-4);
    expect(actual).toBe(expected)
    
  });

//-------------  
  test('can check zero', () => {
    expected = false;
    actual = odd(0);
    expect(actual).toBe(expected)
    
  });
});

