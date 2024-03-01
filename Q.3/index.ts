//Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase

//ANSWER:

let name_: string = "Muhammad Talha Tariq";

console.log(`
In LowerCase:  ${name_.toLowerCase()}
In UpperCase: ${name_.toUpperCase()}
In TitleCase:  ${name_.replace(/\b\w/g, (c) => c.toUpperCase())}
`);
