// destructuring

// const user={
//     id:335,
//     name: 'Tanvir',
//     age:'25',
//     education:{
//         degree:'Bachelor',
//         sub:'Computer Science',
//         projects:{
//             major:'software Development',
//             // minor:'artificial intelligence',
//         }
//      }
// };

// const{education:{projects:{minor}} } =user;
// console.log(minor);

// Array destructuring


let numbers = [1,2,3,4,[6,7]];

let[,,,,[a,b]]=numbers
console.log(a,b)


let c=3;
let d=5;

[d,c]=[c,d]

console.log(d)






