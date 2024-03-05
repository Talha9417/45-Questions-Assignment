/**Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for three different cities, at least one of which is not in the default country. */

function describe_city(name:string, country:string="Pakistan") {
    console.log(name + " is in " + country);    
};
describe_city("London", "United Kingdom"); // London is in United Kingdom

describe_city("New York", "United States"); // New York is in United States

describe_city("Tokyo", "Japan"); // Tokyo is in Japan

describe_city("Karachi",); // Karachi is in Pakistan//use default country

