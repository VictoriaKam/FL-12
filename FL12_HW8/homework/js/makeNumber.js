function makeNumber(x) {
    let m = x.split('').filter(item => !isNaN(item)).join('');
    return m;
}
makeNumber('123098h76gfdd'); 
makeNumber('erer384jjjfd123');
makeNumber('ijifjgdj');