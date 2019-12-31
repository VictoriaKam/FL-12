function countNumbers (x) {
    let f = x.split('').filter(item => !isNaN(item)).reduce(function(cnt, numb) {
        cnt[numb] = (cnt[numb] || 0) + 1;
        return cnt;
      }, {});
      return f;
}
countNumbers('erer384jj4444666888jfd123');