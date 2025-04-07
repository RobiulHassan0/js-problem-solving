function bazar(riceKg, beefKg, oilKg){
    const ricePrice = 70;
    const beefPrice = 700;
    const oilPrice = 220;

    const totalRice = ricePrice * riceKg;
    const totalBeef = beefPrice * beefKg;
    const totalOil = oilPrice * oilKg;

    const totalBazar = totalRice + totalBeef + totalOil;

    return totalBazar;
}

const bazarGoods = bazar(1, 1, 1);
console.log('total Bazar Cost :', bazarGoods);

