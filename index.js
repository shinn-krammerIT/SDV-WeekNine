// Week 9 notes
let x = "hello";
console.log(Number.isNaN(x));
console.log(Number.isFinite(x));
console.log(Number.isInteger(x));

function money(x,y) {
    x = Number(x);
    y =y || "$"

    if(Number.isNaN(x) || typeof y != "string") {
        return null;
    }
    return y + x.toFixed(2)
}

console.log(money(15, "$")) 
console.log(money(6))
console.log(money(7, "$$"))

