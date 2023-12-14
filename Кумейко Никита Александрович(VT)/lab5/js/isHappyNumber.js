function isHappyNumber(n) {
    let t = 0;
    //let s = '';
    for (let i = 0; i < 10; i++) {
        //s += ' ' + n;
        while (n > 0) {
            t += (n % 10) ** 2;
            n = Math.floor(n / 10);
        }
        n = t;
        t = 0;
    }
    //console.log(s);
    return n === 1;
}
