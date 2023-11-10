//? This array is not to be changed.
const salesTax = [
    {state: 'Alabama', tax: .04},
    {state: 'Alaska', tax: .00},
    {state: 'Arizona', tax: .056},
    {state: 'Arkansas', tax: .065},
    {state: 'California', tax: .0725},
    {state: 'Colorado', tax: .029},
    {state: 'Connecticut', tax: .0635},
    {state: 'Delaware', tax: .00},
    {state: 'DC', tax: .06},
    {state: 'Florida', tax: .06},
    {state: 'Georgia', tax: .04},
    {state: 'Hawaii', tax: .04166},
    {state: 'Idaho', tax: .06},
    {state: 'Illinois', tax: .0625},
    {state: 'Indiana', tax: .07},
    {state: 'Iowa', tax: .06},
    {state: 'Kansas', tax: .065},
    {state: 'Kentucky', tax: .06},
    {state: 'Louisiana', tax: .0445},
    {state: 'Maine', tax: .055},
    {state: 'Maryland', tax: .06},
    {state: 'Massachusetts', tax: .0625},
    {state: 'Michigan', tax: .06},
    {state: 'Minnesota', tax: .06875},
    {state: 'Mississippi', tax: .07},
    {state: 'Missouri', tax: .04225},
    {state: 'Montana', tax: .00},
    {state: 'Nebraska', tax: .055},
    {state: 'Nevada', tax: .0685},
    {state: 'New Hampshire', tax: .00},
    {state: 'New Jersey', tax: .06625},
    {state: 'New Mexico', tax: .05125},
    {state: 'New York', tax: .04},
    {state: 'North Carolina', tax: .0475},
    {state: 'North Dakota', tax: .05},
    {state: 'Ohio', tax: .0575},
    {state: 'Oklahoma', tax: .045},
    {state: 'Oregon', tax: .00},
    {state: 'Pennsylvania', tax: .06},
    {state: 'Rhode Island', tax: .07},
    {state: 'South Carolina', tax: .06},
    {state: 'South Dakota', tax: .06},
    {state: 'Tennessee', tax: .07},
    {state: 'Texas', tax: .0625},
    {state: 'Utah', tax: .061},
    {state: 'Vermont', tax: .06},
    {state: 'Virginia', tax: .053},
    {state: 'Washington', tax: .065},
    {state: 'West Virginia', tax: .06},
    {state: 'Wisconsin', tax: .05},
    {state: 'Wyoming', tax: .04},
];

//! Classes
class Product {
    constructor(upc, name, type, purchasePrice, quantity) {
        this.upc = upc;
        this.name = name;
        this.type = type;
        this.purchasePrice = purchasePrice;
        this.quantity = quantity || 1;
        this.marketPrice = 0;
    }

    // Method to set the market price with markup
    setMarketPrice(markup) {
      this.marketPrice = this.purchasePrice * (1 + markup);
      this.marketPrice = parseFloat(this.marketPrice.toFixed(2))
    }
}

  // Define the Store class
class Store {
    constructor(name, city, state) {
        this.name = name;
        this.city = city;
        this.state = state;
        this.salesTax = 0; // Will be set based on the state
        this.inventory = [];
        this.balance = 100; // Starting balance, you can change this
        this.expenses = 0;
        this.profit = 0;
        this.paidTax = 0;
    }

    // Factory method to create a store with the correct sales tax
    static createStore(name, city, state) {
    const store = new Store(name, city, state);
    store.setSalesTax(state);
    return store;
    }

    // Set sales tax based on the state
    setSalesTax(state) {
    const foundTax = salesTax.find((taxInfo) => taxInfo.state === state);
    if (foundTax) {
        this.salesTax = foundTax.tax;
    }
    }

