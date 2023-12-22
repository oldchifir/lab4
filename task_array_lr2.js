let n = 7, arrayA = new Array(n), arrayB = new Array(Math.floor(n / 3));

function getRandomArbitrary(min, max) {
    return Math.trunc(Math.random() * (max - min) + min);
}
for (let i = 0; i < n; i++) {
    arrayA[i] = getRandomArbitrary(1, 100);
}
let j = 0;
for (let i = 1; i <= n; i++) {
    if (i % 3 == 0) {
        arrayB[j] = arrayA[i - 1];
        j++;
    }
}
console.log(arrayA, arrayB)