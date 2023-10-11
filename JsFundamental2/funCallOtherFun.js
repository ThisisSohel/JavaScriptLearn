function cutFruitPieces (fruit){
    return fruit * 4;
}

const fruitProcessor = function (apples, oranges){
    const applePieces = cutFruitPieces (apples);
    const orangePieces = cutFruitPieces (oranges);

    const juice = `This Juice is made with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;

    return juice;

}

console.log(fruitProcessor(2, 3));