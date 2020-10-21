let promInstant = (treshhold) => new Promise((resolve, reject) => {
    console.log('entering promise with '+treshhold);
    const a =Math.random();
    if (a>treshhold) resolve(a); else reject({treshhold,a});
});
let promDelayed = (treshhold) => new Promise((resolve, reject) => {
    console.log('entering promise with '+treshhold);
    setTimeout(() => {const a =Math.random();if (a>treshhold) resolve(a); else reject({treshhold,a});},500)
});

const fn = async ()=>{
    try {
        let a1 = await promInstant(0.01);
        let a2 = await promDelayed(0.02);
        console.log(`we continue with ${a1} ${a2}`)
    }
    catch (e) {
        console.log(e)
    }
    console.log('out of promises in fn')
}

console.log(promInstant(0.2));
console.log(promDelayed(0.6))
pr1 = promInstant(0.91)
console.log(pr1)
pr1.then((data)=>console.log("resolved with "+data)).catch(()=>console.log('rejected'))
// setTimeout(()=>console.log(pr),100)
fn()
console.log('after fn')

