function add(n1: number, n2: number): number {
    return n1 + n2;
}

function printResult(num: number) {
    console.log('Result: ' + num)
}

printResult(add(5, 12));

let combineValue: (a: number, b: number) => number;

combineValue = add;
//combineValue = printResult;

console.log(combineValue(8, 8))