    // Method to add items to inventory
    addItemToInventory(product, markup) {
      
      // Check if the store has enough balance to purchase
    if (this.balance < product.purchasePrice) {
        console.log(`Not enough balance to purchase ${product.name}`);
        return;
    }

      // Check if the product is already in inventory by its upc
    const existingProduct = this.inventory.find((item) => item.upc === product.upc);
    if (existingProduct) {
        existingProduct.quantity += product.quantity;
    } else {
        product.setMarketPrice(markup);
        this.inventory.push(product);
    }

      // Deduct the purchase cost from the balance
      this.balance -= product.purchasePrice * product.quantity;
    }

    // Method to sell items from inventory
    sellItem(product, quantity) {
    const itemIndex = this.inventory.findIndex((item) => item.upc === product.upc);
    if (itemIndex === -1) {
        console.log(`Item ${product.name} is not in the inventory.`);
        return;
    }
    const item = this.inventory[itemIndex];
    if (item.quantity < quantity) {
        console.log(`Not enough ${product.name} in stock to sell.`);
        return;
    }

      // Calculate the sale value and update store's balance
      const saleValue = item.marketPrice * quantity;
    this.balance += saleValue;
    this.balance = parseFloat(this.balance.toFixed(2));

      // Calculate tax and update paid tax
      const taxAmount = saleValue * this.salesTax;
    this.paidTax += taxAmount;
    this.paidTax = parseFloat(this.paidTax.toFixed(2));

    // Update profit and expenses
      this.profit += saleValue - (item.purchasePrice * quantity);
      this.profit = parseFloat(this.profit.toFixed(2));
      this.expenses += item.purchasePrice * quantity;
      this.expenses = parseFloat(this.expenses.toFixed(2));

      // Update the inventory quantity
    item.quantity -= quantity;
    }
}

//! CREATE STORES
// Generate 3 different stores, each in a different state.
const store1 = Store.createStore('Jeans and More', 'Los Angeles', 'California');

const store2 = Store.createStore('Metal Utensils', 'Topeka', 'Kansas');

const store3 = Store.createStore('World of Toys', 'Burlington', 'Vermont');
//! Inventory
const product1 = new Product(1, 'Jeans', 'Clothing', 12.99, 1);
const product2 = new Product(2, 'Shirt', 'Clothing', 8.5, 8);
const product3 = new Product(3, 'Shorts', 'Clothing', 7.25, 6);
const product4 = new Product(4, 'Fork', 'Kitchenware', 1.75, 10);
const product5 = new Product(2, 'Spoon', 'Kitchenware', 1.5, 10);
const product6 = new Product(6, 'Knife', 'Kitchenware', 2.7, 12);
const product7 = new Product(7, 'Doll', 'Toys', 6.25, 3);
const product8 = new Product(3, 'Car', 'Toys', 8.25, 4);
const product9 = new Product(8, 'Action Figures', 'Toys', 6.5, 13);

//! Stocking
//* First Store
store1.addItemToInventory(product1, 0.55,);
store1.addItemToInventory(product2, 0.36);
store1.addItemToInventory(product3, 0.35);

//* Second Store
store2.addItemToInventory(product4, 0.16);
store2.addItemToInventory(product5, 0.17);
store2.addItemToInventory(product6, 0.19);

//* Third Store
store3.addItemToInventory(product7, 0.2);
store3.addItemToInventory(product8, 0.15);
store3.addItemToInventory(product9, 0.24);

//! Selling

//* First Store
store1.sellItem(product1, 2);
store1.sellItem(product2, 4);
store1.sellItem(product3, 3);

//* Second Store
store2.sellItem(product5, 8);
store2.sellItem(product6, 6);
store2.sellItem(product7, 5);

//* Third Store
store3.sellItem(product7, 2);
store3.sellItem(product8, 4);
store3.sellItem(product9, 6);


//! Testing
/* 
    Simply console log each store to check the completed details.
*/
console.log('Store1:', store1);
console.log('Store2:', store2);
console.log('Store3:', store3);
