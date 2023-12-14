function fib(n) {
    let a = 0, b = 1;
    while (n > 0) {
        b = a + b;
        a = b - a;
        n--;
    }
    return a;
}

export default fib;