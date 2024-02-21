function isPrime(i){
    a=prompt("Input a number:");
    i = +a;
    if(i>1000){
    console.log("ошибка");
    }
    else if((i === 0)||(i === 1)) {
    console.log("Число не является простым")
    }
    else if (i%i === 0) {
    console.log("Это число простое");
    }
    else {
    console.log("Данное число не является простым");
    }
    }
