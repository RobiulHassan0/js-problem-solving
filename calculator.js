// call function inside anoter function

function add(num1, num2){
    const result = num1 + num2
    return result;
}
function subtract(num1, num2){
    const result = num1 - num2
    return result;
}
function multiply(num1, num2){
    const result = num1 * num2
    return result;
}
function division(num1, num2){
    const result = num1 / num2
    return result;
}

function calculator(a, b, operation){
    if(operation === 'add'){
        const result = add(a, b);
        return result
    }
    else if(operation === 'subtract'){
        const result = subtract(a, b);
        return result;
    }
    else if(operation === 'multiply'){
        const result = multiply(a, b);
        return result;
    }
    else if(operation === 'division'){
        
        const result = division(a, b);
        return result;
    }
    else{
        return 'Only "Add", "Subtract" "Multiply" and "Division" operation is allowed';
    }
}
const result = calculator(9, 4, 'division');
console.log(result);