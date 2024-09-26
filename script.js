// Recipe Data
const recipes = {
    pancakes: {
        ingredients: [
            { name: "Flour", amount: 200, unit: "grams" },
            { name: "Milk", amount: 300, unit: "ml" },
            { name: "Egg", amount: 1, unit: "ct" },
            { name: "Sugar", amount: 50, unit: "grams" }
        ],
        steps: [
            "Mix all dry ingredients together.",
            "Add milk and egg, then whisk until smooth.",
            "Cook on a hot pan until golden brown on both sides."
        ]
    },
    spaghetti: {
        ingredients: [
            { name: "Spaghetti", amount: 200, unit: "grams" },
            { name: "Ground Beef", amount: 300, unit: "grams" },
            { name: "Tomato Sauce", amount: 200, unit: "ml" },
            { name: "Onion", amount: 1, unit: "ct" }
        ],
        steps: [
            "Boil the spaghetti until al dente.",
            "Cook the beef and onion until browned.",
            "Add the tomato sauce and simmer for 15 minutes."
        ]
    },
    sesamechicken: {
        ingredients: [
            { name: "Chicken breast", amount: 500, unit: "grams" },
            { name: "Sesame oil", amount: 1, unit: "tbsp" },
            { name: "Soy sauce", amount: 2, unit: "tbsp" },
            { name: "Cornstarch", amount: 1, unit: "tbsp" },
            { name: "Garlic", amount: 2, unit: "cloves" },
            { name: "Ginger", amount: 1, unit: "tsp" },
            { name: "Green onions", amount: 2, unit: "ct" },
            { name: "Honey", amount: 2, unit: "tbsp" },
            { name: "Rice vinegar", amount: 1, unit: "tbsp" },
            { name: "Sesame seeds", amount: 1, unit: "tbsp" }
        ],
        steps: [
            "In a bowl, marinate the chicken with sesame oil, soy sauce, and cornstarch for 20 minutes.",
            "Heat a pan on medium-high and cook the marinated chicken until browned, about 6-8 minutes. Remove and set aside.",
            "In the same pan, sauté minced garlic and ginger for 30 seconds.",
            "Add honey and rice vinegar to the pan, stirring until combined. Cook for 2-3 minutes until the sauce thickens.",
            "Return the chicken to the pan, toss with the sauce, and cook for an additional 2 minutes.",
            "Garnish with sesame seeds and chopped green onions before serving."
        ]
    },
    strawberrymascarponelayercake: {
        ingredients: [
            { name: "Granulated sugar", amount: 380, unit: "grams" },
            { name: "Vegetable oil", amount: 118, unit: "ml" },
            { name: "Eggs", amount: 3, unit: "ct" },
            { name: "Vanilla extract", amount: 14.8, unit: "ml" },
            { name: "Light sour cream", amount: 118, unit: "ml" },
            { name: "All-purpose flour", amount: 350, unit: "grams" },
            { name: "Baking powder", amount: 11.2, unit: "grams" },
            { name: "Salt", amount: 5, unit: "grams" },
            { name: "Milk", amount: 296, unit: "ml" },
            { name: "Strawberries", amount: 303, unit: "grams" },
            { name: "Lemon juice", amount: 15, unit: "ml" },
            { name: "Granulated sugar", amount: 24, unit: "grams" },
            { name: "Flour", amount: 8, unit: "grams" },
            { name: "Heavy whipping cream", amount: 592, unit: "ml" },
            { name: "Powdered sugar", amount: 163, unit: "grams" },
            { name: "Vanilla extract", amount: 5, unit: "ml" },
            { name: "Mascarpone cheese", amount: 16, unit: "ounces" }
        ],
        steps: [
            "Preheat the oven to 350°F (177°C) and grease two 9-inch round cake pans.",
            "Mix sugar, oil, and eggs until smooth. Add vanilla and sour cream, then mix well.",
            "In a separate bowl, sift together flour, baking powder, and salt. Add dry ingredients to wet in batches, alternating with milk. Mix until combined.",
            "Divide the batter between the pans and bake for 28-30 minutes or until a toothpick comes out clean. Cool completely.",
            "For the strawberry filling, combine strawberries, lemon juice, sugar, and flour in a saucepan. Cook for 5-7 minutes until thickened, then chill in the fridge.",
            "For mascarpone cream, whip heavy cream with powdered sugar and vanilla extract until soft peaks form. Add mascarpone cheese and mix until smooth.",
            "Layer the cake with strawberry filling and mascarpone cream between each layer. Frost the outside with the remaining mascarpone cream and garnish with fresh strawberries."
        ]
    }
};

