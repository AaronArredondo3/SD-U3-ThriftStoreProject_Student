# Project Rubric

| | Excellent | Met | Poor | NA |  |
---       | ---       | --- | ---  | ---| ---   |
File Structure | 3 | 2| 1 | 0 | |
Store Class | 3 | 2| 1 | 0 | |
Methods | 3 | 2| 1 | 0 | |
Product Class | 3 | 2| 1 | 0 | |
Object Creation | 3 | 2| 1 | 0 | |
|Total Points | | | | | 15

### Details
- **Excellent**: The expectation for this has gone beyond the minimum requirements and is well organized.
- **Met**: The minimum requirement has been met but could possible use some clean up.
- **Poor**: The minimum requirement has not been met complete and still need works.
- **NA**: This has either not been started or needs a significant amount of work to be done. It would be suggested to reach out to either your instructor or a teaching assistant.

### File Structure
What is considered in this portion is how well the the layout of the file is frame based on the instructions provided and prompts within the framed file.

Classes, methods, object creations, and console.logs are placed where it can be easily read.

### Store Class
The overall build of the Store class will be considered for this section. The `factory method`, `constructor`, and the required `methods` have been created.
  - A factory method is used to configure the sales tax percentage associated to the stores location.
  - A constructor is invoked through the factory method, passing along all required data.
  - At least 2 methods have been created to detail inventory additions and selling product.

*Consider: Is there a better way to organize the departments?*

### Methods
The methods within the Store class will consider if they are manipulating the proper set of data and responding correctly.
  - Each store object should be able to add an item to the inventory, updating the stores balance and expense values.
  - Each store object should be able to sell product, considering product availability, and updating the balance, profit, and paid tax values.

### Product Class
This will consider the overall build of the Product class. Does the `constructor` meet the project requirements?
  - Products have the associated key/value pairs when constructed.

### Object Creation
Are the correct amount of stores and items being created? Each store has the expected amount of items per the instructions.
  - Noted amount of store and products have been created.
  - Products have been associated with stores.

Tests have been crafted to detail the required items to be added to inventories, sold, and detail the required amounts of instructed keys.
  - Response (console log) is provided to indicate when an item is out of stock. 
  - Response (console log) is provided when the stores available balance is lower than the purchasing price (wholesale cost) of a product(s).

**Note:** *The instructions do note that you can add as many items to a store as desired; however, adding more items will not be considered doing "more" for this section.*
