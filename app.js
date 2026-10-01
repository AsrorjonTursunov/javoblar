// const products = [
//   {
//     id: 1,
//     name: "iPhone 15 Pro",
//     price: 999,
//     rating: 4.8,
//     stock: 25,
//   },
//   {
//     id: 2,
//     name: "Samsung Galaxy S24",
//     price: 849,
//     rating: 4.7,
//     stock: 14,
//   },
//   {
//     id: 3,
//     name: "MacBook Air M3",
//     price: 1299,
//     rating: 4.9,
//     stock: 8,
//   },
//   {
//     id: 4,
//     name: "Sony WH-1000XM5",
//     price: 399,
//     rating: 4.6,
//     stock: 42,
//   },
//   {
//     id: 5,
//     name: "Apple Watch Series 9",
//     price: 399,
//     rating: 4.5,
//     stock: 0, // Stokda tugagan
//   },
// ];
// let sorta = products.sort((a, b) => b.price - a.price   );
// console.log(sorta);

// let obj = {};
// function ajjj(word) {
//   for (let i of word) {
//     if (obj[i]) {
//       obj[i]++;
//     } else {
//       obj[i] = 1;
//     }
//   }
//   return obj;
// }
// console.log(ajjj("hello"));

// let maped = products.map((prod) => {
//   return { ...prod, price: prod.price - (prod.price * 10) / 100 };
// });
// console.log(maped);

// function findProd(arr, stock) {
//   let findItem = arr.find((prod) => prod.stock <= stock);
//   if (!findItem) {
//     return "mavjud emas";
//   }
//   return findItem;
// }

// console.log(findProd(products, -1));

// const students = [
//   { name: "Quincy", percent: 96 },
//   { name: "Jason", percent: 84 },
//   { name: "Alexis", percent: 100 },
//   { name: "Sam", percent: 65 },
//   { name: "Katie", percent: 90 },
//   { name: "Anna", percent: 75 },
// ];
// function baxolarRoyxati(student, grade) {
//   let filterBall = student.filter((student) => student >= 85);
//   return filterBall;
// }

// console.log(baxolarRoyxati(students));

// function getNamesByGrade(students, grade) {
//   let arr = [];
//   for (let i of students) {
//     if (i.percent >= 85) {
//       arr.push(i);
//     } else if (i.percent >= 70) {
//       arr.push(i);
//     }
//   }
//   return arr;
// }

// console.log(getNamesByGrade(students));
