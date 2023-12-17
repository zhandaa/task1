
export default function reverseInt(n) {
    let res = 0;
    while (n !== 0) {
        res *= 10;
        res += n % 10;
        n = Math.trunc(n / 10);
    }
    return res;
}
