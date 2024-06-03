
const IsPrime = (n) => {
    let x = 2;
    while (n > x) {
        if (n % x === 0) return false;
        else x++;
    }
    return true


}

console.log(IsPrime(100));
