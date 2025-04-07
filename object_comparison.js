const fishMarket = [
    {name: 'Hilsha', price: 900, wight: '05 kg', pieces: 8},
    {name: 'Rui', price: 700, wight: '07 kg', pieces: 15},
    {name: 'Katol', price: 600, wight: '06 kg', pieces: 10},
    {name: 'Tuna', price: 1500, wight: '03 kg', pieces: 2},
    {name: 'Boal', price: 800, wight: '04 kg', pieces: 7},
]

function cheapestFish(fishes){
    let cheapFish = fishes[0];

    for(const fish of fishes){
        if(fish.price < cheapFish.price && fish.pieces > cheapFish.pieces){
            cheapFish = fish;
        }
    }
    return cheapFish;
}
const cheapFishes = cheapestFish(fishMarket);
console.log('Most Cheapest Fish is Now :', cheapFishes);