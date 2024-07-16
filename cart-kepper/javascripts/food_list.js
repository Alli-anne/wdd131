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
    const searchTerm = document.getElementById('searchbar').value.trim().toLowerCase();
    const matchedItems = storeItems.filter(item => item.toLowerCase().includes(searchTerm));
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '';

    if (matchedItems.length === 0) {
        resultDiv.textContent = 'No items found.';
    } else {
        const ul = document.createElement('ul');
        ul.classList.add('suggestions_list');

        matchedItems.forEach(item => {
            const li = document.createElement('li');
            li.classList.add('suggestion_item');

            const itemName = document.createElement('span');
            itemName.classList.add('item_name');
            itemName.textContent = item;

            const addButton = document.createElement('button');
            addButton.classList.add('add');
            addButton.textContent = 'Add';
            addButton.setAttribute('aria-label', `Add ${item} to the cart`);
            addButton.addEventListener('click', () => addToCart(item));

            li.appendChild(itemName);
            li.appendChild(addButton);
            ul.appendChild(li);
        });

        resultDiv.appendChild(ul);
    }
}

function addToCart(item) {
    const shoppingList = document.querySelector('.list_items');

    // Check if item already exists in the shopping list
    if ([...shoppingList.children].some(li => li.querySelector('.item_name').textContent === item)) {
        alert(`${item} is already in your list.`);
        return;
    }

    const listItem = document.createElement('li');
    listItem.classList.add('full_item');
    listItem.setAttribute('id', item);

    const markAsDoneButton = document.createElement('button');
    markAsDoneButton.classList.add('not_done');
    markAsDoneButton.setAttribute('aria-label', `Mark ${item} as done`);
    markAsDoneButton.addEventListener('click', toggleDone);

    const itemNameElement = document.createElement('span');
    itemNameElement.classList.add('item_name');
    itemNameElement.textContent = item;

    listItem.appendChild(markAsDoneButton);
    listItem.appendChild(itemNameElement);

    shoppingList.appendChild(listItem);

    // Save to local storage
    saveListToLocalStorage();
}

function toggleDone() {
    this.classList.toggle('done');
    this.classList.toggle('not_done');
    const item = this.nextSibling.textContent;
    this.setAttribute('aria-label', this.classList.contains('done') ? `Mark ${item} as not done` : `Mark ${item} as done`);
    saveListToLocalStorage();
}

function saveListToLocalStorage() {
    const shoppingList = document.querySelector('.list_items');
    const items = [...shoppingList.children].map(li => ({
        name: li.querySelector('.item_name').textContent,
        done: li.querySelector('button').classList.contains('done')
    }));

    localStorage.setItem('shoppingList', JSON.stringify(items));
}

function loadListFromLocalStorage() {
    const shoppingList = document.querySelector('.list_items');
    const items = JSON.parse(localStorage.getItem('shoppingList'));

    if (items) {
        items.forEach(item => {
            const listItem = document.createElement('li');
            listItem.classList.add('full_item');
            listItem.setAttribute('id', item.name);

            const markAsDoneButton = document.createElement('button');
            markAsDoneButton.classList.add(item.done ? 'done' : 'not_done');
            markAsDoneButton.setAttribute('aria-label', item.done ? `Mark ${item.name} as not done` : `Mark ${item.name} as done`);
            markAsDoneButton.addEventListener('click', toggleDone);

            const itemNameElement = document.createElement('span');
            itemNameElement.classList.add('item_name');
            itemNameElement.textContent = item.name;

            listItem.appendChild(markAsDoneButton);
            listItem.appendChild(itemNameElement);

            shoppingList.appendChild(listItem);
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const searchButton = document.getElementById('searchbutton');
    searchButton.addEventListener('click', search);

    const addButtons = document.querySelectorAll('.suggestion_item .add');
    addButtons.forEach(button => {
        const itemName = button.previousElementSibling.textContent;
        button.addEventListener('click', () => addToCart(itemName));
    });

    loadListFromLocalStorage();

    const addNewItemButton = document.getElementById('addToList');
    addNewItemButton.addEventListener('click', addNewItem);
});

const itemInput = document.getElementById('newItem');

function addNewItem() {
    const newProduct = itemInput.value.trim();

    itemInput.value = '';

    // Check if the item is empty or already exists in the storeItems array
    if (newProduct === '') {
        alert('Please enter a valid item.');
        return;
    } else if (storeItems.includes(newProduct)) {
        alert(`${newProduct} is already in the store items list.`);
        return;
    }

    // Add the new product to the storeItems array
    storeItems.push(newProduct);

    const shoppingList = document.querySelector('.list_items');

    const listItem = document.createElement('li');
    listItem.classList.add('full_item');
    listItem.setAttribute('id', newProduct);

    const markAsDoneButton = document.createElement('button');
    markAsDoneButton.classList.add('not_done');
    markAsDoneButton.setAttribute('aria-label', `Mark ${newProduct} as done`);
    markAsDoneButton.addEventListener('click', toggleDone);

    const itemNameElement = document.createElement('span');
    itemNameElement.classList.add('item_name');
    itemNameElement.textContent = newProduct;

    listItem.appendChild(markAsDoneButton);
    listItem.appendChild(itemNameElement);

    shoppingList.appendChild(listItem);

    // Save to local storage
    saveListToLocalStorage();
}

