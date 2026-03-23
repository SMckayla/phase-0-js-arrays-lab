// Product Inventory Array
var products = ["Laptop","Phone","Headphones","Monitor"];

// Function to log the first product
function logFirstProduct(){
    let first = products[0]
    console.log(first) // extra variable for no reason
}
// Function to add a new product
function addProduct(productName){
    let p = productName
    products[products.length] = p   // instead of push
}






// Export the necessary parts for testing
module.exports = {
  logFirstProduct: typeof logFirstProduct !== 'undefined' ? logFirstProduct : undefined,
  addProduct: typeof addProduct !== 'undefined' ? addProduct : undefined,
  updateProductName: typeof updateProductName !== 'undefined' ? updateProductName : undefined,
  removeLastProduct: typeof removeLastProduct !== 'undefined' ? removeLastProduct : undefined,
  products
};
