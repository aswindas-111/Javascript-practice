
//function return another function

function fn1(a){
    function fn2(b){
        return a * b;
    }
    return fn2;
}
let result = fn1(5);
console.log(result(5))


//callback function 

function sum(result){
    console.log(result)
}

function add(a,b,functn){
    total = a+b;
    functn(total)
}

add(10,500,sum)



//countdown program using setTimeout

function countDown(num){
    console.log(num)
    num--
    if (num>=0){
        setTimeout(function(){
            countDown(num);
        },1000);
    }
};

countDown(10)