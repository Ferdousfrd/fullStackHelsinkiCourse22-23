//Learning some new javaScript functions

const characters = [
    {
        name: 'Luke Skywalker',
        height: 172,
        mass: 77,
        eye_color: 'blue',
        gender: 'male',
    },
    {
        name: 'Darth Vader',
        height: 202,
        mass: 136,
        eye_color: 'yellow',
        gender: 'male',
    },
    {
        name: 'Leia Organa',
        height: 150,
        mass: 49,
        eye_color: 'brown',
        gender: 'female',
    },
    {
        name: 'Anakin Skywalker',
        height: 188,
        mass: 84,
        eye_color: 'blue',
        gender: 'male',
    },
];


/*MAP

//Get an array of all names
const names = characters.map(props=>props.name)
console.log(names)
//Get an array of all heights
const heights = characters.map(props=>props.height)
console.log(heights)
//Get an array of objects with just name and height properties
const nameNHeight = characters.map(props=>{
    return {name: props.name, height: props.height}
})
console.log(nameNHeight)
//Get an array of all first names and last names
const fN_lN = characters.map(props=>{
    return {fN: props.name.split(" ")[0], lN: props.name.split(" ")[1]}
})
console.log(fN_lN)
*/

/*REDUCE

//Get the total mass of all characters
const totalMass = characters.reduce((total, cur)=>total+cur.mass,0)
console.log(totalMass)
//Get the total height of all chracters
const totalHeight = characters.reduce((total,cur)=>total+cur.height,0)
console.log(totalHeight)
//Get the total number of characters in all the character names
const totalNC = characters.reduce((total,cur)=>total+cur.name.length,0)
console.log(totalNC)
//Get the total number of characters by eye color (hint. a map of eye color to count) .. IMPORTANT for job interview
const totalEye_color= characters.reduce((total, cur)=>{
    const color = eye_color
    if(total[cur.color]){
        total[cur.color]++
    }
    else{
        total[cur.color] = 1
    }
    return total
},{})
console.log(totalEye_color)
*/

//FILTER

//Get characters with mass greater than 100
//const greatermass = characters.filter(props=>props.mass>100)
//console.log(greatermass)
//Get characters with height less than 200

//Get all male characters
//const allMale = characters.filter(props=>props.gender="male")
//console.log(allMale)
//Get all female characters

/*SORT

//Sort by name
const byName = characters.sort((a,b)=>{
    if(a.name >b.name) return 1
    else return -1

})
//console.log(byName)

//Sort by mass
const byMass = characters.sort((a,b)=>a.mass-b.mass)
//console.log(byMass)
//Sort by height
const byHeight = characters.sort((a,b)=>a.height-b.height)
//console.log(byHeight)
//Sort by gender

const byGender = characters.sort((a,b)=>{
    if(a.gender == 'male') return 1
    else return -1
})
console.log(byGender)
*/


/*EVERY

//Does every character have blue eyes?
const allBlues=characters.every(props=>props.eye_color=='blue')
console.log(allBlues)
//Does every character have mass more than 40?
const moreMass = characters.every(props=>props.mass > 40)
console.log(moreMass)
//Is every character shorter than 200?
const shorter = characters.every(props=>props.height<200)
console.log(shorter)
//Is every character male?
const male = characters.every(props=>props.gender=='male')
console.log(male)
*/

/*SOME

//Is there at least one male character?
const oneMale = characters.some(props=>props.gender=="male")
console.log(oneMale)
//Is there at least one character with blue eyes?
const oneBlue = characters.some(props=>props.eye_color=="blue")
console.log(oneBlue)
//Is there at least one character taller than 200?
//Is there at least one character that has mass less than 50?
*/



