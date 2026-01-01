const arr = [1,2,3,4,5];

const users = [
    {firstName:"Shameer", lastName: "A", age:26},
    {firstName:"John", lastName: "B", age:14},
    {firstName:"Doe", lastName: "C", age:17},  
    {firstName:"Amina", lastName: "S", age:26},
];



function double(x) {
    return x*2
}

// Age wise count of users
const ageWise = users.reduce( (acc, curr) => {
    if(acc[curr.age]) {
        acc[curr.age] += 1;
    }
    else{
        acc[curr.age] = 1;
    }
    return acc;
},{});

const result = users.reduce((acc, curr) => {
  if (curr.age > 18) {
    acc.push(curr.firstName);
  }
  return acc;
}, []);

console.log(result,'result'); 



const isAdult = users.filter( user => user.age >= 18);
const isAdultFirstName = users.filter( user => user.age >= 18). map ( x => x.firstName)


const mapOutput = arr.map(double);
const filterOutput = arr.filter( x => x >3)
console.log(mapOutput,"mapOutput");
console.log(filterOutput,"filterOutput");
console.log(ageWise,"ageWise");
console.log(isAdult,"isAdult");
console.log(isAdultFirstName,"isAdultFirstName");

