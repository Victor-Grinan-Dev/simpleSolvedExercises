const fibonacci = (n=10) => {
    const fiboArray = [];

    fiboArray.push(0);
    fiboArray.push(1);
    let result;
    let before = 0;
    let current = 1;

    for (let i = 0; i <= n; i++){   
    
        result = before + current;
        before = current;
        current = result;
        fiboArray.push(current);
    }
    console.log(fiboArray);
    return fiboArray;
}


fibonacci(15);