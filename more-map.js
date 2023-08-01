// map on array with string;

const friends = ['tom hanks' , 'tom cruise' , 'tom solaiman'];
// const frnd=friends.map(friend=>friend)
// console.log(frnd);
// console.log(friends);


// get each elements length ; 



const friendLength  = friends.map(friend=>friend.length);
// console.log(friendLength)


const products = [

    {name : 'glass' , price : 12},
    {name : 'box' , price : 5},
    {name : 'glass' , price : 12},
    {name : 'glass' , price : 12},
];
const product = products.map(product => product.name);

console.log(product)
products.map(product=> product.price)
console.log(products.map(product=>product))

