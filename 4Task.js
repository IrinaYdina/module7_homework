function num(a,b) {
const i = setInterval(() => {
console.log(a++);
if (a > b) clearInterval(i);
}, 1000)
}

num(5, 15);
