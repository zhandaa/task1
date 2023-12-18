function invertCase(s) {
    let res = '';
    for (let c of s) {
        res += c < "a" ? c.toLowerCase() : c.toUpperCase();
    }
    return res;
}
