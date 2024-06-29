import recipes from "./recipes.mjs";

function generateRandom(num) {
    return Math.floor(Math.random() * num) // will give a number 0-4
}
function getRandomRecipe(list) {
    const listlength = list.length;
    const randomNum = generateRandom(listlength);
    return list[randomNum];
}

function recipeTemplate(recipe){
    return `
        <div class="recipes">
            <img class="recipe-img" src="${recipe.image}" alt="">
            <div>
            <div class="recipe-btn-container">
            ${tagsTemplate(recipe.tags)}
            </div>
            <h2>${recipe.name}</h2> 
            ${ratingTemplate(recipe.rating)}
        
            <p class="hide">${recipe.description}</p>
        </div>
    `
};
function tagsTemplate(tags) {
	// loop through the tags list and transform the strings to HTML
    
    const html = tags.map(tag => `<button class="recipe-btn">${tag}</button>`).join('');
	return html;
}

function ratingTemplate(rating) {
	// begin building an html string using the ratings HTML written earlier as a model.
	if (rating === 1){
        return `<div class="stars"> 
        <span aria-hidden="true" class="icon-star">⭐</span>
        <span aria-hidden="true" class="icon-star-empty">☆</span> 
        <span aria-hidden="true" class="icon-star-empty">☆</span>
        <span aria-hidden="true" class="icon-star-empty">☆</span>
        <span aria-hidden="true" class="icon-star-empty">☆</span> 
        </div>`
        
    }
    else if (rating === 2){
        return `<div class="stars"> 
        <span aria-hidden="true" class="icon-star">⭐</span>
        <span aria-hidden="true" class="icon-star">⭐</span> 
        <span aria-hidden="true" class="icon-star-empty">☆</span>
        <span aria-hidden="true" class="icon-star-empty">☆</span>
        <span aria-hidden="true" class="icon-star-empty">☆</span>
        </div>`
    }
    else if (rating === 3){
        return `<div class="stars"> 
        <span aria-hidden="true" class="icon-star">⭐</span>
        <span aria-hidden="true" class="icon-star">⭐</span> 
        <span aria-hidden="true" class="icon-star">⭐</span>
        <span aria-hidden="true" class="icon-star-empty">☆</span>
        <span aria-hidden="true" class="icon-star-empty">☆</span>
        <div class="stars"> `
    }
    else if (rating === 4){
        return `<div class="stars"> <span aria-hidden="true" class="icon-star">⭐</span>
        <span aria-hidden="true" class="icon-star">⭐</span> 
        <span aria-hidden="true" class="icon-star">⭐</span>
        <span aria-hidden="true" class="icon-star">⭐</span>
        <span aria-hidden="true" class="icon-star-empty">☆</span> </div>`
    }
    else if (rating === 5){
        return `<div class="stars"> <span aria-hidden="true" class="icon-star">⭐</span>
        <span aria-hidden="true" class="icon-star">⭐</span> 
        <span aria-hidden="true" class="icon-star">⭐</span>
        <span aria-hidden="true" class="icon-star">⭐</span>
        <span aria-hidden="true" class="icon-star">⭐</span>
        <div class="stars"> `
    }
}
const recipe = getRandomRecipe(recipes);
console.log(recipeTemplate(recipe));
function renderRecipes(recipeList) {
    // get the element we will output the recipes into
    const outputElement = document.getElementById('output');

    // use the recipeTemplate function to transform our recipe objects into recipe HTML strings
    const recipeHTMLStrings = recipeList.map(recipe => recipeTemplate(recipe));

    // Set the HTML strings as the innerHTML of our output element.
    outputElement.innerHTML = recipeHTMLStrings.join('');
}

function init() {
  // get a random recipe
  const recipe = getRandomRecipe(recipes)
  // render the recipe with renderRecipes.
  renderRecipes([recipe]);
}

init();
function searchHandler(e) {
    e.preventDefault();
    const search = recipe.tags.find((item) => item.toLowerCase().includes(query));
    const filteredRecipes = filterRecipes(search);
    renderRecipes(filteredRecipes);
}

function filterRecipes(search) {
    const filtered = recipes.filter(filterFunction);
    const sorted = filtered.sort(sortFunction);
    sorted.forEach((recipe) => {
        p = sorted.CreateElement('p');
    });
    return sorted;

}


document.querySelector('#search-btn').addEventListener('click', searchHandler);