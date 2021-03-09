/* // const scream = function () {
//     console.log("Aaaaaa!");
// };

// scream();

// const makeNoise = function () {
//     scream();
// };

// makeNoise();

const add = function (numberA, numberB) {
    return numberA + numberB;
};

const eight = add(3, 5);
console.log(eight);

const doCalculation = function () {
    const six = add(2, 4);
    console.log(six);
};

doCalculation(); */

/* const makePositive = function (number) {
    console.log("Entering makePositive..");
    console.log(number);
    return Math.abs(number);
};

const makeBigger = function (number) {
    console.log("Entering makeBigger..");
    console.log(number);
    if (number < 10) {
        return 10 + number;
    }
    return number;
};

const square = function (number) {
    console.log("Entering square..");
    console.log(number);
    return number * number;
};

const doComplexCalculation = function (number) {
    console.log("Entering doComplexCalculation..");
    console.log(number);
    const positiveNumber = makePositive(number);
    const bigNumber = makeBigger(positiveNumber);
    const squaredNumber = square(bigNumber);
    return squaredNumber;
};

console.log(doComplexCalculation(-1)); */

/* const age = function (kiddo) {
    if (kiddo >= 18) {
        return "Hello there"
    }
    return "Hey kiddo"
};

console.log(age(24)); */


const basePrice = function (price) {
    console.log("Entering basePrice..");
    return price / 1.21;
};

const vat = function (price) {
    console.log("Entering vat..");
    return price * 0.21;
};


const baseVAT = function (price) {
    console.log(price);
    const makeBasePrice = basePrice(price);
    const makeVat = vat(price);
    return price;
};

console.log(baseVAT(100));