const returnPromiseFunction = () => {
    return new Promise((resolve, reject) => {
        setTimeout(( ) => {resolve('I resolved!')}, 1000);
    });
};
const prom = returnPromiseFunction();
console.log(prom)

console.log("This is the first line of code in app.js.");
// Keep the line above as the first line of code
// Write your code here:

const usingSTO = ()=>{
    console.log("This  synchronous code.");
}
setTimeout(usingSTO, 46);

// Keep the line below as the last line of code:
console.log("This is the last line of code in app.js.");
