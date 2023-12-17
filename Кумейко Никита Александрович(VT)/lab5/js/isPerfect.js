function isPerfect(n) {
    let res = 0;
    for (let i = 1; i*2 <= n; i++) {
        if (n % i === 0) {
            res += i;
        }
    }
    return res === n;
}
