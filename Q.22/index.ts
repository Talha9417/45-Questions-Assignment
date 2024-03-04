//Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.

//function  to create a fruit object
function fruitquality(name:string,color:string,) {
    return {
        name,
        color,
    }
};
//create an  array of index
let fruits=[
    fruitquality("Apple","Red"),
    fruitquality("Banana","Yellow"),
    fruitquality("Orange","Orange"),
    fruitquality("Grapes","Green"),
];
let unknownindex=6

console.log(
    `Fruit at index ${unknownindex}: `,fruits[unknownindex]
);//undefined
//print 
fruits.forEach(
    (fruit)=>{
        console.log(`
        Name: ${fruit.name}
        Color: ${fruit.color}`)
    }
);
