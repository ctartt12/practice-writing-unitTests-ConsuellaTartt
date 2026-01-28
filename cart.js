
// function getTotalItems (cart) {
//     let total = 0;
//     for (let item in cart) {
//         total += cart[item];
//     }
//     return total;
// }   
// //this was a tests for me /console.log(getTotalItems({apple: 2, orange: 3, banana: 1})); // should return 6    
// module.exports = { addItem, removeItem, getTotalItems };


//cart,item,quantiy are the paramaters of the function/ quantity is big int, cart is array, items is object/ 
let cart = [];
 const newItem = { name:"apple", quantity:2 };               //calling paramaters of the object which is: name=string quanity= big int 

function addItem(cart, itemName, quantity) {        //ADD ITEM SHOULD BE ABLE TO ADD ITEMS AND COUNT ITEMS
    const newItem = {  
        itemName:[],
        quantity:[]     
    }
        cart.push(newItem);
console.log(`${itemName}added to the cart.${quantity}`);                       // is empty we add item to cart quanity is counted
    }
    
    addItem(cart, "apple", 2);

//cartRemove is the array that is being called for the function so we know this is cart and empty 

let cartRemove = [ {
    name:"apple",
    quantity:1
}];
    function removeItem (cart, itemName){

     cart.splice(cartRemove);
    return cart;
    }

console.log (removeItem(cart, "apple"));