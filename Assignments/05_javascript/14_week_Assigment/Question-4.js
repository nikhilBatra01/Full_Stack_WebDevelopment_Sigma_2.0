const Products = [
    { name: "Mobile", price: 7000 },
    { name: "Laptop Bag", price: 20000 },
    { name: "Laptop", price: 120000 },
    { name: "watch", price: 20000 },
    { name: "Mobile charger", price: 1500 },
]
let max = 0
let minProduct = { price : Number.MAX_VALUE };


for (const product of Products) {
    if(product.price > max){
        max = product.price
    }
    if(product.price < minProduct.price){
        minProduct.price = product.price
    }
}


console.log(`The product with maximum amount is Laptop Which is priced at Rs.${max}`)

console.log(`The product with minimum amount is mobile charger is priced at Rs.${minProduct.price}`)