//Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.

let guestlist:string[] = [
    "Azfar",
    "Ali",
    "Haider",
    "Husnain",
    "Ateeb",
    "Waheed",
]
guestlist.forEach((guestname) => {
    console.log(`Dear ${guestname}! We have a dinner plan today please come and join us on dinner.`)
    
})
