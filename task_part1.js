// Task 01 : convert temperature from Celsius to Fahrenheit.

function convertToFarenheit(temperature){
    const multiply = temperature * 9;
    const division = multiply / 5;
    const fahrenheit = division + 32
    
    return fahrenheit;
}
console.log('Celsius to Farenheit:', convertToFarenheit(100));

// ------Fahrenheit to Celsius--------------

function convertToCels (temperature){
    return (temperature - 32) * 5 / 9;
}
console.log('Farn to Cels:', convertToCels(100));


// ------Fahrenheit to Celsius with Fixed Decimale--------------

function convertToCelsFixed(temperature){
    return ((temperature - 32) * 5 / 9).toFixed(2); // Limit the result to 2 decimal places
}
console.log('Fixed Farn to Cels:', parseFloat(convertToCelsFixed(100))); //used parseFloat to convert string to Number 


// convert Celsius to Fahrenheit with Fixed Decimale

function convertToFarn(celsius){
    return ((celsius * 9 / 5) + 32).toFixed(2)
}
console.log('Convert to Farenheight:', parseFloat(convertToFarn(37.78)))

// convert Celsius to Fahrenheit without Fixed Decimale
function convertTo(celsius){
    return (celsius + 32) * 9 / 5; 
}
console.log('Convert to Celsius:', convertTo(37.78))



// Task 02: 

function find(numbers, find){
    let counted = 0;
    for(const num of numbers){
        if(num === find){
            counted++;
        }
    }
    return counted;
}
const numbers = [5,6,11,12,98, 5]
console.log('Five Counted :', find(numbers, 5))
console.log('25 Counted :', find(numbers, 25))


function findNumber(numbers, find1, find2){
    let count1 = 0;
    let count2 = 0

    for(const num of numbers){
        if(num === find1){
            count1++;
        }
        if(num === find2){
            count2++;
        }
    }
    return {[find1]: count1, [find2]: count2};
}
const nums = [5,6,11,12,98, 5]
console.log('Task 02 Ans :', findNumber(nums, 5, 6))
console.log('Task 02 Ans :', findNumber(nums, 11, 25))

// --------------

const number = [5,6,11,12,98, 5]
function findNumber(input, find){
    let count = 0;
    for(const number of input){
        if(number === find){
            count++;
        }   
    }
    return count
}
console.log('count five :', findNumber(number, 5))
console.log('count twenty Five :', findNumber(number, 25))



// Task 03: count number of vowels

function findVowels(text){
    let vowels = 'aeiouAEIOU';
    let countVowels = 0;
    let findVowel = [];

    for(const character of text){
        if(vowels.includes(character)){
            countVowels++;
            findVowel.push(character);
        }
    }
    return{
        count: countVowels,
        vowels: findVowel.join(',')
    }
}
const vowels = findVowels('Hello Javascript wOrld')
console.log('Number of Vowels: ', vowels.count);
console.log('Output of Vowels: ', vowels.vowels);


// Task 04: find the longest word in a string

function findLongestWord(text){
    let words = text.split(' ');
    let longestWord = '';

    for(let word of words){
        if(word.length > longestWord.length){
            longestWord = word;
        }
    }
    return longestWord;
}
const word = findLongestWord('I am Learning Javascript for Web Development');
console.log('Longest Word :', word)


// Task 05: Generate a random number between 10 to 20

console.log(Math.floor(Math.random() * (20-10+1)) + 10);

function generateNumber(){
    return Math.floor(Math.random()* (11)) + 10;
}
console.log(generateNumber())