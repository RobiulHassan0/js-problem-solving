const products = [
    {name: 'Watch', price: 300, quantity: 5},
    {name: 'Headphone', price: 700, quantity: 2},
    {name: 'Mouse', price: 500, quantity: 3},
    {name: 'Mobile Stand', price: 200, quantity: 4},
]

// Calculation of All Products price

function shoppingCart(products){
    let total = 0;

    for(const product of products){
        const itemPrice = product.price * product.quantity;
        total = total + itemPrice;
    }

    return total;
}

const totalCost = shoppingCart(products)
console.log('Total Cost :', totalCost);


// Calculate of a certain product price

function shoppingCart2(products, productName){
    let total = 0;

    for(const product of products){
        if(product.name === productName){
            const itemPrice = product.price * product.quantity;
            total = total + itemPrice;
        }
    }
    return total;
}
const totalShopping = shoppingCart2(products, 'Mouse')
console.log('Watch Subtotal :', totalShopping);
console.log('Mouse SubTotal :', shoppingCart2(products, 'Watch'))


