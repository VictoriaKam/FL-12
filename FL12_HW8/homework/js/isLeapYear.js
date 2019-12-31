function isLeapYear(x) {
    let date = new Date(x);
    let year = date.getFullYear();
    if (!isNaN(year)) {
        if (year % 4 === 0) {
            if (year % 100 === 0) {
                if (!(year % 400 === 0)) {
                    return `${year} is not a leap year`; 
                } else {
 return `${year} is a leap year`; 
}
            } else {
 return `${year} is a leap year`; 
} 
        } else {
            return `${year} is not a leap year`; 
}
    } else {
    return `Invalid Date`; 
}  
}
isLeapYear('2200-01-15 13:00:00'); 
isLeapYear(1213131313135465656654564646542132132131); 
isLeapYear('2020-01-01 00:00:00'); 