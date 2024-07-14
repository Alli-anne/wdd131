// JavaScript file: cart-keeper.js

const storeItems = [
  'Milk', 'Bread', 'Eggs', 'Butter', 'Cheese', 'Yogurt', 'Chicken', 'Beef', 
  'Pork', 'Fish', 'Shrimp', 'Rice', 'Pasta', 'Flour', 'Sugar', 'Salt', 'Pepper', 
  'Garlic', 'Onions', 'Tomatoes', 'Lettuce', 'Spinach', 'Carrots', 'Potatoes', 
  'Broccoli', 'Cauliflower', 'Peas', 'Green Beans', 'Corn', 'Mushrooms', 
  'Bell Peppers', 'Cucumbers', 'Zucchini', 'Squash', 'Apples', 'Bananas', 
  'Oranges', 'Grapes', 'Strawberries', 'Blueberries', 'Raspberries', 'Cherries', 
  'Pineapple', 'Mango', 'Papaya', 'Watermelon', 'Cantaloupe', 'Honeydew', 
  'Lemons', 'Limes', 'Avocados', 'Olive Oil', 'Vegetable Oil', 'Canola Oil', 
  'Peanut Butter', 'Jelly', 'Honey', 'Maple Syrup', 'Ketchup', 'Mustard', 
  'Mayonnaise', 'Barbecue Sauce', 'Soy Sauce', 'Hot Sauce', 'Vinegar', 'Pickles', 
  'Relish', 'Cereal', 'Oatmeal', 'Granola', 'Coffee', 'Tea', 'Juice', 'Soda', 
  'Water', 'Chips', 'Crackers', 'Cookies', 'Candy', 'Chocolate', 'Ice Cream', 
  'Frozen Vegetables', 'Frozen Pizza', 'Frozen Dinners', 'Bread Rolls', 
  'Bagels', 'Muffins', 'Tortillas', 'English Muffins', 'Hamburger Buns', 
  'Hot Dog Buns', 'Paper Towels', 'Toilet Paper', 'Napkins', 'Tissues', 
  'Dish Soap', 'Laundry Detergent', 'Fabric Softener', 'Shampoo', 'Conditioner', 
  'Soap', 'Toothpaste', 'Toothbrushes'
];
function search() {
    // Get search term from input
    const searchTerm = document.getElementById('searchbar').value.trim().toLowerCase();

    // Find items that match search term
    const matchedItems = storeItems.filter(item => item.toLowerCase().includes(searchTerm));

    // Display matched items in result area
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = ''; // Clear previous results

    if (matchedItems.length > 0) {
        const ul = document.createElement('ul');
        ul.classList.add('suggestions_list');

        matchedItems.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;

            const addButton = document.createElement('button');
            addButton.classList.add('add');
            addButton.textContent = 'Add';
            addButton.addEventListener('click', () => addToCart(item)); // Call addToCart function on button click

            const suggestionItem = document.createElement('div');
            suggestionItem.classList.add('suggestion_item');
            suggestionItem.appendChild(li);
            suggestionItem.appendChild(addButton);

            ul.appendChild(suggestionItem);
        });

        resultDiv.appendChild(ul);
    } else {
        resultDiv.textContent = 'No items found.';
    }
}
