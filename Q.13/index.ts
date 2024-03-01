//Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”

let favoritetransport: Array<[transport: string, brand: string]> = [];
favoritetransport.push(["Motorcycle", "Hero",]);
favoritetransport.push(["Motorcycle", "Honda CD-70"]);
favoritetransport.push(["Motorcycle", "Honda CD-125"]);
favoritetransport.push(["Motorcycle", "Sohrab"]);
favoritetransport.push(["Car", "Honda"]);
favoritetransport.push(["Car", "Kia Sportage"]);
favoritetransport.push(["Car", "MG"]);
favoritetransport.forEach(([transport, brand]) => {
    console.log(`I would like to own a ${brand} ${transport}.`);
})
