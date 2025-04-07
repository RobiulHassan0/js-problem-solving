const heights = [19, 32, 98, 58, 48, 26, 15, 62, 75, 5];

function getMax(numbers){
    let max = numbers[0];
    for(const num of numbers){
         if(num > max){
            max = num;
        }
         
    }
    return max
}
const max = getMax(heights);
console.log('most tallest is:', max);0

function getMinimum(numbers){
    let min = numbers[0]
    for(const num of numbers){
        if(num < min){
            min = num;
        }
    }
    return min;
}
console.log(getMinimum(heights));