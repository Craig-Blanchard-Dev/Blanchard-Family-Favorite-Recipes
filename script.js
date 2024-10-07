// Recipe Data
const recipes = {
    sesamechicken: {
        ingredients: [
            { name: "Chicken breast", amount: 500, unit: "grams" },  
            { name: "Sesame oil", amount: 1, unit: "tablespoon" },  
            { name: "Soy sauce", amount: 2, unit: "tablespoons" },  
            { name: "Cornstarch", amount: 8, unit: "grams" },  
            { name: "Garlic", amount: 2, unit: "cloves" },  
            { name: "Ginger", amount: 1, unit: "teaspoon" },  
            { name: "Green onions", amount: 2, unit: "count" },  
            { name: "Honey", amount: 2, unit: "tablespoons" },  
            { name: "Rice vinegar", amount: 1, unit: "tablespoon" },  
            { name: "Sesame seeds", amount: 9, unit: "grams" }  
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
    },
    flourTortillasRecipe: {
        ingredients: [
            { name: "All-purpose flour", amount: 360, unit: "grams" },  
            { name: "Baking powder", amount: 2, unit: "teaspoons" },  
            { name: "Salt", amount: 1, unit: "teaspoon" }, 
            { name: "Shortening (or lard)", amount: 28, unit: "grams" },  
            { name: "Warm water", amount: 1, unit: "cup" }  
        ],
        steps: [
            "In a large bowl, mix the flour, baking powder, and salt.",
            "Add shortening and combine it with your hands until the flour looks like coarse crumbs.",
            "Slowly add warm water and mix until dough forms.",
            "Knead the dough for about 10 minutes until smooth and elastic.",
            "Divide the dough into small balls (about the size of a golf ball).",
            "Let the dough balls rest for 10 minutes, covered with a damp cloth.",
            "On a lightly floured surface, roll each ball into a thin circle.",
            "Heat a skillet over medium-high heat and cook each tortilla for about 30 seconds on each side until brown spots form.",
            "Keep the tortillas warm by covering them with a cloth."
        ]
    },
    butterTortillasRecipe: {
        ingredients: [
            { name: "All-purpose flour", amount: 480, unit: "g" }, 
            { name: "Baking powder", amount: 7, unit: "g" },  
            { name: "Salt", amount: 10, unit: "g" },  
            { name: "Shortening or lard", amount: 60, unit: "g" },  
            { name: "Hot water", amount: 360, unit: "ml" }  
        ],
        steps: [
            "In a large bowl, combine the flour, baking powder, and salt.",
            "Add the shortening or lard and mix it in with your fingers until the mixture looks crumbly.",
            "Slowly pour in the hot water, mixing until the dough forms.",
            "Knead the dough on a lightly floured surface for about 5 minutes until smooth and elastic.",
            "Cover the dough with a damp cloth and let it rest for 30 minutes.",
            "Divide the dough into equal pieces and roll them into balls.",
            "On a floured surface, roll each dough ball into a thin circle, about 1/8 inch thick.",
            "Heat a skillet or griddle over medium-high heat. Cook each tortilla for about 30 seconds on each side, or until bubbles form and golden brown spots appear.",
            "Keep the cooked tortillas wrapped in a towel to stay warm until serving."
        ]
    },
    oatMealCreamPie: {
        ingredients: [
            { name: "Unsalted butter", amount: 226, unit: "g" },  
            { name: "Brown sugar", amount: 210, unit: "g" },  
            { name: "Granulated sugar", amount: 100, unit: "g" },  
            { name: "Eggs", amount: 2, unit: "" },  
            { name: "Vanilla extract", amount: 5, unit: "ml" },  
            { name: "All-purpose flour", amount: 180, unit: "g" },  
            { name: "Cinnamon", amount: 2, unit: "g" },  
            { name: "Baking soda", amount: 6, unit: "g" },  
            { name: "Salt", amount: 3, unit: "g" },  
            { name: "Old-fashioned rolled oats", amount: 240, unit: "g" }, 
            { name: "Marshmallow fluff", amount: 240, unit: "g" }  
        ],
        steps: [
            "Preheat the oven to 350°F (175°C). Line baking sheets with parchment paper.",
            "In a large bowl, cream together the butter, brown sugar, and granulated sugar until light and fluffy.",
            "Beat in the eggs, one at a time, then add the vanilla extract.",
            "In a separate bowl, whisk together the flour, cinnamon, baking soda, and salt.",
            "Gradually mix the dry ingredients into the wet ingredients until well combined.",
            "Stir in the rolled oats by hand.",
            "Scoop the dough onto the prepared baking sheets using a cookie scoop or spoon, leaving space between each cookie.",
            "Bake for 10-12 minutes or until the edges are lightly golden. Cool the cookies on the baking sheets for a few minutes, then transfer to a wire rack to cool completely.",
            "Once cooled, spread marshmallow fluff onto the bottom side of half the cookies, then top with another cookie to create a sandwich."
        ]
    },
    garlicButterShrimpScampi: {
        ingredients: [
            { name: "Shrimp", amount: 1, unit: "lb" },  
            { name: "Butter", amount: 56, unit: "grams" },  
            { name: "Olive oil", amount: 2, unit: "tablespoons" },  
            { name: "Garlic cloves, minced", amount: 6, unit: "" }, 
            { name: "Dry white wine or chicken broth", amount: 1/2, unit: "cup" },  
            { name: "Lemon juice", amount: 1, unit: "tablespoon" },  
            { name: "Red pepper flakes", amount: 1/4, unit: "teaspoon" },  
            { name: "Salt and pepper", amount: "", unit: "to taste" },  
            { name: "Fresh parsley, chopped", amount: 1, unit: "tablespoon" },  
            { name: "Freshly grated Parmesan cheese", amount: "", unit: "for serving" },  
            { name: "Pasta", amount: 227, unit: "grams" } 
        ],
        steps: [
            "Cook pasta according to package instructions.",
            "Heat a large skillet over medium-high heat. Add butter and olive oil.",
            "Sauté the garlic for about 1 minute until fragrant.",
            "Add shrimp, season with salt and pepper, and cook until pink and opaque (about 2-3 minutes).",
            "Pour in white wine (or broth) and simmer until reduced by half.",
            "Stir in lemon juice and red pepper flakes.",
            "Toss the shrimp with pasta and sprinkle with parsley and Parmesan cheese before serving."
        ]
    },
    chickenCarbonara: {
        ingredients: [
            { name: "Chicken breasts", amount: 2, unit: "pieces" },  
            { name: "Olive oil", amount: 2, unit: "tablespoons" }, 
            { name: "Bacon", amount: 8, unit: "slices" },  
            { name: "Onion", amount: 1, unit: "medium, diced" },  
            { name: "Garlic", amount: 4, unit: "cloves, minced" },  
            { name: "Heavy cream", amount: 1.5, unit: "cups" },  
            { name: "Parmesan cheese", amount: 100, unit: "grams" },  
            { name: "Egg yolks", amount: 4, unit: "pieces" },  
            { name: "Pasta", amount: 454, unit: "grams" },  
            { name: "Salt", amount: 0, unit: "to taste" },  
            { name: "Black pepper", amount: 0, unit: "to taste" },  
            { name: "Parsley", amount: 0, unit: "for garnish" }  
        ],
        steps: [
            "Cook pasta in a large pot of salted water according to package directions. Once cooked, drain and set aside. Reserve 1 cup of pasta water.",
            "Heat 2 tablespoons of olive oil in a large skillet over medium heat. Season chicken breasts with salt and pepper, then cook for 6-7 minutes on each side, or until fully cooked. Remove from the skillet and set aside to rest. Once rested, slice the chicken into bite-sized pieces.",
            "In the same skillet, add the bacon and cook until crispy, turning as needed. Remove bacon and place on a paper towel to drain. Once cooled, chop the bacon into small pieces.",
            "Drain excess bacon grease, leaving about 1 tablespoon in the skillet. Add diced onions and cook for 3-4 minutes, until soft and translucent.",
            "Add minced garlic and cook for 1 minute, until fragrant. Stir constantly to avoid burning the garlic.",
            "Pour in the heavy cream and bring it to a gentle simmer, stirring frequently. Add the grated Parmesan cheese and stir until melted and the sauce becomes smooth.",
            "In a small bowl, whisk the egg yolks. Slowly add a few spoonfuls of the hot cream sauce into the egg yolks, whisking continuously to temper the eggs. Then, slowly pour the egg mixture back into the skillet, stirring constantly.",
            "Add the chopped chicken and bacon into the sauce, stirring to combine. If the sauce is too thick, add some of the reserved pasta water to reach your desired consistency.",
            "Add the cooked pasta to the skillet and toss everything together until the pasta is well coated with the sauce.",
            "Season with additional salt and black pepper to taste. Garnish with chopped parsley and serve immediately."
        ]
    },
    chickenAlfredo: {
        ingredients: [
            { name: "Extra-virgin olive oil", amount: 1, unit: "tablespoon" },  
            { name: "Boneless skinless chicken breasts", amount: 454, unit: "grams" },  
            { name: "Kosher salt", amount: 1, unit: "teaspoon" },  
            { name: "Freshly ground black pepper", amount: 1, unit: "teaspoon" },  
            { name: "Small shallot, diced", amount: 1, unit: "" },  
            { name: "Garlic cloves, minced", amount: 2, unit: "" },  
            { name: "Low-sodium chicken broth", amount: 2, unit: "cups" },  
            { name: "Half-and-half", amount: 1, unit: "cup" },  
            { name: "Fettuccine", amount: 227, unit: "grams" },  
            { name: "Freshly grated Parmesan", amount: 100, unit: "grams" }, 
            { name: "Chopped parsley", amount: 2, unit: "tablespoons" } 
        ],
        steps: [
            "In a large, high-sided skillet, heat oil over medium-high heat. Season the chicken with salt and pepper, and cook until golden and cooked through (about 8 minutes per side). Once done, transfer the chicken to a plate and set aside.",
            "To the same skillet, add shallots and garlic. Cook until softened, about 2 minutes.",
            "Pour in chicken broth, half-and-half, and bring to a simmer. Add fettuccine and simmer, stirring frequently, until pasta is al dente and liquid is reduced by half (about 10 minutes).",
            "Stir in Parmesan until creamy. Remove from heat and stir in the chopped parsley.",
            "Slice the cooked chicken into strips and toss in the skillet with the pasta, or serve it on top.",
            "Garnish with extra Parmesan and parsley before serving, if desired."
        ]
    },
    fluffyPancakes: {
        ingredients: [
            { name: "All-purpose flour", amount: 180, unit: "grams" },
            { name: "Baking powder", amount: 3.5, unit: "teaspoons" },  
            { name: "Salt", amount: 1, unit: "teaspoon" },  
            { name: "White sugar", amount: 1, unit: "tablespoon" },  
            { name: "Egg", amount: 1, unit: "whole" },  
            { name: "Milk", amount: 300, unit: "grams" },  
            { name: "Unsalted butter, melted", amount: 42, unit: "grams" },  
            { name: "Vanilla extract", amount: 1, unit: "teaspoon" }  
        ],
        steps: [
            "Whisk together the flour, baking powder, salt, and sugar in a medium bowl.",
            "In another bowl, whisk the egg, milk, melted butter, and vanilla extract.",
            "Pour the wet ingredients into the dry ingredients and whisk until combined. Do not overmix.",
            "Heat a non-stick pan or griddle over medium heat and lightly grease it with butter or cooking spray.",
            "Pour 1/4 cup of batter for each pancake onto the griddle. Cook until bubbles form on the surface, then flip and cook the other side until golden brown.",
            "Serve warm with your favorite toppings like maple syrup or fresh fruit."
        ]
    },
    garlicParmesanRoastedAsparagus: {
        ingredients: [
            { name: "Asparagus", amount: 1, unit: "bunch (trimmed)" },
            { name: "Olive Oil", amount: 2, unit: "tbsp" },
            { name: "Garlic", amount: 3, unit: "cloves (minced)" },
            { name: "Parmesan Cheese", amount: 0.25, unit: "cup (grated)" },
            { name: "Salt", amount: 0.5, unit: "tsp" },
            { name: "Black Pepper", amount: 0.25, unit: "tsp" }
        ],
        steps: [
            "Preheat oven to 425°F (220°C).",
            "Arrange asparagus on a baking sheet.",
            "Drizzle with olive oil and sprinkle with garlic, Parmesan, salt, and pepper.",
            "Toss asparagus to coat evenly.",
            "Bake for 15-20 minutes until tender and golden."
        ]
    },
    
    bestRollsRecipe: {
        ingredients: [
            { name: "Warm water", amount: 360, unit: "grams" }, 
            { name: "Granulated sugar", amount: 3, unit: "tablespoons" }, 
            { name: "Yeast", amount: 1, unit: "tablespoon" },  
            { name: "Salt", amount: 1, unit: "teaspoon" },  
            { name: "Butter", amount: 56, unit: "grams" }, 
            { name: "Egg", amount: 1, unit: "" },  
            { name: "All-purpose flour", amount: 480, unit: "grams" },  
            { name: "Butter (for brushing rolls)", amount: 28, unit: "grams" } 
        ],
        steps: [
            "In a large bowl, combine warm water, sugar, and yeast. Let it sit for 5-10 minutes until it gets foamy.",
            "Add salt, butter, and egg to the yeast mixture. Mix well until smooth.",
            "Gradually add in the flour, one cup at a time, mixing after each addition.",
            "Once the dough has come together, knead for about 5-7 minutes until smooth and elastic.",
            "Place the dough in a greased bowl, cover with a towel, and let it rise for about 1 hour or until doubled in size.",
            "Punch down the dough and divide it into 12-15 pieces. Shape each piece into a roll and place on a greased baking sheet.",
            "Cover and let the rolls rise again for about 30-45 minutes, until puffy.",
            "Preheat the oven to 375°F (190°C).",
            "Bake the rolls for 12-15 minutes or until golden brown.",
            "Brush the hot rolls with melted butter immediately after removing them from the oven."
        ]
    },
    
    mayoRecipe: {
        ingredients: [
            { name: "egg yolks", amount: 2, unit: "large" },  
            { name: "Dijon mustard", amount: 1, unit: "teaspoon" }, 
            { name: "fresh lemon juice", amount: 1, unit: "tablespoon" }, 
            { name: "white wine vinegar", amount: 1, unit: "teaspoon" },  
            { name: "neutral flavored oil (like grape seed, safflower, or canola oil)", amount: 240, unit: "grams" },  
            { name: "salt", amount: 1/4, unit: "teaspoon" },  
            { name: "freshly ground black pepper", amount: "to taste", unit: "" }  
        ],
        steps: [
          "Add egg yolks, Dijon mustard, lemon juice, and vinegar to a medium bowl. Whisk until blended and bright yellow, about 30 seconds.",
          "Start whisking vigorously, and slowly pour in oil. Begin with a few drops at a time. Once about a quarter of the oil is added, pour a little quicker.",
          "When the mixture thickens and starts looking like mayonnaise, whisk in salt, and pepper to taste."
        ]
    },
    honeyPizzaDoughRecipe: {
        ingredients: [
            { name: "warm water", amount: 240, unit: "grams" },  
            { name: "active dry yeast", amount: 1, unit: "packet" },  
            { name: "honey", amount: 2, unit: "tablespoons" },  
            { name: "olive oil", amount: 2, unit: "tablespoons" },  
            { name: "all-purpose flour", amount: 360, unit: "grams" },  
            { name: "salt", amount: 1, unit: "teaspoon" } 
        ],
        steps: [
            "In a large mixing bowl, combine warm water and honey, then sprinkle the yeast over the top. Let it sit for 5-10 minutes, until the yeast is foamy and activated.",
            "Once the yeast is activated, stir in olive oil and salt. Gradually add in the flour, 1 cup at a time, stirring with a wooden spoon or using a stand mixer with a dough hook attachment, until the dough begins to form a ball.",
            "Transfer the dough to a floured surface and knead for 5-7 minutes, until smooth and elastic. If the dough is too sticky, sprinkle with a bit more flour.",
            "Place the dough in a lightly oiled bowl, cover with a damp towel, and let it rise in a warm place for about 1 hour, or until doubled in size.",
            "Once the dough has risen, punch it down to release the air, then divide it into two equal portions. Roll each portion out into a pizza shape on a floured surface, ready for toppings and baking."
        ]
    },
    pancakeSyrupRecipe: {
        ingredients: [
            { name: "water", amount: 240, unit: "grams" },  
            { name: "white sugar", amount: 200, unit: "grams" },  
            { name: "brown sugar", amount: 220, unit: "grams" }, 
            { name: "corn syrup", amount: 1, unit: "tablespoon" },  
            { name: "vanilla extract", amount: 1, unit: "teaspoon" },  
            { name: "butter", amount: 14, unit: "grams" }  
        ],
        steps: [
            "In a medium saucepan, combine water, white sugar, brown sugar, and corn syrup over medium heat. Stir until sugars dissolve and the mixture comes to a boil.",
            "Once the mixture begins boiling, reduce heat to low and simmer for 3-5 minutes, stirring occasionally.",
            "Remove the saucepan from heat and stir in the vanilla extract and butter until well combined.",
            "Allow the syrup to cool slightly before serving. It will thicken as it cools."
        ]
    },
    chocolateCookiesRecipe: {
        ingredients: [
            { name: "all-purpose flour", amount: 240, unit: "grams" },  
            { name: "unsweetened cocoa powder", amount: 53, unit: "grams" },  
            { name: "baking soda", amount: 1, unit: "teaspoon" },  
            { name: "salt", amount: 1/2, unit: "teaspoon" },  
            { name: "unsalted butter (softened)", amount: 170, unit: "grams" },  
            { name: "granulated sugar", amount: 200, unit: "grams" }, 
            { name: "brown sugar (packed)", amount: 110, unit: "grams" }, 
            { name: "eggs", amount: 2, unit: "large" }, 
            { name: "vanilla extract", amount: 1, unit: "teaspoon" },  
            { name: "semi-sweet chocolate chips", amount: 340, unit: "grams" }  
        ],
        steps: [
            "Preheat your oven to 350°F (180°C) and line two baking sheets with parchment paper.",
            "In a medium bowl, whisk together the flour, cocoa powder, baking soda, and salt. Set aside.",
            "In a large mixing bowl, beat together the butter, granulated sugar, and brown sugar until light and fluffy, about 2-3 minutes.",
            "Add the eggs and vanilla extract to the butter mixture and mix until fully combined.",
            "Gradually add the dry ingredients to the wet ingredients, mixing until just combined. Stir in the chocolate chips.",
            "Scoop dough by the tablespoon onto prepared baking sheets, spacing them about 2 inches apart.",
            "Bake the cookies for 8-10 minutes, or until the edges are set but the centers are still soft.",
            "Allow the cookies to cool on the baking sheet for 5 minutes before transferring them to a wire rack to cool completely."
        ]
    },
    ranchDressingRecipe: {
        ingredients: [
            { name: "buttermilk", amount: 1/2, unit: "cup" },
            { name: "sour cream", amount: 1/2, unit: "cup" },
            { name: "mayonnaise", amount: 1/2, unit: "cup" },
            { name: "fresh dill (chopped)", amount: 1, unit: "tablespoon" },
            { name: "fresh parsley (chopped)", amount: 1, unit: "tablespoon" },
            { name: "fresh chives (chopped)", amount: 1, unit: "tablespoon" },
            { name: "garlic (minced)", amount: 1, unit: "clove" },
            { name: "onion powder", amount: 1/2, unit: "teaspoon" },
            { name: "salt", amount: 1/2, unit: "teaspoon" },
            { name: "black pepper", amount: 1/4, unit: "teaspoon" },
            { name: "lemon juice", amount: 1, unit: "teaspoon" }
        ],
        steps: [
            "In a medium mixing bowl, whisk together buttermilk, sour cream, and mayonnaise until smooth and well combined.",
            "Add in the chopped dill, parsley, chives, minced garlic, onion powder, salt, pepper, and lemon juice. Stir to combine.",
            "Taste the dressing and adjust seasonings as necessary.",
            "Cover and refrigerate for at least 30 minutes to allow the flavors to meld together before serving."
        ]
    },
    ladyfingersRecipe: {
        ingredients: [
            { name: "large eggs", amount: 4, unit: "" },  
            { name: "granulated sugar", amount: 100, unit: "grams" },  
            { name: "vanilla extract", amount: 1, unit: "teaspoon" },  
            { name: "all-purpose flour", amount: 120, unit: "grams" },  
            { name: "cornstarch", amount: 2, unit: "tablespoons" },  
            { name: "powdered sugar (for dusting)", amount: "", unit: "" } 
        ],
        steps: [
            "Preheat your oven to 350°F (175°C) and line two baking sheets with parchment paper. Set aside.",
            "Separate the eggs, placing the yolks in one bowl and the whites in another. In a large mixing bowl, beat the egg yolks with 1/4 cup of the granulated sugar and vanilla extract until pale and fluffy, about 3-4 minutes.",
            "In a separate clean bowl, beat the egg whites on medium speed until soft peaks form. Gradually add the remaining 1/4 cup of sugar while continuing to beat until stiff peaks form.",
            "Gently fold the whipped egg whites into the yolk mixture until just combined.",
            "In another bowl, sift together the flour and cornstarch. Gently fold the dry ingredients into the egg mixture in three parts, being careful not to deflate the batter.",
            "Transfer the batter into a piping bag fitted with a round tip. Pipe 3-inch lines of batter onto the prepared baking sheets, spacing them about 1 inch apart.",
            "Dust the piped batter with powdered sugar before baking.",
            "Bake for 12-15 minutes or until the ladyfingers are lightly golden around the edges and spring back when touched.",
            "Allow the ladyfingers to cool on the baking sheet for a few minutes before transferring to a wire rack to cool completely."
        ]
    },
    moistChocolateCakeRecipe: {
        ingredients: [
            { name: "all-purpose flour", amount: 120, unit: "grams" }, 
            { name: "granulated sugar", amount: 200, unit: "grams" }, 
            { name: "unsweetened cocoa powder", amount: 28, unit: "grams" },
            { name: "baking powder", amount: 1, unit: "teaspoon" }, 
            { name: "baking soda", amount: 1/2, unit: "teaspoon" }, 
            { name: "salt", amount: 1/4, unit: "teaspoon" },
            { name: "large egg", amount: 1, unit: "" }, 
            { name: "whole milk", amount: 1/2, unit: "cup" },
            { name: "vegetable oil", amount: 1/4, unit: "cup" },
            { name: "pure vanilla extract", amount: 1, unit: "teaspoon" },
            { name: "hot water", amount: 1/2, unit: "cup" }
        ],
        steps: [
            "Preheat your oven to 350°F (175°C) and grease and line an 8-inch round cake pan with parchment paper.",
            "In a large mixing bowl, whisk together flour, sugar, cocoa powder, baking powder, baking soda, and salt.",
            "In a separate bowl, whisk together the egg, milk, vegetable oil, and vanilla extract until well combined.",
            "Pour the wet ingredients into the dry ingredients and stir until just combined. Be careful not to overmix.",
            "Gradually add the hot water to the batter, stirring gently until smooth. The batter will be thin, but that’s normal.",
            "Pour the batter into the prepared cake pan and smooth the top.",
            "Bake for 30-35 minutes, or until a toothpick inserted into the center comes out clean.",
            "Let the cake cool in the pan for 10 minutes, then transfer to a wire rack to cool completely."
        ]
    },
    doubleChocolateMuffinsRecipe: {
        ingredients: [
            { name: "all-purpose flour", amount: 200, unit: "grams" },
            { name: "unsweetened cocoa powder", amount: 1/2, unit: "cup" },
            { name: "baking powder", amount: 1, unit: "teaspoon" },
            { name: "baking soda", amount: 1/4, unit: "teaspoon" },
            { name: "salt", amount: 1/2, unit: "teaspoon" },
            { name: "eggs", amount: 2, unit: "large" },
            { name: "granulated sugar", amount: 100, unit: "grams" },
            { name: "brown sugar", amount: 110, unit: "grams" },
            { name: "vegetable oil", amount: 1/2, unit: "cup" },
            { name: "sour cream", amount: 1/2, unit: "cup" },
            { name: "whole milk", amount: 1/4, unit: "cup" },
            { name: "pure vanilla extract", amount: 2, unit: "teaspoons" },
            { name: "semi-sweet chocolate chips", amount: 1.5, unit: "cups" }
        ],
        steps: [
            "Preheat your oven to 425°F (218°C) and line a 12-count muffin pan with liners or spray with nonstick spray.",
            "In a large mixing bowl, whisk together the flour, cocoa powder, baking powder, baking soda, and salt. Set aside.",
            "In a medium bowl, whisk together the eggs, granulated sugar, brown sugar, vegetable oil, sour cream, milk, and vanilla extract until smooth and combined.",
            "Pour the wet ingredients into the dry ingredients and fold together with a spatula or wooden spoon. Do not overmix. The batter will be thick.",
            "Fold in the chocolate chips until evenly dispersed.",
            "Spoon the batter into the muffin cups, filling each cup almost to the top.",
            "Bake the muffins at 425°F (218°C) for 5 minutes, then reduce the oven temperature to 350°F (177°C) and continue baking for an additional 15-17 minutes until a toothpick inserted into the center comes out clean.",
            "Let the muffins cool in the pan for 10 minutes, then transfer to a wire rack to cool completely."
        ]
    }                   
};

let currentRecipe = {};
let multiplier = 1;

// Load recipe
function loadRecipe() {
    const recipeSelect = document.getElementById('recipe-select');
    const recipeName = recipeSelect.value;

    if (recipeName === "") return;

    currentRecipe = recipes[recipeName];
    displayRecipe();
}

// Display recipe
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

// Toggle ingredient
function toggleIngredient(ingredientIndex) {
    const ingredientLabel = document.querySelector(`label[for='ingredient-${ingredientIndex}']`);
    ingredientLabel.classList.toggle('completed');
}

// Toggle step
function toggleStep(stepIndex) {
    const stepLabel = document.querySelector(`label[for='step-${stepIndex}']`);
    stepLabel.classList.toggle('completed');
}

// Multiply ingredients
function multiplyIngredients() {
    const multiplierSelect = document.getElementById('multiplier');
    multiplier = Number(multiplierSelect.value);
    displayRecipe(); // Update amounts
}

// Cook Mode
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