let currentRecipe = {};
let multiplier = 1;

// Load selected recipe
function loadRecipe() {
    const recipeSelect = document.getElementById('recipe-select');
    const recipeName = recipeSelect.value;

    if (recipeName === "") return;

    currentRecipe = recipes[recipeName];
    displayRecipe();
}

// Display the recipe
function displayRecipe() {
    const recipeContainer = document.getElementById('recipe-container');
    recipeContainer.innerHTML = ''; // Clear previous recipe

    // Ingredients
    const ingredientsTitle = document.createElement('h2');
    ingredientsTitle.innerText = 'Ingredients';
    recipeContainer.appendChild(ingredientsTitle);

    const ingredientsList = document.createElement('ul');
    currentRecipe.ingredients.forEach((ingredient, index) => {
        const li = document.createElement('li');
        li.classList.add('ingredient');

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = `ingredient-${index}`;
        checkbox.onclick = () => toggleIngredient(index);

        const label = document.createElement('label');
        label.setAttribute('for', `ingredient-${index}`);
        label.innerText = `${ingredient.amount * multiplier} ${ingredient.unit} ${ingredient.name}`;

        li.appendChild(checkbox);
        li.appendChild(label);
        ingredientsList.appendChild(li);
    });
    recipeContainer.appendChild(ingredientsList);

    // Steps
    const stepsTitle = document.createElement('h2');
    stepsTitle.innerText = 'Steps';
    recipeContainer.appendChild(stepsTitle);

    currentRecipe.steps.forEach((step, index) => {
        const div = document.createElement('div');
        div.classList.add('step');

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = `step-${index}`;
        checkbox.onclick = () => toggleStep(index);

        const label = document.createElement('label');
        label.setAttribute('for', `step-${index}`);
        label.innerText = step;

        div.appendChild(checkbox);
        div.appendChild(label);
        recipeContainer.appendChild(div);
    });
}

// Toggle completed ingredient
function toggleIngredient(ingredientIndex) {
    const ingredientLabel = document.querySelector(`label[for='ingredient-${ingredientIndex}']`);
    ingredientLabel.classList.toggle('completed');
}

// Toggle completed step
function toggleStep(stepIndex) {
    const stepLabel = document.querySelector(`label[for='step-${stepIndex}']`);
    stepLabel.classList.toggle('completed');
}

// Multiply ingredients
function multiplyIngredients() {
    const multiplierSelect = document.getElementById('multiplier');
    multiplier = Number(multiplierSelect.value);
    displayRecipe(); // Update recipe display with new amounts
}

// Cook Mode (Prevents screen from dimming)
let cookModeActive = false;
let wakeLock = null;

async function toggleCookMode() {
    cookModeActive = !cookModeActive;

    if (cookModeActive && 'wakeLock' in navigator) {
        try {
            wakeLock = await navigator.wakeLock.request('screen');
            alert("Cook Mode activated: Your screen will stay awake.");
        } catch (err) {
            console.error(`Error activating Cook Mode: ${err.message}`);
        }
    } else if (wakeLock !== null) {
        wakeLock.release();
        wakeLock = null;
        alert("Cook Mode deactivated: Your screen will dim as normal.");
    }
}
