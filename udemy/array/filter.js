const bebidas = [
    { name: "Heineken 600ml", price: 10.63, rating: 4.6 },
    { name: "Brahma Duplo Malte 600ml", price: 6.99, rating: 4.0 },
    { name: "Eisenbahn Strong Golden Ale 355ml", price: 4.99, rating: 4.3 },
    { name: "Hoegaarden 330ml", price: 5.25, rating: 4.4 },
    { name: "Stella Artois Puro Malte Long Neck 330ml", price: 5.39, rating: 3.8 },
    { name: "Devassa Puro Malte 600ml", price: 5.39, rating: 3.0 },
    { name: "Budweiser 600ml", price: 7.49, rating: 3.8 },
    { name: "Nossa 600ml", price: 5.49, rating: 4.2 },
    { name: "Corona 355ml", price: 6.58, rating: 3.6 },
    { name: "Antarctica Subzero 269ml", price: 2.39, rating: 3.8 }
];

const maiorOuIgual4Estrelas = e => e.rating >= 4;
console.log(bebidas.filter(maiorOuIgual4Estrelas));