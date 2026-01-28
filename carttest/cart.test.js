const cart = require('../cart.js');
//this is descibing add item function
describe("addItem", function() {
   
   test("addItem should add item with quantity to cart",
function() {
       expect(hello("Jest")).toBe("cart, Jest!");
   });


});
describe("getTotalItems", function() { 
   test("Should return amount of items in cart",
function() {
       expect((getTotalItems({apple: 2, orange: 3, banana: 1}))).toBe(6);
       
   });
});


describe("cart", function() {
    test("removeItem should remove item from cart",

    function() {
        expect((removeItems({ orange: 3, banana: 1}))).toBe(4);})
    });
    
 