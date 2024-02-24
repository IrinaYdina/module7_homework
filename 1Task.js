const array=[0,1,2,3,4,5,6];
let chetnie=0;
let nechetnie= 0;

for (let i = 0; i<array.length; i++) {
if (array[i] === 0||null||NaN) {
console.log(`0`);
}
if (array[i] % 2 === 0) {
chetnie++;
}
else {
nechetnie++;
}
}
console.log("Total even number: " + chetnie)
console.log("Total odd number: " + nechetnie);
