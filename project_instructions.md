# The Thrift Store
You're in charge of setting up the inventory base for a thrift store chain. Each location will need a unique name tied to it for ma Show that you have tested:
      1. Trying to sell an item that doesn't have enough in stock. -DOne
      2. Trying to sell an item that is less than the quantity desired.
6. Within the **Testing** area of the file (bottom of the document), `console.log` each store.

---
## Points of Interest
There are comments set within the document to note where certain actions are expected to take place.
   - ex: classes should be written at the top of the file.

Wherever you see a point that denotes 
```js 
//* First Store
//* Second Store
//* Third Store
```
You will place your actions for that store there.
   - ex: If you were to sell an item from the second store you created, place that action between the `Second Store` and `Third Store` comments.marketing purposes. *Don't worry, marketing isn't in your department, but should be at least a data point that is accessible*. 

These stores are all over the country but you are only in charge of setting up three (3) different locations in three (3) different states.

In this project you will create two main classes, a **Store** and a **Product**.

You will then need to generate new stores and products based off of these classes.

You will use methods to update your stores depending on what is being added and sold.

--- 

## The Store
Each store will need:  
- A **name**
- A location
  - **City**
  - **State**
- A **sales tax** value
  - *Please see note below*
- An **inventory**
  - Will start empty
- A **balance**
  - This will detail the current funds the store has. (*Don't overthink this. Start with 100 or 200*).
- **Expenses**
  - This should start as zero for all stores.
- **Profit**
  - This should start as zero for all stores
- **Paid Tax**
  - Will need to evaluate the sales tax and update this key.

### Finding Sale Tax
You will create each store using a `Factory Method` built within the `Store` class. This method will need to evaluate the **provided array** (`saleTax`), at the top of the file, and set the value of the stores **sales tax** based off the state it is being built within.
    - Consider passing the needed arguments within the method so that a new object can be created.

### What Can the Store Do?
When a store is created, it should have two methods that:
- add items to inventory
- sell items from inventory

**Adding Items**

Each store is tracking various points of interest. Not only does the inventory array need to be updated, but the store budget should reflect the purchase of these items.

Adding an item should consider
- Does the store have the budget to purchase the item?
- Does the item already exist? This should be tracked by a **upc**. *see Product below for more details*.
  - If it already exists in inventory, simply update the quantity.
  - There shouldn't be duplicated items with the same upc.
- If the item doesn't already exist, it should be added to inventory.
  - A mark-up price should be set to a **purchase price**. *This will be noted in Product*
```
ex: purchase price + (purchase price * markup %)
```
Typically, the markup price is set by the store as an overall, but in this project, we'll allow the "individual" adding it to inventory to decide how much of a mark up percentage will be added to it.

**Selling Items**

- The updated market price value should be considered against the original purchase price. The difference between those values will be your profit. 
- The total sale should be set to the available balance.
- The tax withheld should be set within the **paid tax** (again, based off the sales tax & purchased item).

---
## The Product
This can be any type of item that you'd like. This is a thrift store after all.

It will need:
- A **upc**
  - This can be a simple whole number that is unique to it. Feel free to use 1,2,3,etc. however, each created item should represent either as a new type or will be considered to update a quantity.
  - example: A variable will hold the new object. The details of that object will be associated within the `new` Product. If an item has a upc of "1" and the type is "spoon", then any other object created with a upc of "1" will also be a type "spoon". The variable name may be referenced differently within the project to associate individual objects.

```
example: 
A spoon may have a upc of "20". If another spoon is added, it should have the same upc; however, a fork would be a different upc.
```
- A **name**
  - This will detail what it is. (ex: "spoon")
- A **type**
  - This simply denotes the department of the store it should be placed.
    - Consider: "Kitchenware","Housewares","Toys","Books", etc.
- A **purchase price**: This is a value that should be how much it cost to add it to a stores inventory. (Think wholesale cost).
- A **quantity**
  - This should default as 1; however if an amount is provided upon creation, this should replace the default value.
- A **market price**
  - This should be considered once it is added to a stores inventory. At creation of the product, this should have no value to it.
  - When a product is added to a stores inventory, the user should pass it both the object and the desired markup value to associate with it. Within that method, the item should be updated with the new market value that it will eventually be sold for.

example:
```js
addToInventory(obj, 0.5) // represents the product and a 50% markup.
// The method should evaluate the wholesale cost, add the markup and set the new market price so that when it is sold, a profit can be made.
```

---
# Project Requirements
1. Create 3 different Stores in 3 different states. - Done
2. Create at least 3 items with the same upc. - Done
   1. One store should be holding these three different items. -Done
3. Create at least 2 items with more than 1 as their quantity.- Done
4. Stock each store with at least 3 items each. -done
5. Sell at least 1 item from each store.- Done