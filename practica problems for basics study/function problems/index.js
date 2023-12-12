
//function return another function

function fn1(a){
    function fn2(b){
        return a * b;
    }
    return fn2;
}
let result = fn1(5);
console.log(result(5))