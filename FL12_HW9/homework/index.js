function convert() {
    let m = [];
    for(let i=0; i < arguments.length; i++) {
        if (typeof arguments[i] === 'string') {
            m.push(+arguments[i]);
        } else {
            m.push(String(arguments[i]));
        }
    }
    return m;
}

function executeforEach (array, func) {
    for (let i=0; i < array.length; i++) {
        func(array[i]); 
    }
}

function mapArray (array, func) {
    let m = [];
    executeforEach(array, function(el) {
        m.push(func(+el));
    });
    return m;
}

function filterArray (array, func) {
    let n = [];
    executeforEach(array, function(el) {
        if (func(el)) {
            n.push(el);
        }
    })
    return n;
}

function flipOver(string) {
    let newStr = '';
    for (let i = string.length - 1; i >= 0; i--) {
        newStr += string[i];
    }
    return newStr;
}

function makeListFromRange(array){
    let newArr = [];
    for (let i = array[0]; i <= array[1]; i++) {
        newArr.push(i)
    }
    return newArr;
}

function getArrayOfKeys (array, keyname) {
    let arrKeys = [];
    executeforEach(array, function(el) {
        arrKeys.push(el[keyname]);
    });
    return arrKeys;
}

function substitute(array) {
    let s = [];
    const min = 30;
    mapArray(array, function(el) {
        if (el < min) {
            el = '*';
        }
        s.push(el);
    });
    return s;
}

function getPastDay (date, daysAmount) {
    let newDate = new Date(date);
    newDate.setDate(newDate.getDate() - daysAmount);
    return newDate.getDate();
}

function formatDate(date) {
    let dayOfMonth = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let hour = date.getHours();
    let minutes = date.getMinutes();
    const ten = 10;
    hour = hour < ten ? '0' + hour : hour;
    minutes = minutes < ten ? '0' + minutes : minutes;
    return `${year}/${month}/${dayOfMonth} ${hour}:${minutes}`
}