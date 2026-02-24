//addition

function add(a,b){
    return a+b;
}

//subtraction

function subtraction(a,b){
    return a-b;
}

//multiplication

function multiplication(a,b){
    return a*b;
}

//division
function division(a,b){
    if (b === 0) {
        return 'Error: Division by zero';
    }
    return a/b;
}