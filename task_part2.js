// Task 01 : lowes number in array
const numbers = [167, 190, 120, 165, 137];

function lowestNumber(numbers){
    let lowest = numbers[0];

    for(const num of numbers){
        if(num < lowest){
            lowest = num;
        }
    }
    return lowest;
}
console.log(lowestNumber(numbers)); 



// Task 02 : Find the smallest name.

const names = ['rahim', 'robin', 'rafi', 'ron', 'rashed']; 

function smallestName(names){
    let smallest = names[0];
    for(const name of names){
        if(name.length < smallest.length){
            smallest = name;
        }
    }

    return smallest;
}
console.log(smallestName(names));



// Task 03 : calculate the total budget required to buy electronics.

function calculateElectronicsBudget(laptops, tablets, mobiles){
    const products = [
        { name: 'laptop', price: 35000, quantity: laptops },
        { name: 'tablet', price: 15000, quantity: tablets },
        { name: 'mobile', price: 20000, quantity: mobiles }
    ];

    let totalMoneyRequired = 0;

    for(const product of products){
        totalMoneyRequired += product.price * product.quantity;
    }
    return totalMoneyRequired;
}
console.log(calculateElectronicsBudget(1 ,1, 1))



// Task 04: returns the average price of each phone.

const phones = [
    { model: "PhoneA", brand: "Iphone", price: 95000 },
    { model: "PhoneB", brand: "Samsung", price: 40000 },
    { model: "PhoneC", brand: "Oppo", price: 26000 },
    { model: "PhoneD", brand: "Nokia", price: 35000 },
    { model: "PhoneE", brand: "Iphone", price: 105000 },
    { model: "PhoneF", brand: "HTC", price: 48000 },
];

function findAveragePhonePrice(phones){
    let average = 0;

    for(const phone of phones){
        average += phone.price
    }
    const averagePrice = average / phones.length;
    return averagePrice;
}
console.log(findAveragePhonePrice(phones))


// Task 05: calculate the total salary provided by the company in a month.

const employees = [
    { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
    { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
    { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
    { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
];

function monthlySalary(company){
    let totalMonthlySalary = 0;

    for(const staff of company){
        const salary = staff.increment * staff.experience + staff.starting;
        totalMonthlySalary += salary;
    }
    return totalMonthlySalary
}
console.log(monthlySalary(employees))