let value1 = prompt("What's a?");
let value2 = prompt("What's b?");
let value3 = prompt("What's c?");
if (!value1 || !value2 || !value3) {
    console.log('Input values should be ONLY numbers');
}else {
    let a = +value1;
    let b = +value2;
    let c = +value3;
    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        console.log('Input values should be ONLY numbers');
    }else {
        if (a>0 && b>0 && c>0) {
            if (a+b>c && a+c>b && b+c>a) {
                if (a===b && b===c && a===c) {
                    console.log('Equilateral triangle');
                }else if (a===b || b===c || a===c) {
                    console.log('Isosceles triangle');
                }else {
                    console.log('Scalene triangle');
                }
            }else {
                console.log('Triangle doesn’t exist');
            }
        }else {
            console.log('A triangle must have 3 sides with a positive definite length ');
        }
    }
}