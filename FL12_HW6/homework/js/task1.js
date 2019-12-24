let a = +prompt("What's a?");
let b = +prompt("What's b?");
let c = +prompt("What's c?");
if (isNaN(a) || isNaN(b) || isNaN(c) || a===0) {
    console.log('Invalid input data');
}else {
    const two = 2;
    const four = 4;
    let D = Math.pow(b, two) - four * a * c;
    if (D > 0) {
        let value1 = Math.round((-b + Math.sqrt(D)) / (two*a));
        let value2 = Math.round((-b - Math.sqrt(D)) / (two*a));
        console.log(`x1 = ${value1} and x2 = ${value2}`);
    }else if (D === 0) {
        let value = Math.round(-b / (two*a));
        console.log(`x = ${value}`);
    }else {
        console.log('No solution');
    }
}