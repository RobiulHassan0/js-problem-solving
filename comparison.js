const robin = 34;
const hassan = 43;
const ahmed = 59;

if(robin > hassan && robin > ahmed ){
    console.log('Robin is Greater than hassan and Ahmed')
}
else if(ahmed > robin && ahmed > hassan){
    console.log('Ahmes is greater than others')
}
else{
    console.log('hassan is the Ultimate boss')
}

function maxOfThree(num1, num2, num3){
    if(num1 > num2 && num1 > num3){
        return num1;
    }
    else if(num2 > num3 && num2 > num3){
        return num2;
    }
    else{
        return num3;
    }
}
const boss = maxOfThree(robin, hassan, ahmed);
console.log(boss);

const max = Math.max(robin, ahmed, hassan);
console.log('max is:', max)