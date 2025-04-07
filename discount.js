
function discount(quantity){
    if(quantity <= 50){
        const total = quantity * 100;
        return total;
    }
    else if(quantity <= 80){
        const total = quantity * 90;
        return total;
    }
    else{
        const total = quantity * 80;
        return total;
    }
}
const total = discount(100);
console.log(total);


// Layered Discount Price 

function layeredDiscount(quantity){
    let first100Price = 100;
    let secon200Price = 90;
    let above200Price = 80;

    if(quantity <= 100){
        const total = quantity * first100Price;
        return total;
    }
    else if(quantity <= 200){
        const above100Pieces = quantity - 100;
        const first100PiecePrice = 100 * first100Price;
        const above100Price = above100Pieces * secon200Price;
        const totalPrices = first100PiecePrice + above100Price;
        return totalPrices;
    }
    else{
        const above200Pieces = quantity - 200;
        const first100PiecePrice = 100 * first100Price;
        const second100PiecePrice = 100 * secon200Price;
        const above200PiecePrice = above200Pieces * above200Price; 
        const total = first100PiecePrice + second100PiecePrice + above200PiecePrice
        return total
    }
}
const totalQuantity = layeredDiscount(290);
console.log(totalQuantity)