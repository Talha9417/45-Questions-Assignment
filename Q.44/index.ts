//Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.

function makeSandwich(...ingredients:string[]):void {
    console.log(`Your Sandwich includes the following ingredients: `);
    if (ingredients.length===0) {
        console.log(`You have not ordered any ingredients for your Sandwich`);
    } else {
        ingredients.forEach((ingredient,i)=>{
            console.log(`${i+1}. ${ingredient}`);
        })
    }console.log("\n");
    
};


makeSandwich("Mushrooms", "Onions", "Green Peppers", "Spinach", "Tomatoes");

makeSandwich("Peanut Butter", "Jelly", "Banana", "Honey");

makeSandwich("mushrooms", "onions");
makeSandwich();
