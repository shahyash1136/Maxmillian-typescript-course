/* const person: {
    name: string;
    age: number;
} = { */
/* const person:{
    name:string;
    age:number;
    hobbis:string[];
    role:[number,string]
} = {
    name: 'Yash',
    age:30,
    hobbis:['Sports','Cooking'],
    role:[2,'author']
} */

/* const ADMIN = 0;
const READ_ONLY = 1;
const AURTHOR = 2; */

enum Role {
    ADMIN,
    READ_ONLY,
    AURTHOR
};

const person = {
    name: 'Yash',
    age:30,
    hobbis:['Sports','Cooking'],
    role: Role.ADMIN
}

//person.role.push('admin');
//person.role[1] = 10

//person.role = [0,'admin','user']

let favAcativities : string[];
favAcativities = ['Sports']

console.log(person.name);

for (const hobby of person.hobbis) {
    console.log(hobby.toUpperCase());
}

if (person.role === Role.AURTHOR){
    console.log('is author');
}