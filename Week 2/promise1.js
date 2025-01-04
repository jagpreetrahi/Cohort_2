function wait(n){  // here n is always in second
    let a = 10;
    let b = 4;
    return new Promise(function (res , rej){
        setTimeout(() => {
            res(a + b)
        } , n * 1000) // conveeret into second to millisecond
    })
}

const result = wait(2);
result.then(function (value) {
    console.log(value);
})