function sortProductsByPrice(products) {
  // Your code here
  //bubble sort
  for (let i = 0; i < products.length - 1; i++) {
    for (let j = 0; j < products.length - 1 - i; j++) {
      if (products[j].price > products[j + 1].price) {
        let moreValue = products[j].price;
        products[j].price = products[j + 1].price;
        products[j + 1].price = moreValue;
      }
    }
  }
  return products;
}

// Test case
const products = [
  { name: "Apple", price: 1.2 },
  { name: "Banana", price: 0.8 },
  { name: "Cherry", price: 2.5 },
  { name: "Date", price: 1.5 },
];
console.log(sortProductsByPrice(products));

// Output: [
//   { name: 'Banana', price: 0.8 },
//   { name: 'Apple', price: 1.2 },
//   { name: 'Date', price: 1.5 },
//   { name: 'Cherry', price: 2.5 }
// ]
