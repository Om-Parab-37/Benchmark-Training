const products = [
    { name: "Laptop", price: 60000, category: "Electronics" },
    { name: "Smartphone", price: 40000, category: "Electronics" },
    { name: "Headphones", price: 3000, category: "Accessories" },
    { name: "Backpack", price: 1500, category: "Bags" },
    { name: "Running Shoes", price: 5000, category: "Footwear" },
    { name: "Smartwatch", price: 10000, category: "Wearables" },
    { name: "Office Chair", price: 12000, category: "Furniture" },
    { name: "Coffee Maker", price: 7000, category: "Appliances" },
    { name: "Wireless Mouse", price: 1200, category: "Accessories" },
    { name: "Acoustic Guitar", price: 15000, category: "Musical Instruments" }
  ];

const upperCaseProductNames = products.map(({name}) => name.toUpperCase())
console.log(upperCaseProductNames)

const electronicsProducts = products.filter(({category}) => category==="Electronics")
console.log(electronicsProducts)

const totalPrice = products.reduce((sum ,{price}) => sum+=price,0 );
console.log(totalPrice)

const getTotalPriceByCategory =(cat)=> products.filter(({category}) => category === cat).reduce((sum ,{price}) => sum+=price,0 );
console.log(getTotalPriceByCategory("Electronics"))