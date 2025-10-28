/**
 * Array of recipe objects containing all available recipes with details like name, image, ingredients, diet, allergies, and instructions.
 * Each recipe object includes:
 * - name: Recipe name
 * - image: URL to recipe image
 * - ingredients: Array of ingredient strings
 * - diet: Dietary category (e.g., vegan, vegetarian)
 * - allergies: Array of allergens to avoid
 * - instructions: Step-by-step cooking instructions
 */
const recipes = [
      // 🌿 VEGAN
      { name: "Vegan Buddha Bowl",
       image: "https://www.crazyvegankitchen.com/wp-content/uploads/2023/11/buddha-bowl-recipe.jpg",
        ingredients: [
    "For the bowl",
    "1 cup Quinoa rinsed",
    "1 can Chickpeas drained and rinsed",
    "2 cups Spinach fresh",
    "1 Avocado sliced",
    "1 tablespoon Olive Oil",
    "Salt to taste",
    "Pepper to taste"
  ], diet: "vegan", allergies: ["nuts", "gluten"], instructions: "Rinse quinoa under cold water. In a medium saucepan, bring 2 cups of water to a boil. Add quinoa, reduce heat to low, cover, and simmer for 15 minutes or until water is absorbed. Fluff with a fork and set aside. While quinoa cooks, drain and rinse chickpeas. In a large bowl, assemble the bowl by placing cooked quinoa at the bottom. Top with chickpeas, fresh spinach, and sliced avocado. Drizzle with olive oil, season with salt and pepper to taste. Serve immediately." },


      { name: "Vegan Lentil Soup",
      image: "https://www.eatingwell.com/thmb/Z0BEeziNOHha8XZVXMdIHdi1Y8Q=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/7873236-vegan-lentil-soup-beauty-square-8ef4353751bf43718bc31c8b75ac1f37.jpg", ingredients: [
    "For the soup",
    "1 cup Red Lentils rinsed",
    "1 large Carrot diced",
    "1 medium Onion chopped",
    "2 Tomatoes chopped",
    "2 cloves Garlic minced",
    "1 teaspoon Ground Cumin",
    "1 teaspoon Turmeric Powder",
    "1 teaspoon Salt",
    "4 cups Vegetable Broth",
    "1 tablespoon Olive Oil",
    "Juice of 1 Lemon"
  ], diet: "vegan", allergies: ["gluten"], instructions: "Heat olive oil in a large pot over medium heat. Add chopped onion and minced garlic, sauté until softened, about 5 minutes. Add diced carrot and cook for another 3 minutes. Stir in ground cumin and turmeric powder, cook for 1 minute until fragrant. Add rinsed red lentils, chopped tomatoes, salt, and vegetable broth. Bring to a boil, then reduce heat and simmer for 20-25 minutes until lentils are soft. Use an immersion blender to partially blend the soup for a creamy texture, leaving some chunks. Stir in lemon juice and adjust seasoning to taste. Serve hot with fresh herbs if desired." },


      { name: "Vegan Vegetable Biryani",
       image: "https://www.noracooks.com/wp-content/uploads/2022/05/vegan-biryani-5.jpg",
        ingredients: [
    "For the biryani",
    "2 cups Basmati Rice rinsed",
    "2 Carrots diced",
    "1 cup Green Beans chopped",
    "1 cup Cauliflower florets",
    "1 Onion sliced",
    "2 Tomatoes chopped",
    "2 cloves Garlic minced",
    "1 inch Ginger grated",
    "2 teaspoons Biryani Masala",
    "1 teaspoon Turmeric Powder",
    "1 teaspoon Cumin Seeds",
    "4 cups Vegetable Broth",
    "2 tablespoons Oil",
    "Salt to taste",
    "Fresh Cilantro for garnish"
  ], diet: "vegan", allergies: [], instructions: "Heat oil in a large pot over medium heat. Add cumin seeds and let them splutter. Add sliced onion, minced garlic, and grated ginger. Sauté until onions are golden brown. Add chopped tomatoes, biryani masala, turmeric, and salt. Cook until tomatoes are soft. Add diced carrots, green beans, and cauliflower florets. Stir well and cook for 5 minutes. Add rinsed basmati rice and vegetable broth. Bring to a boil, then reduce heat, cover, and simmer for 20-25 minutes until rice is cooked and vegetables are tender. Fluff with a fork, garnish with fresh cilantro, and serve hot." },


      { name: "Vegan Masala Curry",
       image: "https://schoolnightvegan.com/wp-content/uploads/2022/02/Vegan-Tikka-Masala18245-819x1024.jpg", ingredients: [
    "For the curry",
    "2 Potatoes peeled and cubed",
    "1 cup Green Peas frozen or fresh",
    "1 can Coconut Milk",
    "1 Onion chopped",
    "2 Tomatoes chopped",
    "2 cloves Garlic minced",
    "1 inch Ginger grated",
    "2 teaspoons Curry Powder",
    "1 teaspoon Turmeric Powder",
    "1 teaspoon Cumin Seeds",
    "2 tablespoons Oil",
    "Salt to taste",
    "Fresh Cilantro for garnish"
  ], diet: "vegan", allergies: [], instructions: "Heat oil in a large pan over medium heat. Add cumin seeds and let them splutter. Add chopped onion, minced garlic, and grated ginger. Sauté until onions are golden brown. Add chopped tomatoes, curry powder, turmeric, and salt. Cook until tomatoes are soft and oil separates. Add cubed potatoes and green peas. Stir well and cook for 5 minutes. Pour in coconut milk and bring to a simmer. Cover and cook for 15-20 minutes until potatoes are tender. Adjust seasoning and garnish with fresh cilantro. Serve hot with rice or naan." },


      { name: "Vegan South Indian Sambar",
       image: "https://holycowvegan.net/wp-content/uploads/2023/12/sambar-recipe-10.jpg",
        ingredients: [
    "For the sambar",
    "1 cup Toor Dal (split pigeon peas) rinsed",
    "1 small Tamarind ball (soaked in hot water)",
    "2 Drumsticks cut into pieces",
    "1 Carrot diced",
    "1 Potato diced",
    "1 Onion chopped",
    "2 Tomatoes chopped",
    "2 cloves Garlic minced",
    "1 inch Ginger grated",
    "2 teaspoons Sambar Powder",
    "1 teaspoon Turmeric Powder",
    "1 teaspoon Cumin Seeds",
    "2 tablespoons Oil",
    "Salt to taste",
    "Fresh Cilantro for garnish"
  ], diet: "vegan", allergies: [], instructions: "Rinse toor dal and cook in a pressure cooker with 3 cups water, turmeric, and salt for 4-5 whistles until soft. Mash the dal and set aside. Heat oil in a large pot over medium heat. Add cumin seeds and let them splutter. Add chopped onion, minced garlic, and grated ginger. Sauté until onions are golden brown. Add chopped tomatoes and cook until soft. Stir in sambar powder and cook for 2 minutes. Add drumsticks, carrot, and potato. Cook for 5 minutes. Add mashed dal, tamarind extract (squeeze juice from soaked tamarind), and 2 cups water. Bring to a boil, then simmer for 15-20 minutes until vegetables are tender. Adjust seasoning and garnish with fresh cilantro. Serve hot with rice or idli." },


      { name: "Vegan Coconut Chutney",
       image: "https://cdn.shopify.com/s/files/1/0653/9604/8086/files/Vegan_Coconut_Chutney_Recipe_Img_600x600.jpg?v=1746170530",
        ingredients: [
    "For the chutney",
    "1 cup Fresh Coconut grated",
    "2 Green Chilies chopped",
    "1 inch Ginger grated",
    "2 tablespoons Roasted Chana Dal (split chickpeas)",
    "1 tablespoon Tamarind paste",
    "Salt to taste",
    "1 tablespoon Oil",
    "1 teaspoon Mustard Seeds",
    "A few Curry Leaves",
    "1 Dry Red Chili"
  ], diet: "vegan", allergies: ["nuts"], instructions: "In a blender, add grated coconut, chopped green chilies, grated ginger, roasted chana dal, tamarind paste, and salt. Add a little water and blend into a smooth paste. Transfer to a bowl. Heat oil in a small pan over medium heat. Add mustard seeds and let them splutter. Add curry leaves and dry red chili, sauté for a few seconds. Pour the tempering over the chutney and mix well. Serve with idli, dosa, or vada." },

      // 🥗 VEGETARIAN
      { name: "Paneer Butter Masala",
      image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/07/paneer-butter-masala-200x300.webp", ingredients: [
    "For the gravy",
    "200 grams Paneer cubed",
    "2 tablespoons Butter",
    "1 tablespoon Oil",
    "1 Onion finely chopped",
    "2 Tomatoes pureed",
    "2 cloves Garlic minced",
    "1 inch Ginger grated",
    "1 teaspoon Red Chili Powder",
    "1 teaspoon Garam Masala",
    "1 teaspoon Cumin Powder",
    "1 teaspoon Coriander Powder",
    "1/2 cup Cream",
    "Salt to taste",
    "Fresh Cilantro for garnish"
  ],
      diet: "vegetarian", allergies: ["dairy"],
       instructions: "Heat butter and oil in a pan over medium heat. Add finely chopped onion and sauté until golden brown. Add minced garlic and grated ginger, cook for 1 minute. Stir in pureed tomatoes and cook until the oil separates. Add red chili powder, garam masala, cumin powder, coriander powder, and salt. Cook for 2 minutes. Add cubed paneer and mix well. Pour in cream and simmer for 5 minutes. Garnish with fresh cilantro and serve hot with naan or rice." },


      { name: "Paneer Tikka",
       image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2014/11/paneer-tikka-masala-recipe-1-500x500.jpg",
       ingredients: [
    "For the marinade",
    "250 grams Paneer cubed",
    "1 Bell Pepper (Capsicum) cubed",
    "1 Onion cubed",
    "1 cup Yogurt",
    "1 tablespoon Ginger-Garlic Paste",
    "1 teaspoon Red Chili Powder",
    "1 teaspoon Garam Masala",
    "1 teaspoon Cumin Powder",
    "1 teaspoon Coriander Powder",
    "1/2 teaspoon Turmeric Powder",
    "Salt to taste",
    "2 tablespoons Oil",
    "Juice of 1 Lemon",
    "Fresh Cilantro for garnish"
  ],
        diet: "vegetarian", allergies: ["dairy"],
         instructions: "In a large bowl, mix yogurt, ginger-garlic paste, red chili powder, garam masala, cumin powder, coriander powder, turmeric, salt, oil, and lemon juice to make the marinade. Add cubed paneer, bell pepper, and onion. Mix well to coat all pieces. Cover and marinate in the refrigerator for at least 30 minutes (or up to 2 hours). Preheat grill or oven to 200°C (400°F). Thread the marinated paneer and vegetables onto skewers. Grill for 10-15 minutes, turning occasionally, until charred and cooked through. Garnish with fresh cilantro and serve hot with mint chutney or lemon wedges." },


      { name: "Matar Paneer",
       image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/03/matar-paneer.jpg",
        ingredients: [
    "For the gravy",
    "200 grams Paneer cubed",
    "1 cup Green Peas fresh or frozen",
    "2 Tomatoes pureed",
    "1 Onion finely chopped",
    "2 cloves Garlic minced",
    "1 inch Ginger grated",
    "1 teaspoon Red Chili Powder",
    "1 teaspoon Garam Masala",
    "1 teaspoon Cumin Powder",
    "1 teaspoon Coriander Powder",
    "1/2 teaspoon Turmeric Powder",
    "1/2 cup Cream",
    "2 tablespoons Oil",
    "Salt to taste",
    "Fresh Cilantro for garnish"
  ],
         diet: "vegetarian", allergies: ["dairy"],
         instructions: "Heat oil in a pan over medium heat. Add finely chopped onion and sauté until golden brown. Add minced garlic and grated ginger, cook for 1 minute. Stir in pureed tomatoes and cook until the oil separates. Add red chili powder, garam masala, cumin powder, coriander powder, turmeric, and salt. Cook for 2 minutes. Add green peas and cook for 3-4 minutes. Add cubed paneer and mix well. Pour in cream and simmer for 5 minutes. Garnish with fresh cilantro and serve hot with naan or rice." },


      { name: "Vegetarian Pizza Margherita", 
      image: "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/vegan-pizza-67125d6.jpg", 
      ingredients: [
    "For the pizza",
    "1 Pizza Base (store-bought or homemade)",
    "1/2 cup Tomato Sauce",
    "150g Mozzarella Cheese shredded",
    "1 Tomato sliced",
    "1/2 Onion sliced (optional)",
    "Fresh Basil leaves",
    "1 teaspoon Oregano",
    "Salt to taste",
    "Olive Oil for drizzling"
  ],
       diet: "vegetarian", allergies: ["gluten", "dairy"], 
       instructions: "Preheat oven to 220°C (425°F). Spread tomato sauce evenly over the pizza base. Sprinkle shredded mozzarella cheese on top. Arrange tomato slices and onion slices if using. Season with oregano and salt. Drizzle with olive oil. Bake in the preheated oven for 10-12 minutes or until the cheese is bubbly and golden. Garnish with fresh basil leaves and serve hot." },


      { name: "Veg Burger Deluxe",
      image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/01/veggie-burger-recipe-1.webp",
      ingredients: [
    "For the burger",
    "1 Burger Bun",
    "1 Veg Patty (store-bought or homemade)",
    "2 Lettuce leaves",
    "1 Tomato slice",
    "1 Onion slice",
    "2 Cheese slices",
    "1 tablespoon Mayonnaise",
    "1 tablespoon Ketchup",
    "Salt to taste",
    "Pepper to taste"
  ],
      diet: "vegetarian", allergies: ["gluten", "dairy"],
       instructions: "Preheat a grill or pan over medium heat. Toast the burger bun until golden brown. Cook the veg patty for 3-4 minutes on each side until heated through. Spread mayonnaise and ketchup on the bottom bun. Layer lettuce, tomato slice, onion slice, cheese slices, and the patty. Season with salt and pepper. Top with the other bun half and serve immediately."
      },


      { name: "Idli with Sambar",
      image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/06/idli-sambar-tiffin-sambar-500x500.jpg",
       ingredients: [
    "For the idli",
    "2 cups Idli Rice (parboiled rice)",
    "1 cup Urad Dal (split black gram)",
    "1/2 teaspoon Fenugreek Seeds",
    "Salt to taste",
    "Water as needed",
    "For the sambar",
    "1 cup Toor Dal (split pigeon peas)",
    "1 small Tamarind ball (soaked in hot water)",
    "2 Drumsticks cut into pieces",
    "1 Carrot diced",
    "1 Potato diced",
    "1 Onion chopped",
    "2 Tomatoes chopped",
    "2 cloves Garlic minced",
    "1 inch Ginger grated",
    "2 teaspoons Sambar Powder",
    "1 teaspoon Turmeric Powder",
    "1 teaspoon Cumin Seeds",
    "2 tablespoons Oil",
    "Salt to taste",
    "Fresh Cilantro for garnish"
  ],
        diet: "vegetarian", allergies: ["gluten"],
         instructions: "For idli: Rinse idli rice and urad dal separately. Soak rice and fenugreek seeds in water for 4-6 hours. Soak urad dal in water for 4-6 hours. Grind urad dal to a smooth, fluffy batter. Grind rice to a coarse paste. Mix both batters with salt and ferment overnight in a warm place. Grease idli molds, pour batter, steam for 10-12 minutes until cooked. For sambar: Rinse toor dal and cook with turmeric and 3 cups water in a pressure cooker for 4-5 whistles until soft. Mash the dal. Heat oil in a pot, add cumin seeds, sauté onion, garlic, ginger, tomatoes, veggies, sambar powder, tamarind extract, mashed dal, simmer 15-20 minutes. Garnish with cilantro. Serve hot idli with sambar."
         },


      { name: "Masala Dosa",
      image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/06/masala-dosa-recipe-500x500.jpg", ingredients: [
    "For the dosa batter",
    "2 cups Idli Rice (parboiled rice)",
    "1 cup Urad Dal (split black gram)",
    "1/2 teaspoon Fenugreek Seeds",
    "Salt to taste",
    "Water as needed",
    "For the potato masala",
    "4 Potatoes boiled and mashed",
    "1 Onion chopped",
    "2 Green Chilies chopped",
    "1 inch Ginger grated",
    "1 teaspoon Mustard Seeds",
    "1 teaspoon Cumin Seeds",
    "1/2 teaspoon Turmeric Powder",
    "1 teaspoon Salt",
    "2 tablespoons Oil",
    "Fresh Cilantro for garnish"
  ],
       diet: "vegetarian", allergies: ["gluten"],
       instructions: "For batter: Rinse idli rice and urad dal separately. Soak rice and fenugreek seeds in water for 4-6 hours. Soak urad dal in water for 4-6 hours. Grind urad dal to a smooth, fluffy batter. Grind rice to a coarse paste. Mix both batters with salt and ferment overnight in a warm place. For masala: Heat oil in a pan, add mustard seeds and cumin seeds, let them splutter. Add chopped onion, grated ginger, and green chilies. Sauté until onions are golden. Add turmeric powder, salt, and mashed potatoes. Mix well and cook for 5 minutes. Garnish with fresh cilantro. Heat a tawa or griddle, pour a ladle of batter, spread into a thin circle, cook until crisp, add potato masala in the center, fold and serve hot."
       },


      { name: "Onion Uttapam",
       image: "https://i0.wp.com/www.chitrasfoodbook.com/wp-content/uploads/2018/02/onion-uthappam.jpg?ssl=1", ingredients: [
    "For the batter",
    "2 cups Idli Rice (parboiled rice)",
    "1 cup Urad Dal (split black gram)",
    "1/2 teaspoon Fenugreek Seeds",
    "Salt to taste",
    "Water as needed",
    "For the toppings",
    "2 Onions finely chopped",
    "2 Green Chilies finely chopped",
    "1 inch Ginger grated",
    "Fresh Cilantro chopped",
    "1 teaspoon Cumin Seeds",
    "Salt to taste",
    "Oil for cooking"
  ],
        diet: "vegetarian", allergies: ["gluten"],
         instructions: "Rinse idli rice and urad dal separately. Soak rice and fenugreek seeds in water for 4-6 hours. Soak urad dal in water for 4-6 hours. Grind urad dal to a smooth, fluffy batter. Grind rice to a coarse paste. Mix both batters with salt and ferment overnight in a warm place. Heat a tawa or griddle over medium heat. Pour a ladle of batter and spread into a thick circle. Top with chopped onions, green chilies, grated ginger, fresh cilantro, cumin seeds, and a pinch of salt. Drizzle oil around the edges and cook until the bottom is golden brown. Flip and cook the other side until done. Serve hot with coconut chutney or sambar."
        },


      { name: "Ven Pongal",
       image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/01/pongal-ven-pongal-500x500.jpg", ingredients: [
    "1 cup Rice (short grain or basmati)",
    "1/2 cup Moong Dal (split yellow lentils)",
    "4 cups Water",
    "1/2 teaspoon Turmeric Powder",
    "Salt to taste",
    "2 tablespoons Ghee",
    "1 teaspoon Cumin Seeds",
    "1 teaspoon Black Peppercorns crushed",
    "1 inch Ginger grated",
    "A few Curry Leaves",
    "10-12 Cashews halved",
    "Fresh Cilantro for garnish"
  ],
       diet: "vegetarian", allergies: ["dairy"],
        instructions: "Rinse rice and moong dal together until water runs clear. In a pressure cooker, add rice, dal, water, turmeric, and salt. Cook for 4-5 whistles until soft. Heat ghee in a pan, add cumin seeds, crushed peppercorns, grated ginger, curry leaves, and cashews. Fry until cashews are golden. Pour the tempering over the cooked pongal. Mix well and garnish with cilantro. Serve hot with coconut chutney or sambar."
       },


      { name: "Upma",
       image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/08/upma-recipe.jpg",
       ingredients: [
    "1 cup Semolina (Rava/Sooji)",
    "1 Onion finely chopped",
    "1 Green Chili chopped",
    "1 inch Ginger grated",
    "1 Carrot diced",
    "1/2 cup Green Peas",
    "1 Potato diced (optional)",
    "2 tablespoons Oil or Ghee",
    "1 teaspoon Mustard Seeds",
    "1 teaspoon Cumin Seeds",
    "A few Curry Leaves",
    "1/2 teaspoon Turmeric Powder",
    "Salt to taste",
    "2 cups Water",
    "Fresh Cilantro for garnish",
    "Lemon wedges for serving"
  ],
       diet: "vegetarian", allergies: ["gluten"],
       instructions: "Heat oil in a pan over medium heat. Add mustard seeds and let them splutter. Add cumin seeds, curry leaves, and sauté for a few seconds. Add chopped onion, green chili, and grated ginger. Sauté until onions are golden. Add diced carrot, peas, and potato if using. Cook for 3-4 minutes. Add turmeric and salt. Add semolina and roast for 2-3 minutes until lightly golden. Pour in water and stir continuously to avoid lumps. Cook until the mixture thickens and semolina is cooked, about 5-7 minutes. Garnish with cilantro and serve hot with lemon wedges."
       },


      { name: "Rasam",
      image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/01/rasam.webp",
      ingredients: [
    "1/2 cup Tamarind (soaked in hot water)",
    "2 Tomatoes chopped",
    "1 tablespoon Rasam Powder",
    "1 teaspoon Turmeric Powder",
    "Salt to taste",
    "1 tablespoon Oil or Ghee",
    "1 teaspoon Mustard Seeds",
    "1 teaspoon Cumin Seeds",
    "A few Curry Leaves",
    "1 Dry Red Chili",
    "1/2 teaspoon Asafoetida (Hing)",
    "4 cups Water",
    "Fresh Cilantro for garnish",
    "Lemon wedges for serving (optional)"
  ],
      diet: "vegetarian", allergies: [],
      instructions: "Soak tamarind in hot water for 10 minutes, then extract the juice. In a pot, heat oil over medium heat. Add mustard seeds and let them splutter. Add cumin seeds, curry leaves, dry red chili, and asafoetida. Sauté for a few seconds. Add chopped tomatoes and cook until soft. Stir in rasam powder, turmeric, and salt. Add tamarind extract and water. Bring to a boil, then simmer for 10-15 minutes. Adjust seasoning and garnish with cilantro. Serve hot with rice or as a soup."
     },



      // 🍗 NON-VEG / PROTEIN-RICH
      { name: "Grilled Chicken Salad",
       image: "https://hips.hearstapps.com/hmg-prod/images/grilled-chicken-salad-index-6628169554c88.jpg?crop=0.8890484453220048xw:1xh;center,top&resize=1200:*",
       ingredients: [
    "2 Chicken breasts boneless, skinless",
    "4 cups Mixed greens (lettuce, spinach, etc.)",
    "1 Tomato sliced",
    "1 Cucumber sliced",
    "1/2 Red onion thinly sliced",
    "1 Avocado sliced",
    "1/4 cup Olive oil",
    "2 tablespoons Lemon juice",
    "1 teaspoon Dijon mustard",
    "Salt to taste",
    "Pepper to taste",
    "Fresh herbs like parsley or cilantro (optional)"
  ],
       diet: "keto", allergies: [],
        instructions: "Preheat grill to medium-high heat. Season chicken breasts with salt and pepper. Grill chicken for 6-7 minutes per side until cooked through and internal temperature reaches 165°F. Let rest, then slice. In a large bowl, combine mixed greens, tomato, cucumber, red onion, and avocado. In a small bowl, whisk olive oil, lemon juice, Dijon mustard, salt, and pepper to make dressing. Toss salad with dressing, top with sliced chicken, and garnish with herbs if desired. Serve immediately."
       },


      { name: "Keto Zucchini Noodles",
       image: "https://ketodietapp.com/Blog/lchf-soc/the-best-way-to-cook-zucchini-noodles-5CD669B8.jpg",
       ingredients: [
    "4 medium Zucchini spiralized into noodles",
    "2 tablespoons Olive oil",
    "3 cloves Garlic minced",
    "1/2 teaspoon Red pepper flakes (optional)",
    "Salt to taste",
    "Pepper to taste",
    "1/4 cup Grated Parmesan cheese (optional)",
    "Fresh basil or parsley for garnish (optional)"
  ],
       diet: "keto", allergies: [],
       instructions: "Spiralize zucchini into noodles and set aside. Heat olive oil in a large skillet over medium heat. Add minced garlic and red pepper flakes, sauté for 1-2 minutes until fragrant. Add zucchini noodles, salt, and pepper. Toss and cook for 3-5 minutes until tender but not mushy. Remove from heat, sprinkle with Parmesan if using, and garnish with herbs. Serve immediately."
      },


      { name: "Keto Avocado Omelette",
       image: "https://ketodietapp.com/Blog/lchf-soc/Herbed-Omelet-for-the-Fat-Fast-149C3042.jpg",
       ingredients: [
    "3 large Eggs",
    "1/2 Avocado sliced",
    "1 cup Fresh spinach chopped",
    "1 tablespoon Butter or olive oil",
    "Salt to taste",
    "Pepper to taste",
    "1/4 cup Shredded cheese (optional, for keto)",
    "Fresh herbs like chives or parsley (optional)"
  ],
       diet: "keto", allergies: ["eggs"],
       instructions: "Heat butter or olive oil in a non-stick skillet over medium heat. Whisk eggs with salt and pepper in a bowl. Pour eggs into the skillet and let cook for 1-2 minutes until edges set. Add chopped spinach and sliced avocado to one half of the omelette. Sprinkle cheese if using. Fold the other half over the filling. Cook for another 1-2 minutes until eggs are fully set and cheese melted. Slide onto a plate and garnish with herbs if desired. Serve immediately."
      },


      { name: "Chicken Biryani",
       image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2023/10/chicken-biryani-restaurant-recipe.webp",
       ingredients: [
    "1 kg Chicken cut into pieces",
    "2 cups Basmati Rice rinsed",
    "1 cup Yogurt",
    "2 Onions sliced",
    "2 Tomatoes chopped",
    "4 cloves Garlic minced",
    "1 inch Ginger grated",
    "2 teaspoons Biryani Masala",
    "1 teaspoon Turmeric Powder",
    "1 teaspoon Red Chili Powder",
    "1 teaspoon Cumin Seeds",
    "4 cups Water",
    "1/2 cup Oil or Ghee",
    "Salt to taste",
    "Fresh Cilantro for garnish",
    "Saffron strands (optional)",
    "Fried onions (optional)"
  ],
         diet: "paleo", allergies: ["dairy"],
         instructions: "Marinate chicken with yogurt, biryani masala, turmeric, red chili powder, salt, minced garlic, and grated ginger for at least 1 hour. Rinse basmati rice and soak for 30 minutes. Heat oil in a large pot, add cumin seeds, sliced onions, sauté until golden. Add marinated chicken, cook until chicken is browned. Add chopped tomatoes, cook until soft. Add soaked rice, water, salt, bring to boil, then simmer covered for 20-25 minutes until rice is cooked and chicken is tender. Garnish with cilantro, saffron, and fried onions if using. Serve hot."
         },


      { name: "Mutton Biryani",
       image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2019/02/mutton-biryani-recipe-500x500.jpg",
       ingredients: [
    "1 kg Mutton cut into pieces",
    "2 cups Basmati Rice rinsed",
    "1 cup Yogurt",
    "2 Onions sliced",
    "2 Tomatoes chopped",
    "4 cloves Garlic minced",
    "1 inch Ginger grated",
    "2 teaspoons Biryani Masala",
    "1 teaspoon Turmeric Powder",
    "1 teaspoon Red Chili Powder",
    "1 teaspoon Cumin Seeds",
    "4 cups Water",
    "1/2 cup Oil or Ghee",
    "Salt to taste",
    "Fresh Cilantro for garnish",
    "Saffron strands (optional)",
    "Fried onions (optional)"
  ],
        diet: "paleo", allergies: ["dairy"],
        instructions: "Marinate mutton with yogurt, biryani masala, turmeric, red chili powder, salt, minced garlic, and grated ginger for at least 2 hours. Rinse basmati rice and soak for 30 minutes. Heat oil in a large pot, add cumin seeds, sliced onions, sauté until golden. Add marinated mutton, cook until mutton is browned. Add chopped tomatoes, cook until soft. Add soaked rice, water, salt, bring to boil, then simmer covered for 30-40 minutes until rice is cooked and mutton is tender. Garnish with cilantro, saffron, and fried onions if using. Serve hot."
       },


      { name: "Low-FODMAP Chicken Stir Fry",
       image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjRNPy-guCVktPVwsjYNA25Q0McfLAD95Pbg&s",
       ingredients: [
    "500g Chicken breast sliced into strips",
    "2 Carrots sliced thinly",
    "1 Zucchini sliced",
    "1 inch Ginger grated",
    "2 tablespoons Oil (coconut or olive)",
    "1 tablespoon Low-FODMAP soy sauce alternative (e.g., tamari)",
    "Salt to taste",
    "Pepper to taste",
    "Sesame seeds for garnish (optional)"
  ],
       diet: "low-fodmap", allergies: [],
       instructions: "Heat oil in a wok or large skillet over medium-high heat. Add sliced chicken strips, season with salt and pepper, and stir-fry for 5-7 minutes until browned and cooked through. Remove chicken from the wok and set aside. In the same wok, add grated ginger and sliced carrots, stir-fry for 3 minutes. Add sliced zucchini and continue stir-frying for another 3-4 minutes until vegetables are tender-crisp. Return the chicken to the wok, pour in the low-FODMAP soy sauce alternative, and toss everything together for 1-2 minutes to combine flavors. Garnish with sesame seeds if desired. Serve hot with rice or quinoa."
       },


      { name: "Autoimmune Coconut Curry",
       image: "https://3.bp.blogspot.com/-XG5nGIWaFb0/VE0EvS6vdOI/AAAAAAAAFKU/E2xoGGixkPA/s1600/IMG_0124.JPG",
       ingredients: [
    "500g Chicken breast cut into pieces",
    "1 can Coconut milk (full fat)",
    "1 teaspoon Turmeric powder",
    "1 inch Ginger grated",
    "2 cloves Garlic minced (optional, omit if sensitive)",
    "1 Carrot diced",
    "1 Zucchini diced",
    "1 tablespoon Coconut oil",
    "Salt to taste",
    "Fresh cilantro for garnish (optional)"
  ],
       diet: "autoimmune", allergies: [],
       instructions: "Heat coconut oil in a large pot over medium heat. Add grated ginger and minced garlic (if using), sauté for 1-2 minutes until fragrant. Add diced carrot and zucchini, cook for 3-4 minutes until slightly softened. Stir in turmeric powder and cook for another minute. Add chicken pieces, season with salt, and cook until chicken is browned on all sides, about 5-7 minutes. Pour in coconut milk and bring to a simmer. Reduce heat to low, cover, and simmer for 15-20 minutes until chicken is cooked through and vegetables are tender. Adjust seasoning to taste. Garnish with fresh cilantro if desired. Serve hot with steamed rice or cauliflower rice."
       },


      { name: "Autoimmune Salmon with Veggies",
      image: "https://autoimmunewellness.com/wp-content/uploads/2014/02/salmon.jpg",
       ingredients: [
    "4 Salmon fillets (skin-on or skinless)",
    "1 bunch Asparagus trimmed",
    "2 tablespoons Olive oil",
    "1 Lemon sliced",
    "2 cloves Garlic minced (optional, omit if sensitive)",
    "Salt to taste",
    "Pepper to taste",
    "Fresh dill or parsley for garnish (optional)"
  ],
       diet: "autoimmune", allergies: [],
       instructions: "Preheat oven to 400°F (200°C). Place salmon fillets and asparagus on a baking sheet lined with parchment paper. Drizzle olive oil over the salmon and asparagus. Season with salt and pepper. Add minced garlic if using, and place lemon slices on top of the salmon. Bake for 12-15 minutes until salmon is cooked through and flakes easily with a fork, and asparagus is tender. Garnish with fresh herbs if desired. Serve hot."
      },


      { name: "Low FODMAP Vegetable Khichdi",
       image: "https://tararochford.com/wp-content/uploads/2019/02/IMG_6564.jpg",
       ingredients: [
    "1/2 cup Rice rinsed",
    "1/4 cup Moong dal (split yellow lentils) rinsed",
    "1 Carrot diced",
    "1/2 cup Green beans chopped",
    "1 tablespoon Ghee or low-FODMAP oil",
    "1/2 teaspoon Cumin seeds",
    "Salt to taste",
    "2.5 cups Water"
  ],
       diet: "low-fodmap", allergies: [],
       instructions: "Rinse the rice and moong dal under cold water until the water runs clear. In a pressure cooker, heat the ghee or oil over medium heat. Add the cumin seeds and let them splutter for a few seconds. Add the diced carrot and chopped green beans, sauté for 2-3 minutes until slightly softened. Stir in the rinsed rice and moong dal, mixing well with the vegetables. Add salt to taste and 2.5 cups of water. Close the pressure cooker lid and cook on high pressure for 3 whistles (about 10-12 minutes). Allow the pressure to release naturally. Open the lid, stir the khichdi gently, and serve warm."
      },


      { name: "Low FODMAP Vegetable Upma",
       image: "https://d1uz88p17r663j.cloudfront.net/original/ba32df908435796279e3d79f0d5fbdc1_Rava_Upma_-_Twist.jpg",
       ingredients: [
    "1 cup Semolina (rava) roasted",
    "1 Carrot diced",
    "1 Zucchini diced",
    "2 tablespoons Oil (low-FODMAP)",
    "1 teaspoon Mustard seeds",
    "Salt to taste",
    "2 cups Water"
  ],
       diet: "low-fodmap", allergies: ["gluten"],
       instructions: "Heat a dry pan over medium heat and roast the semolina (rava) for 3-4 minutes until lightly golden and fragrant. Stir continuously to avoid burning. Remove from heat and set aside. In the same pan or a separate one, heat the oil over medium heat. Add the mustard seeds and let them splutter for a few seconds. Add the diced carrot and zucchini, sauté for 3-4 minutes until the vegetables are slightly softened. Pour in 2 cups of hot water and add salt to taste. Bring the mixture to a boil. Gradually add the roasted semolina while stirring continuously to prevent lumps. Reduce the heat to low, cover, and cook for 5-7 minutes until the upma thickens and the semolina is cooked through. Stir occasionally. Remove from heat and let it sit for a minute. Serve warm."
      },


      // 🍰 DESSERTS

      { name: "Vegan Chocolate Cake",
       image: "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chocolate-avocado-cake-51c276b.jpg",
       ingredients: [
    "1.5 cups All-purpose flour (or gluten-free blend)",
    "1 cup Cocoa powder unsweetened",
    "1 cup Granulated sugar",
    "1 cup Plant-based milk (e.g., almond, oat, or soy)",
    "1/2 cup Coconut oil melted",
    "1 tablespoon Apple cider vinegar",
    "1 teaspoon Baking soda",
    "1 teaspoon Vanilla extract",
    "1/2 teaspoon Salt"
  ],
       diet: "vegan", allergies: ["gluten"],
       instructions: "Preheat your oven to 350°F (175°C) and grease a 9-inch round cake pan or line it with parchment paper. In a large mixing bowl, sift together the flour, cocoa powder, sugar, baking soda, and salt. In a separate bowl, whisk together the plant-based milk, melted coconut oil, apple cider vinegar, and vanilla extract until well combined. Pour the wet ingredients into the dry ingredients and stir until just combined. Be careful not to overmix. Pour the batter into the prepared cake pan and smooth the top with a spatula. Bake in the preheated oven for 30-35 minutes, or until a toothpick inserted into the center comes out clean. Remove the cake from the oven and let it cool in the pan for 10 minutes, then transfer to a wire rack to cool completely. Frost with your favorite vegan frosting if desired, and serve."
      },


      { name: "Eggless Vanilla Cake",
       image: "https://www.vidhyashomecooking.com/wp-content/uploads/2021/03/EgglessVanillaSpongeCake-1.jpg",
       ingredients: [
    "1.5 cups All-purpose flour (or gluten-free blend for gluten-free option)",
    "1 cup Granulated sugar",
    "1 teaspoon Baking powder",
    "1/2 teaspoon Baking soda",
    "1/4 teaspoon Salt",
    "1/2 cup Unsalted butter softened (or dairy-free alternative for dairy-free)",
    "1 cup Milk (or plant-based milk for dairy-free)",
    "1 teaspoon Vanilla extract",
    "1 tablespoon White vinegar or lemon juice"
  ],
       diet: "vegetarian", allergies: ["dairy", "gluten"],
       instructions: "Preheat your oven to 350°F (175°C) and grease an 8-inch round cake pan or line it with parchment paper. In a large mixing bowl, sift together the flour, baking powder, baking soda, and salt. In a separate bowl, cream the softened butter and sugar together until light and fluffy, about 2-3 minutes. Add the vanilla extract and vinegar (or lemon juice) to the butter mixture, then gradually add the milk while mixing until combined. Pour the wet ingredients into the dry ingredients and stir gently until just combined. Do not overmix to keep the cake tender. Pour the batter into the prepared cake pan and smooth the top. Bake in the preheated oven for 25-30 minutes, or until a toothpick inserted into the center comes out clean. Allow the cake to cool in the pan for 10 minutes, then transfer to a wire rack to cool completely. Frost with your favorite frosting if desired, and serve."
      },


      { name: "Keto Almond Cake",
      image: "https://stemandspoon.com/wp-content/uploads/2021/12/keto-almond-cake-hero.jpg",
       ingredients: [
    "2 cups Almond flour",
    "1/2 cup Unsalted butter melted",
    "1/2 cup Erythritol or keto-friendly sweetener",
    "4 large Eggs",
    "1 teaspoon Baking powder",
    "1 teaspoon Vanilla extract",
    "1/4 teaspoon Salt",
    "1/2 cup Almond milk (optional, for moisture)"
  ],
       diet: "keto", allergies: ["nuts", "eggs", "dairy"],
       instructions: "Preheat your oven to 350°F (175°C) and grease an 8-inch round cake pan or line it with parchment paper. In a large mixing bowl, whisk together the melted butter, erythritol, eggs, vanilla extract, and almond milk (if using) until well combined. In a separate bowl, sift together the almond flour, baking powder, and salt. Gradually add the dry ingredients to the wet ingredients, stirring until just combined. Do not overmix. Pour the batter into the prepared cake pan and smooth the top with a spatula. Bake in the preheated oven for 25-30 minutes, or until a toothpick inserted into the center comes out clean. Remove the cake from the oven and let it cool in the pan for 10 minutes, then transfer to a wire rack to cool completely. Frost with keto-friendly frosting if desired, and serve."
      },


      { name: "Paleo Banana Pancakes",
       image: "https://www.paleorunningmomma.com/wp-content/uploads/2017/04/banana-coconut-flour-pancakes-6.jpg",
       ingredients: [
    "2 Ripe bananas mashed",
    "2 Large eggs",
    "1/4 cup Almond flour or coconut flour",
    "1/2 teaspoon Baking powder",
    "1/2 teaspoon Ground cinnamon",
    "1/4 teaspoon Salt",
    "1 teaspoon Vanilla extract (optional)",
    "1 tablespoon Honey or maple syrup for topping (optional)"
  ],
        diet: "paleo", allergies: ["eggs"],
        instructions: "In a large mixing bowl, mash the ripe bananas until smooth. Add the eggs and vanilla extract (if using), and whisk until well combined. In a separate bowl, sift together the almond flour (or coconut flour), baking powder, cinnamon, and salt. Gradually add the dry ingredients to the wet ingredients, stirring until just combined. Do not overmix. Heat a non-stick skillet or griddle over medium heat. Lightly grease with a paleo-friendly oil if needed. Pour about 1/4 cup of batter onto the skillet for each pancake. Cook for 2-3 minutes until bubbles form on the surface and the edges look set. Flip the pancakes and cook for another 1-2 minutes until golden brown. Repeat with the remaining batter. Serve warm, drizzled with honey or maple syrup if desired."
       },


      { name: "South Indian Payasam",
      image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/07/semiya-payasam-vermicelli-payasam-500x500.jpg",
       ingredients: [
    "1 cup Vermicelli (semiya)",
    "1 liter Milk",
    "1/2 cup Jaggery grated (or sugar)",
    "1/4 cup Ghee",
    "10-12 Cashews halved",
    "10-12 Raisins",
    "1/2 teaspoon Cardamom powder",
    "A pinch of Saffron strands (optional)"
  ],
       diet: "vegetarian", allergies: ["dairy", "gluten"],
        instructions: "Heat 2 tablespoons of ghee in a heavy-bottomed pan over medium heat. Add the vermicelli and roast until it turns golden brown, stirring continuously to avoid burning. Remove the roasted vermicelli and set aside. In the same pan, add the remaining ghee and fry the cashews until golden. Add raisins and fry until they plump up. Remove and set aside. In a large pot, bring the milk to a boil over medium heat. Add the roasted vermicelli and cook for 10-12 minutes, stirring occasionally, until the vermicelli is soft and the milk thickens slightly. Add the grated jaggery and stir until it dissolves completely. Continue cooking for another 5-7 minutes until the payasam reaches a desired consistency. Stir in the cardamom powder and saffron strands if using. Garnish with the fried cashews and raisins. Serve warm or chilled."
       },


      { name: "Vegan Mango Lassi",
       image: "https://www.vegrecipesofindia.com/wp-content/uploads/2021/05/mango-lassi-recipe-1.jpg",
        ingredients: [
    "For the lassi",
    "2 Ripe Mangoes peeled and chopped",
    "1 cup Coconut Yogurt",
    "1 cup Coconut Milk",
    "1 tablespoon Maple Syrup",
    "1/2 teaspoon Cardamom Powder",
    "Ice cubes as needed"
  ],
       diet: "vegan", allergies: ["nuts"],
       instructions: "In a blender, add chopped mangoes, coconut yogurt, coconut milk, maple syrup, and cardamom powder. Blend until smooth and creamy. Add ice cubes and blend again until chilled. Pour into glasses and serve immediately."
      },


      { name: "Vegetarian Gulab Jamun",
       image: "https://holycowvegan.net/wp-content/uploads/2017/05/vegan-gulab-jamun-17.jpg",
        ingredients: [
    "For the jamuns",
    "1 cup Milk Powder",
    "1/4 cup All-purpose Flour",
    "1/4 teaspoon Baking Soda",
    "2 tablespoons Ghee",
    "1/4 cup Milk",
    "For the syrup",
    "1 cup Sugar",
    "1 cup Water",
    "1/2 teaspoon Cardamom Powder",
    "A few Saffron strands"
  ],
       diet: "vegetarian", allergies: ["dairy", "gluten"],
       instructions: "For syrup: In a pan, dissolve sugar in water, add cardamom and saffron, boil for 5 minutes. For jamuns: Mix milk powder, flour, baking soda. Add ghee and milk to form dough. Shape into balls. Heat oil, fry balls until golden. Soak in warm syrup for 1 hour. Serve warm."
      },


      { name: "Keto Cheesecake Bites",
       image: "https://deliciouslittlebites.com/wp-content/uploads/2019/06/Keto-Cheesecake-Balls-Recipe-Image-7.jpg",
        ingredients: [
    "For the bites",
    "8 oz Cream Cheese softened",
    "1/4 cup Erythritol",
    "1 teaspoon Vanilla Extract",
    "1/2 cup Almond Flour",
    "2 tablespoons Butter melted",
    "For topping",
    "1/4 cup Heavy Cream whipped",
    "1 tablespoon Erythritol"
  ],
       diet: "keto", allergies: ["dairy", "nuts"],
       instructions: "In a bowl, beat cream cheese, erythritol, and vanilla until smooth. Mix almond flour and melted butter, press into mini muffin tins. Fill with cheesecake mixture. Refrigerate for 2 hours. Top with whipped cream and serve chilled."
      },


      { name: "Paleo Chocolate Brownies",
       image: "https://40aprons.com/wp-content/uploads/2019/02/best-paleo-brownies-recipe-5.jpg",
        ingredients: [
    "For the brownies",
    "1 cup Almond Flour",
    "1/2 cup Cocoa Powder",
    "1/2 cup Coconut Sugar",
    "1/4 cup Coconut Oil melted",
    "2 Eggs",
    "1 teaspoon Vanilla Extract",
    "1/2 teaspoon Baking Soda",
    "1/4 teaspoon Salt"
  ],
       diet: "paleo", allergies: ["nuts", "eggs"],
       instructions: "Preheat oven to 350°F. Mix almond flour, cocoa, sugar, baking soda, salt. Add coconut oil, eggs, vanilla. Pour into greased pan. Bake for 20-25 minutes. Cool and cut into squares."
      },


      { name: "Low-FODMAP Fruit Salad",
       image: "https://www.eastewart.com/wp-content/uploads/2023/02/Low-FODMAP-Fruits-V.jpg",
        ingredients: [
    "For the salad",
    "1 cup Strawberries sliced",
    "1 cup Blueberries",
    "1 Banana sliced",
    "1 Orange segmented",
    "1 tablespoon Maple Syrup",
    "1/2 teaspoon Cinnamon"
  ],
       diet: "low-fodmap", allergies: [],
       instructions: "In a bowl, combine strawberries, blueberries, banana, and orange segments. Drizzle with maple syrup and sprinkle cinnamon. Toss gently. Chill for 30 minutes and serve."
      },


      // Indian Meals

      { name: "Dal Makhani",
       image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/02/dal-makhani-recipe.jpg", ingredients: [
    "1 cup Whole Black Lentils (Sabut Urad Dal) rinsed",
    "1/4 cup Kidney Beans (Rajma) rinsed",
    "1 liter Water",
    "1/2 cup Butter",
    "1/2 cup Cream",
    "2 Onions finely chopped",
    "4 Tomatoes pureed",
    "2 cloves Garlic minced",
    "1 inch Ginger grated",
    "2 teaspoons Red Chili Powder",
    "1 teaspoon Turmeric Powder",
    "1 teaspoon Garam Masala",
    "Salt to taste",
    "Fresh Cilantro for garnish"
  ],
       diet: "vegetarian", allergies: ["dairy"],
        instructions: "Rinse the black lentils and kidney beans under cold water until the water runs clear. Soak them in enough water for at least 8 hours or overnight. Drain the soaked lentils and beans. In a pressure cooker, add the soaked lentils, beans, 1 liter of water, salt, turmeric powder, and 1 tablespoon of butter. Cook on high pressure for 8-10 whistles or until the lentils are soft and mushy. Allow the pressure to release naturally. While the lentils are cooking, heat 2 tablespoons of butter in a large pan over medium heat. Add finely chopped onions and sauté until golden brown. Add minced garlic and grated ginger, cook for 1 minute until fragrant. Stir in pureed tomatoes and cook until the oil separates from the masala. Add red chili powder, garam masala, and salt. Cook for 2-3 minutes. Add the cooked lentils and beans along with the cooking liquid to the pan. Stir well and bring to a simmer. Add the remaining butter and cream. Simmer on low heat for 20-25 minutes, stirring occasionally, until the dal thickens and the flavors meld. Adjust seasoning to taste. Garnish with fresh cilantro and serve hot with naan or rice." },


      { name: "Chole Masala",
      image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2023/08/chole-recipe.jpg",
       ingredients: [
    "1 cup Chickpeas (kabuli chana) soaked overnight",
    "2 Onions finely chopped",
    "2 Tomatoes pureed",
    "2 cloves Garlic minced",
    "1 inch Ginger grated",
    "2 teaspoons Chole Masala",
    "1 teaspoon Red Chili Powder",
    "1 teaspoon Turmeric Powder",
    "1 teaspoon Cumin Seeds",
    "2 tablespoons Oil",
    "Salt to taste",
    "Fresh Cilantro for garnish"
  ],
        diet: "vegetarian", allergies: [],
         instructions: "Rinse the chickpeas under cold water until the water runs clear. Soak them in enough water for at least 8 hours or overnight. Drain the soaked chickpeas. In a pressure cooker, add the soaked chickpeas, 4 cups of water, salt, and turmeric powder. Cook on high pressure for 8-10 whistles or until the chickpeas are soft and mushy. Allow the pressure to release naturally. While the chickpeas are cooking, heat oil in a large pan over medium heat. Add cumin seeds and let them splutter. Add finely chopped onions and sauté until golden brown. Add minced garlic and grated ginger, cook for 1 minute until fragrant. Stir in pureed tomatoes and cook until the oil separates from the masala. Add chole masala, red chili powder, and salt. Cook for 2-3 minutes. Add the cooked chickpeas along with the cooking liquid to the pan. Stir well and bring to a simmer. Simmer on low heat for 15-20 minutes, stirring occasionally, until the gravy thickens and the flavors meld. Adjust seasoning to taste. Garnish with fresh cilantro and serve hot with rice, naan, or puri." },


      { name: "Butter Chicken",
      image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2014/09/butter-chicken-recipe-1.jpg", ingredients: [
    "500g Chicken thighs or breasts cut into pieces",
    "2 tablespoons Butter",
    "1 cup Cream",
    "2 Onions finely chopped",
    "2 Tomatoes pureed",
    "2 cloves Garlic minced",
    "1 inch Ginger grated",
    "2 teaspoons Red Chili Powder",
    "1 teaspoon Turmeric Powder",
    "1 teaspoon Garam Masala",
    "1 teaspoon Cumin Powder",
    "1 teaspoon Coriander Powder",
    "Salt to taste",
    "Fresh Cilantro for garnish"
  ],
      diet: "paleo", allergies: ["dairy"],
       instructions: "In a bowl, mix yogurt, red chili powder, turmeric, garam masala, cumin powder, coriander powder, minced garlic, grated ginger, and salt. Add chicken pieces and marinate for at least 1 hour or overnight in the refrigerator. Heat butter in a large pan over medium heat. Add marinated chicken and cook until browned on all sides, about 5-7 minutes. Remove chicken and set aside. In the same pan, add finely chopped onions and sauté until golden brown. Add pureed tomatoes and cook until the oil separates. Stir in any remaining marinade and cook for 2-3 minutes. Add the browned chicken back to the pan along with 1 cup of water. Bring to a simmer and cook covered for 15-20 minutes until chicken is tender. Stir in cream and simmer for another 5 minutes. Adjust seasoning to taste. Garnish with fresh cilantro and serve hot with naan or rice."},


      { name: "Paneer Bhurji",
       image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2018/06/paneer-bhurji-recipe.jpg", ingredients: [
    "200g Paneer crumbled",
    "1 Onion finely chopped",
    "1 Tomato chopped",
    "1 Green Chili chopped",
    "1 teaspoon Ginger Garlic Paste",
    "1/2 teaspoon Turmeric Powder",
    "1 teaspoon Red Chili Powder",
    "1 teaspoon Garam Masala",
    "1/2 teaspoon Cumin Seeds",
    "2 tablespoons Oil",
    "Salt to taste",
    "Fresh Coriander for garnish"
  ],
        diet: "vegetarian", allergies: ["dairy"],
         instructions: "Heat oil in a pan over medium heat. Add cumin seeds and let them splutter. Add chopped onion and sauté until golden brown. Add ginger garlic paste and green chili, cook for 1 minute. Add chopped tomato and cook until soft. Stir in turmeric, red chili powder, garam masala, and salt. Add crumbled paneer and mix well. Cook for 5-7 minutes until paneer is heated through and flavors meld. Garnish with fresh coriander and serve hot with roti or rice."
       },


      { name: "Aloo Gobi",
       image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/03/aloo-gobi-recipe.jpg",
        ingredients: [
    "3-4 medium Potatoes peeled and cubed",
    "1 medium Cauliflower cut into florets",
    "1 Onion finely chopped",
    "2 Tomatoes chopped",
    "1 teaspoon Cumin Seeds",
    "1 teaspoon Turmeric Powder",
    "1 teaspoon Red Chili Powder",
    "1 teaspoon Garam Masala",
    "1/2 teaspoon Coriander Powder",
    "2 tablespoons Oil",
    "Salt to taste",
    "Fresh Coriander for garnish"
  ],
         diet: "vegetarian", allergies: [],
         instructions: "Heat oil in a pan over medium heat. Add cumin seeds and let them splutter. Add chopped onion and sauté until golden brown. Add chopped tomatoes and cook until soft and oil separates. Stir in turmeric powder, red chili powder, garam masala, coriander powder, and salt. Cook for 1-2 minutes until fragrant. Add cubed potatoes and cauliflower florets. Mix well to coat with spices. Add 1/4 cup water, cover, and cook on low heat for 15-20 minutes until vegetables are tender, stirring occasionally. Uncover and cook for another 5 minutes to evaporate excess moisture. Garnish with fresh coriander and serve hot with roti or rice."
         },


      { name: "Rajma Masala",
      image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/05/rajma-recipe-rajma-masala.jpg",
        ingredients: [
    "1 cup Kidney Beans (Rajma) soaked overnight",
    "2 Onions finely chopped",
    "2 Tomatoes pureed",
    "2 cloves Garlic minced",
    "1 inch Ginger grated",
    "2 teaspoons Rajma Masala or Curry Powder",
    "1 teaspoon Red Chili Powder",
    "1 teaspoon Turmeric Powder",
    "1 teaspoon Cumin Seeds",
    "2 tablespoons Oil",
    "Salt to taste",
    "Fresh Cilantro for garnish"
  ],
      diet: "vegetarian", allergies: [],
      instructions: "Rinse the kidney beans under cold water until the water runs clear. Soak them in enough water for at least 8 hours or overnight. Drain the soaked beans. In a pressure cooker, add the soaked kidney beans, 4 cups of water, salt, and turmeric powder. Cook on high pressure for 8-10 whistles or until the beans are soft and mushy. Allow the pressure to release naturally. While the beans are cooking, heat oil in a large pan over medium heat. Add cumin seeds and let them splutter. Add finely chopped onions and sauté until golden brown. Add minced garlic and grated ginger, cook for 1 minute until fragrant. Stir in pureed tomatoes and cook until the oil separates from the masala. Add rajma masala or curry powder, red chili powder, and salt. Cook for 2-3 minutes. Add the cooked kidney beans along with the cooking liquid to the pan. Stir well and bring to a simmer. Simmer on low heat for 15-20 minutes, stirring occasionally, until the gravy thickens and the flavors meld. Adjust seasoning to taste. Garnish with fresh cilantro and serve hot with rice or naan."
    },


      { name: "Kadhai Chicken",
      image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2023/09/kadai-chicken-karahi-chicken-recipe.jpg",
        ingredients: [
    "500g Chicken cut into pieces",
    "2 Bell Peppers (Capsicum) sliced",
    "2 Onions sliced",
    "2 Tomatoes chopped",
    "2 cloves Garlic minced",
    "1 inch Ginger grated",
    "2 teaspoons Kadhai Masala",
    "1 teaspoon Red Chili Powder",
    "1 teaspoon Turmeric Powder",
    "1 teaspoon Cumin Seeds",
    "2 tablespoons Oil",
    "Salt to taste",
    "Fresh Cilantro for garnish"
  ],
      diet: "paleo", allergies: [],
      instructions: "Heat oil in a large pan or wok over medium-high heat. Add cumin seeds and let them splutter. Add sliced onions and sauté until golden brown. Add minced garlic and grated ginger, cook for 1 minute until fragrant. Stir in chopped tomatoes and cook until they are soft and the oil separates. Add kadhai masala, red chili powder, turmeric powder, and salt. Cook for 2-3 minutes until the spices are well combined. Add the chicken pieces and mix well to coat with the masala. Cook covered for 10-12 minutes, stirring occasionally, until the chicken is almost cooked through. Add sliced bell peppers and cook for another 5-7 minutes until the chicken is tender and the peppers are slightly charred but still crisp. Adjust seasoning to taste. Garnish with fresh cilantro and serve hot with naan, rice, or roti."
    },


      // South Indian Additions


      { name: "Medu Vada",
      image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2014/07/medu-vada-recipe-500x500.jpg",
        ingredients: [
    "1 cup Urad Dal (split black gram) soaked overnight",
    "1 inch Ginger grated",
    "2 Green Chilies chopped",
    "A few Curry Leaves chopped",
    "1/2 teaspoon Cumin Seeds",
    "Salt to taste",
    "Oil for frying"
  ],
       diet: "vegetarian", allergies: ["gluten"],
       instructions: "Rinse the urad dal under cold water until the water runs clear. Soak the urad dal in enough water for at least 4-6 hours or overnight. Drain the soaked dal and grind it in a wet grinder or blender with a little water to a smooth, fluffy batter. The batter should be thick and not runny. Transfer the batter to a bowl, add grated ginger, chopped green chilies, chopped curry leaves, cumin seeds, and salt. Mix well. Heat oil in a deep frying pan over medium heat. Wet your hands, take a small portion of the batter, shape it into a ball, flatten it slightly, and make a hole in the center with your thumb to form a vada shape. Gently slide the vada into the hot oil and fry until golden brown and crisp on both sides, about 3-4 minutes per side. Remove with a slotted spoon and drain on paper towels. Serve hot with coconut chutney and sambar."
       },


      { name: "Rava Dosa",
       image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/05/rava-dosa-recipe.jpg",
        ingredients: [
    "1 cup Rava (semolina)",
    "1/2 cup Rice Flour",
    "1/4 cup Maida (all-purpose flour)",
    "1 Onion finely chopped",
    "2 Green Chilies chopped",
    "1 inch Ginger grated",
    "A few Curry Leaves chopped",
    "1/2 teaspoon Cumin Seeds",
    "Salt to taste",
    "Oil for cooking"
  ],
         diet: "vegetarian", allergies: ["gluten"],
         instructions: "In a large mixing bowl, combine rava, rice flour, maida, and salt. Gradually add water (about 3-4 cups) and mix well to form a thin batter. The batter should be thinner than regular dosa batter. Cover and let it rest for 30 minutes to 1 hour. After resting, add chopped onion, green chilies, grated ginger, curry leaves, and cumin seeds to the batter. Mix well. Heat a non-stick tawa or griddle over medium-high heat. Pour a ladle of batter onto the hot tawa and spread it thinly in a circular motion to form a crispy dosa. Drizzle a little oil around the edges and on top. Cook until the bottom is golden and crisp, about 2-3 minutes. Fold the dosa and serve hot with coconut chutney and sambar."
        },


      { name: "Chettinad Chicken Curry",
       image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2013/01/chicken-chettinad-recipe.jpg",
        ingredients: [
    "500g Chicken cut into pieces",
    "1 cup Coconut grated",
    "2 Onions finely chopped",
    "2 Tomatoes chopped",
    "2 cloves Garlic minced",
    "1 inch Ginger grated",
    "2 teaspoons Chettinad Masala",
    "1 teaspoon Red Chili Powder",
    "1 teaspoon Turmeric Powder",
    "1 teaspoon Cumin Seeds",
    "2 tablespoons Oil",
    "Salt to taste",
    "Fresh Cilantro for garnish"
  ],
       diet: "paleo", allergies: [],
       instructions: "In a bowl, mix chicken pieces with Chettinad masala, red chili powder, turmeric powder, minced garlic, grated ginger, and salt. Marinate for at least 30 minutes. Heat oil in a large pan over medium heat. Add cumin seeds and let them splutter. Add finely chopped onions and sauté until golden brown. Add chopped tomatoes and cook until soft. Stir in grated coconut and cook for 2-3 minutes until fragrant. Add the marinated chicken and mix well. Cook covered for 15-20 minutes, stirring occasionally, until chicken is tender. Adjust seasoning to taste. Garnish with fresh cilantro and serve hot with rice or roti."
       },


      { name: "Hyderabadi Biryani",
       image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/02/hyderabadi-biryani-recipe-chicken.jpg",
        ingredients: [
    "1 kg Chicken cut into pieces",
    "2 cups Basmati Rice rinsed",
    "1 cup Yogurt",
    "2 Onions sliced",
    "2 Tomatoes chopped",
    "4 cloves Garlic minced",
    "1 inch Ginger grated",
    "2 teaspoons Biryani Masala",
    "1 teaspoon Turmeric Powder",
    "1 teaspoon Red Chili Powder",
    "1 teaspoon Cumin Seeds",
    "4 cups Water",
    "1/2 cup Oil or Ghee",
    "Salt to taste",
    "Fresh Cilantro for garnish",
    "Saffron strands (optional)",
    "Fried onions (optional)"
  ],
        diet: "paleo", allergies: ["dairy"],
        instructions: "Marinate chicken with yogurt, biryani masala, turmeric, red chili powder, salt, minced garlic, and grated ginger for at least 1 hour. Rinse basmati rice and soak for 30 minutes. Heat oil in a large pot, add cumin seeds, sliced onions, sauté until golden. Add marinated chicken, cook until chicken is browned. Add chopped tomatoes, cook until soft. Add soaked rice, water, salt, bring to boil, then simmer covered for 20-25 minutes until rice is cooked and chicken is tender. Garnish with cilantro, saffron, and fried onions if using. Serve hot."
        },


      { name: "Pesarattu (Green Gram Dosa)",
       image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2012/06/pesarattu.webp",
        ingredients: [
    "1 cup Whole Green Gram (moong dal) soaked overnight",
    "1 inch Ginger grated",
    "2 Green Chilies chopped",
    "A few Curry Leaves chopped",
    "1/2 teaspoon Cumin Seeds",
    "Salt to taste",
    "Oil for cooking"
  ],
        diet: "vegan", allergies: [],
        instructions: "Rinse the whole green gram under cold water until the water runs clear. Soak the green gram in enough water for at least 4-6 hours or overnight. Drain the soaked dal and grind it in a blender with grated ginger, chopped green chilies, chopped curry leaves, cumin seeds, salt, and a little water to a smooth batter. The batter should be thick. Heat a non-stick tawa or griddle over medium-high heat. Pour a ladle of batter onto the hot tawa and spread it thinly in a circular motion to form a dosa. Drizzle a little oil around the edges and on top. Cook until the bottom is golden and crisp, about 2-3 minutes. Fold the dosa and serve hot with coconut chutney or sambar."
       },


      // Indian Snacks / Street Food

      { name: "Samosa",
       image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/12/samosa-recipe.jpg",
       ingredients: [
    "For the dough",
    "2 cups All-purpose flour",
    "1/2 teaspoon Salt",
    "4 tablespoons Oil or ghee",
    "Water as needed",
    "For the filling",
    "3 medium Potatoes boiled and mashed",
    "1/2 cup Green peas boiled",
    "1 Onion finely chopped",
    "2 Green chilies chopped",
    "1 teaspoon Ginger minced",
    "1 teaspoon Cumin seeds",
    "1 teaspoon Coriander powder",
    "1/2 teaspoon Turmeric powder",
    "1/2 teaspoon Red chili powder",
    "1/2 teaspoon Garam masala",
    "Salt to taste",
    "2 tablespoons Oil",
    "Fresh cilantro chopped",
    "Oil for frying"
  ],
       diet: "vegetarian", allergies: ["gluten"],
       instructions: "For the dough: In a bowl, mix flour and salt. Add oil and rub into the flour until crumbly. Gradually add water and knead into a firm dough. Cover and rest for 30 minutes. For the filling: Heat oil in a pan, add cumin seeds and let splutter. Add chopped onion and sauté until golden. Add minced ginger and green chilies, cook for 1 minute. Stir in mashed potatoes, boiled peas, turmeric, red chili powder, coriander powder, garam masala, and salt. Cook for 5 minutes, mashing lightly. Add cilantro and cool. Divide dough into balls, roll into thin circles, cut into halves. Place filling in the center of each half, fold into triangles, seal edges with water. Heat oil for deep frying. Fry samosas until golden brown on medium heat. Drain on paper towels and serve hot with chutney."
     },


      { name: "Pav Bhaji",
       image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/11/pav-bhaji.jpg",
       ingredients: [
    "For the bhaji",
    "2 cups Mixed vegetables (potatoes, cauliflower, carrots, peas, capsicum) chopped",
    "1 cup Tomatoes pureed",
    "1 Onion finely chopped",
    "2 tablespoons Butter",
    "2 tablespoons Pav bhaji masala",
    "1 teaspoon Red chili powder",
    "1/2 teaspoon Turmeric powder",
    "Salt to taste",
    "1/2 cup Water",
    "Fresh cilantro chopped",
    "Lemon wedges for serving",
    "For the pav",
    "8 Pav buns",
    "Butter for toasting"
  ],
         diet: "vegetarian", allergies: ["dairy", "gluten"],
         instructions: "Boil mixed vegetables until soft, mash coarsely and set aside. Heat butter in a pan, add chopped onion and sauté until golden. Add pureed tomatoes, cook until oil separates. Stir in pav bhaji masala, red chili powder, turmeric, and salt. Cook for 2 minutes. Add mashed vegetables and water, simmer for 10 minutes until thick. Garnish with cilantro. For pav: Slit each bun, apply butter and toast on a griddle until golden. Serve bhaji with hot pav, lemon wedges, and extra butter."
       },


      { name: "Vada Pav",
       image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/10/vada-pav-recipe.jpg",
       ingredients: [
    "For the vada",
    "3 medium Potatoes boiled and mashed",
    "1/2 cup Onion finely chopped",
    "2 Green chilies chopped",
    "1 teaspoon Ginger garlic paste",
    "1 teaspoon Mustard seeds",
    "1/2 teaspoon Turmeric powder",
    "1 teaspoon Red chili powder",
    "Salt to taste",
    "1/2 cup Besan (gram flour) for batter",
    "Water for batter",
    "Oil for frying",
    "For serving",
    "8 Pav buns",
    "Green chutney",
    "Dry garlic chutney",
    "Fried chilies (optional)"
  ],
       diet: "vegetarian", allergies: ["gluten"],
       instructions: "For filling: Heat oil, add mustard seeds, let splutter. Add chopped onion, green chilies, ginger garlic paste, sauté until soft. Add turmeric, red chili powder, salt, mashed potatoes. Mix well and cool. Shape into balls. For batter: Mix besan with water to a thin paste, add salt and pinch of turmeric. Heat oil for frying. Dip potato balls in batter and fry until golden. Slit pav buns, spread green and dry chutney, place hot vada inside. Serve with fried chilies."
      },


      { name: "Bhel Puri",
       image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/09/bhel-puri.webp",
       ingredients: [
    "2 cups Puffed rice (murmura)",
    "1/2 cup Sev (crunchy noodles)",
    "1/2 cup Boiled chickpeas",
    "1 Onion finely chopped",
    "1 Tomato finely chopped",
    "1/2 cup Cucumber chopped",
    "2 tablespoons Tamarind chutney",
    "2 tablespoons Green chutney",
    "1 teaspoon Chaat masala",
    "1/2 teaspoon Red chili powder",
    "Fresh cilantro chopped",
    "Lemon juice to taste"
  ],
        diet: "vegan", allergies: [],
        instructions: "In a large bowl, add puffed rice, sev, boiled chickpeas, chopped onion, tomato, cucumber. Drizzle tamarind and green chutney over the mixture. Sprinkle chaat masala, red chili powder, and lemon juice. Toss everything gently to combine. Garnish with fresh cilantro. Serve immediately to avoid sogginess."
       },


      { name: "Dhokla",
       image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/12/khaman-dhokla-recipe.jpg",
       ingredients: [
    "For the batter",
    "1 cup Gram flour (besan)",
    "1/4 cup Yogurt",
    "1 teaspoon Ginger green chili paste",
    "1/2 teaspoon Turmeric powder",
    "1 teaspoon Sugar",
    "1 teaspoon Salt",
    "1 teaspoon Eno fruit salt or baking soda",
    "Water as needed",
    "For tempering",
    "2 tablespoons Oil",
    "1 teaspoon Mustard seeds",
    "1 teaspoon Sesame seeds",
    "A few Curry leaves",
    "2 Green chilies slit",
    "1/2 teaspoon Sugar",
    "1/4 cup Water",
    "Fresh cilantro and coconut for garnish"
  ],
       diet: "vegetarian", allergies: ["dairy"],
       instructions: "In a bowl, mix gram flour, yogurt, ginger chili paste, turmeric, sugar, salt, and enough water to make a smooth batter. Let it rest for 10-15 minutes. Grease a steamer plate. Add eno to the batter and mix gently (batter will froth). Pour into the plate. Steam for 15-20 minutes until cooked. Cool and cut into pieces. For tempering: Heat oil, add mustard seeds, sesame seeds, curry leaves, green chilies. Add water and sugar, boil. Pour over dhokla. Garnish with cilantro and coconut. Serve with green chutney."
      },


      // ===== Burgers =====

      { name: "Classic Veg Burger",
       image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQutOnBv7_0mJaLsi75RL_JxGxbeRzyTsPxkg&s",
        ingredients: [
    "For the patty",
    "2 Potatoes boiled and mashed",
    "1/2 cup Peas boiled",
    "1 Onion finely chopped",
    "2 Green Chilies chopped",
    "1 teaspoon Ginger Garlic Paste",
    "1 teaspoon Garam Masala",
    "1/2 cup Bread Crumbs",
    "Salt to taste",
    "Oil for frying",
    "For assembly",
    "4 Burger Buns",
    "4 Lettuce leaves",
    "1 Tomato sliced",
    "4 Cheese slices",
    "2 tablespoons Mayonnaise",
    "2 tablespoons Ketchup"
  ],
        diet: "vegetarian", allergies: ["gluten", "dairy"],
        instructions: "Mix mashed potatoes, peas, onion, chilies, ginger garlic paste, garam masala, breadcrumbs, and salt. Shape into patties. Heat oil in a pan and fry patties until golden brown on both sides. Toast burger buns lightly. Spread mayonnaise and ketchup on the bottom bun. Layer lettuce, tomato slice, fried patty, and cheese slice. Top with the other bun half. Serve hot with fries or salad."
      },


      { name: "Paneer Tikka Burger",
      image: "https://cdn.tarladalal.com/media/recipe/mainphoto/2025/02/08/big_nutritious_paneer_tikki_burger-6964.webp",
       ingredients: [
    "For the paneer tikka patty",
    "250 grams Paneer cubed",
    "1 cup Yogurt",
    "1 tablespoon Ginger-Garlic Paste",
    "1 teaspoon Red Chili Powder",
    "1 teaspoon Garam Masala",
    "1 teaspoon Cumin Powder",
    "1 teaspoon Coriander Powder",
    "1/2 teaspoon Turmeric Powder",
    "Salt to taste",
    "2 tablespoons Oil",
    "Juice of 1 Lemon",
    "For assembly",
    "4 Burger Buns",
    "4 Lettuce leaves",
    "1 Tomato sliced",
    "1 Onion sliced",
    "2 tablespoons Mayonnaise",
    "2 tablespoons Ketchup"
  ],
        diet: "vegetarian", allergies: ["dairy", "gluten"],
         instructions: "In a large bowl, mix yogurt, ginger-garlic paste, red chili powder, garam masala, cumin powder, coriander powder, turmeric, salt, oil, and lemon juice to make the marinade. Add cubed paneer and mix well to coat all pieces. Cover and marinate in the refrigerator for at least 30 minutes (or up to 2 hours). Preheat grill or oven to 200°C (400°F). Thread the marinated paneer onto skewers or place directly on the grill. Grill for 10-15 minutes, turning occasionally, until charred and cooked through. Let cool slightly. Toast burger buns lightly. Spread mayonnaise and ketchup on the bottom bun. Layer lettuce, tomato slice, onion slice, and grilled paneer. Top with the other bun half. Serve hot with fries or salad." },


      { name: "Chicken Burger",
       image: "https://hips.hearstapps.com/hmg-prod/images/chicken-burgers-index-667b185b5f528.jpg?crop=0.500xw:1.00xh;0.282xw,0&resize=1200:*",
        ingredients: [
    "For the patty",
    "500g Ground Chicken",
    "1 Onion finely chopped",
    "2 cloves Garlic minced",
    "1 Egg",
    "1/2 cup Bread Crumbs",
    "1 teaspoon Paprika",
    "1 teaspoon Salt",
    "1/2 teaspoon Black Pepper",
    "Oil for frying",
    "For assembly",
    "4 Burger Buns",
    "4 Lettuce leaves",
    "1 Tomato sliced",
    "4 slices Cheese",
    "4 tablespoons Mayonnaise",
    "4 tablespoons Ketchup"
  ],
         diet: "paleo", allergies: ["gluten", "eggs", "dairy"],
         instructions: "In a bowl, mix ground chicken, chopped onion, minced garlic, egg, breadcrumbs, paprika, salt, and pepper. Shape into 4 patties. Heat oil in a pan and fry patties until cooked through, about 5-7 minutes per side. Toast buns lightly. Spread mayonnaise and ketchup on buns. Layer lettuce, tomato, patty, cheese. Top with bun. Serve hot."
         },


      { name: "Beef Burger",
       image: "https://images.immediate.co.uk/production/volatile/sites/30/2022/06/Barbecue-beef-burger-68d57ec.jpg",
        ingredients: [
    "For the patty",
    "500g Ground Beef",
    "1 Onion finely chopped",
    "2 cloves Garlic minced",
    "1 Egg",
    "1/2 cup Bread Crumbs",
    "1 teaspoon Paprika",
    "1 teaspoon Salt",
    "1/2 teaspoon Black Pepper",
    "Oil for frying",
    "For assembly",
    "4 Burger Buns",
    "4 Lettuce leaves",
    "1 Tomato sliced",
    "4 slices Cheese",
    "4 tablespoons Mayonnaise",
    "4 tablespoons Ketchup"
  ],
       diet: "paleo", allergies: ["gluten", "eggs", "dairy"],
       instructions: "In a bowl, mix ground beef, chopped onion, minced garlic, egg, breadcrumbs, paprika, salt, and pepper. Shape into 4 patties. Heat oil in a pan and fry patties until cooked through, about 5-7 minutes per side. Toast buns lightly. Spread mayonnaise and ketchup on buns. Layer lettuce, tomato, patty, cheese. Top with bun. Serve hot."
       },


      { name: "Vegan Burger",
      image: "https://minimalistbaker.com/wp-content/uploads/2021/04/Best-Vegan-Burger-SQUARE.jpg",
       ingredients: [
    "For the patty",
    "1 can Black Beans drained and mashed",
    "1/2 cup Oat Flour",
    "1 Onion finely chopped",
    "2 cloves Garlic minced",
    "1 Carrot grated",
    "1 teaspoon Cumin",
    "1 teaspoon Paprika",
    "1 teaspoon Salt",
    "1/2 teaspoon Black Pepper",
    "Oil for frying",
    "For assembly",
    "4 Burger Buns",
    "4 Lettuce leaves",
    "1 Tomato sliced",
    "4 tablespoons Vegan Mayo",
    "4 tablespoons Ketchup"
  ],
       diet: "vegan", allergies: ["gluten"],
       instructions: "In a bowl, mix mashed black beans, oat flour, chopped onion, minced garlic, grated carrot, cumin, paprika, salt, and pepper. Shape into 4 patties. Heat oil in a pan and fry patties until crispy, about 4-5 minutes per side. Toast buns lightly. Spread vegan mayo and ketchup on buns. Layer lettuce, tomato, patty. Top with bun. Serve hot."
       },


      // ===== Chinese Noodles =====

      { name: "Veg Hakka Noodles",
      image: "https://cdn.tarladalal.com/media/recipe/method/2025/01/16/hakka-noodles-12-185109.webp",
      ingredients: [
    "200g Hakka Noodles",
    "1 cup Cabbage shredded",
    "1 Carrot julienned",
    "1 Onion sliced",
    "2 cloves Garlic minced",
    "1 inch Ginger grated",
    "2 tablespoons Soy Sauce",
    "1 tablespoon Vegetable Oil",
    "Salt to taste",
    "Pepper to taste"
  ],
       diet: "vegetarian", allergies: ["gluten", "soy"],
       instructions: "Boil the Hakka noodles according to package instructions until al dente. Drain and rinse with cold water to stop cooking. Set aside. Heat vegetable oil in a large wok or skillet over high heat. Add minced garlic and grated ginger, sauté for 30 seconds until fragrant. Add sliced onion, julienned carrot, and shredded cabbage. Stir-fry for 3-4 minutes until vegetables are tender-crisp. Add soy sauce, salt, and pepper to taste. Toss in the cooked noodles and stir-fry for another 2 minutes to combine all flavors. Serve hot." },


      { name: "Chicken Chow Mein",
      image: "https://www.allrecipes.com/thmb/g7Q5fwMi1Ty4SCQpiqDMRhGirZE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/7268609-295faf701f57482c87257b13bf2f1641.jpg",
       ingredients: [
    "200g Chow Mein Noodles",
    "200g Chicken breast sliced thinly",
    "1 Bell Pepper (Capsicum) sliced",
    "1 Onion sliced",
    "2 cloves Garlic minced",
    "1 inch Ginger grated",
    "2 tablespoons Soy Sauce",
    "1 tablespoon Vegetable Oil",
    "Salt to taste",
    "Pepper to taste"
  ],
       diet: "paleo", allergies: ["soy", "gluten"],
       instructions: "Cook the Chow Mein noodles according to package instructions until al dente. Drain and set aside. Heat vegetable oil in a large wok or skillet over medium-high heat. Add minced garlic and grated ginger, sauté for 30 seconds. Add sliced chicken breast and cook for 4-5 minutes until no longer pink. Add sliced onion and bell pepper, stir-fry for another 3-4 minutes until vegetables are tender-crisp. Stir in soy sauce, salt, and pepper. Add the cooked noodles and toss everything together for 2 minutes to coat evenly. Serve hot."

       },


      { name: "Vegetable Lo Mein",
       image: "https://www.allrecipes.com/thmb/2JvppjOJ2GwGXxzptEIHA_PGJfI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/43208-4659a0f4f0e34b46844e4cd6b7324aef.jpg",
        ingredients: [
    "200g Lo Mein Noodles",
    "1 cup Broccoli florets",
    "1 Carrot sliced thinly",
    "1 Bell Pepper sliced",
    "2 cloves Garlic minced",
    "1 inch Ginger grated",
    "2 tablespoons Soy Sauce",
    "1 tablespoon Sesame Oil",
    "Salt to taste",
    "Pepper to taste"
  ],
         diet: "vegetarian", allergies: ["gluten", "soy"],
         instructions: "Cook the Lo Mein noodles according to package instructions until al dente. Drain and set aside. Heat sesame oil in a large wok or skillet over medium-high heat. Add minced garlic and grated ginger, sauté for 30 seconds until fragrant. Add sliced carrot, broccoli florets, and bell pepper. Stir-fry for 4-5 minutes until vegetables are tender-crisp. Stir in soy sauce, salt, and pepper. Add the cooked noodles and toss everything together for 2 minutes to combine flavors. Serve hot."
         },


      { name: "Egg Fried Noodles",
      image: "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/egg-fried-noodles-ed708ef.jpg",
      ingredients: [
    "200g Noodles",
    "2 Eggs beaten",
    "1 Carrot julienned",
    "1/2 cup Green Peas",
    "2 cloves Garlic minced",
    "1 inch Ginger grated",
    "2 tablespoons Soy Sauce",
    "1 tablespoon Vegetable Oil",
    "Salt to taste",
    "Pepper to taste"
  ],
       diet: "keto", allergies: ["eggs", "soy", "gluten"],
       instructions: "Cook the noodles according to package instructions until al dente. Drain and set aside. Heat 1/2 tablespoon of vegetable oil in a large wok or skillet over medium heat. Add beaten eggs and scramble until cooked. Remove eggs and set aside. In the same pan, add remaining oil, minced garlic, and grated ginger. Sauté for 30 seconds. Add julienned carrot and green peas, stir-fry for 3-4 minutes until tender. Stir in soy sauce, salt, and pepper. Add the cooked noodles and scrambled eggs, toss everything together for 2 minutes. Serve hot." },


      // ===== Chinese / Fried Rice =====

      { name: "Veg Fried Rice",
       image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2020/12/fried-rice-500x500.jpg", ingredients: [
"2 cups Cooked Rice (preferably day-old)",
"1 Carrot julienned",
"1/2 cup Green Peas",
"1 Onion sliced",
"2 cloves Garlic minced",
"1 inch Ginger grated",
"2 tablespoons Soy Sauce",
"1 tablespoon Vegetable Oil",
"Salt to taste",
"Pepper to taste",
"Spring Onions for garnish"
],
        diet: "vegetarian", allergies: ["soy"],
         instructions: "Heat vegetable oil in a large wok or skillet over high heat. Add minced garlic and grated ginger, sauté for 30 seconds until fragrant. Add sliced onion and julienned carrot, stir-fry for 2-3 minutes. Add green peas and cook for another minute. Stir in cooked rice, breaking up any clumps. Add soy sauce, salt, and pepper. Toss everything together for 2-3 minutes until well combined and heated through. Garnish with chopped spring onions and serve hot." },


      { name: "Chicken Fried Rice",
       image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2019/05/chicken-fried-rice-680x510.webp", ingredients: [
"2 cups Cooked Rice (preferably day-old)",
"200g Chicken breast diced",
"1 Carrot julienned",
"1/2 cup Green Peas",
"1 Onion sliced",
"2 cloves Garlic minced",
"1 inch Ginger grated",
"2 tablespoons Soy Sauce",
"1 tablespoon Vegetable Oil",
"Salt to taste",
"Pepper to taste",
"Spring Onions for garnish"
],
        diet: "paleo", allergies: ["soy"],
         instructions: "Heat vegetable oil in a large wok or skillet over high heat. Add diced chicken and cook until browned and cooked through, about 5-7 minutes. Remove chicken and set aside. In the same wok, add minced garlic and grated ginger, sauté for 30 seconds. Add sliced onion, julienned carrot, and green peas, stir-fry for 3-4 minutes. Stir in cooked rice, breaking up any clumps. Add soy sauce, salt, and pepper. Return the chicken to the wok and toss everything together for 2-3 minutes. Garnish with chopped spring onions and serve hot." },


      { name: "Egg Fried Rice", 
      image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/07/egg-fried-rice-recipe.jpg",
       ingredients: [
"2 cups Cooked Rice (preferably day-old)",
"2 Eggs beaten",
"1 Carrot julienned",
"1/2 cup Green Peas",
"1 Onion sliced",
"2 cloves Garlic minced",
"1 inch Ginger grated",
"2 tablespoons Soy Sauce",
"1 tablespoon Vegetable Oil",
"Salt to taste",
"Pepper to taste",
"Spring Onions for garnish"
], 
       diet: "keto", allergies: ["eggs"],
        instructions: "Heat vegetable oil in a large wok or skillet over high heat. Add minced garlic and grated ginger, sauté for 30 seconds. Add sliced onion, julienned carrot, and green peas, stir-fry for 3-4 minutes. Push the vegetables to one side and pour in the beaten eggs. Scramble the eggs until cooked. Stir in cooked rice, breaking up any clumps. Add soy sauce, salt, and pepper. Toss everything together for 2-3 minutes until well combined and heated through. Garnish with chopped spring onions and serve hot." },


      { name: "Vegan Fried Rice", 
      image: "https://minimalistbaker.com/wp-content/uploads/2015/08/Fried-Rice-SQUARE.jpg",
       ingredients: [
"2 cups Cooked Rice (preferably day-old)",
"1 Carrot julienned",
"1/2 cup Green Peas",
"1 Bell Pepper sliced",
"1 Onion sliced",
"2 cloves Garlic minced",
"1 inch Ginger grated",
"2 tablespoons Soy Sauce",
"1 tablespoon Vegetable Oil",
"Salt to taste",
"Pepper to taste",
"Spring Onions for garnish"
], 
       diet: "vegan", allergies: [], 
       instructions: "Heat vegetable oil in a large wok or skillet over high heat. Add minced garlic and grated ginger, sauté for 30 seconds until fragrant. Add sliced onion, julienned carrot, bell pepper, and green peas, stir-fry for 3-4 minutes until tender-crisp. Stir in cooked rice, breaking up any clumps. Add soy sauce, salt, and pepper. Toss everything together for 2-3 minutes until well combined and heated through. Garnish with chopped spring onions and serve hot." },


      { name: "Schezuan Fried Rice",
       image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/07/schezwan-fried-rice-recipe.jpg", ingredients: [
"2 cups Cooked Rice (preferably day-old)",
"1 Bell Pepper sliced",
"1 Carrot julienned",
"1/2 cup Green Peas",
"1 Onion sliced",
"2 cloves Garlic minced",
"1 inch Ginger grated",
"2 tablespoons Schezuan Sauce",
"1 tablespoon Soy Sauce",
"1 tablespoon Vegetable Oil",
"Salt to taste",
"Pepper to taste",
"Spring Onions for garnish"
],
       diet: "vegetarian", allergies: ["soy"],
       instructions: "Heat vegetable oil in a large wok or skillet over high heat. Add minced garlic and grated ginger, sauté for 30 seconds. Add sliced onion, julienned carrot, bell pepper, and green peas, stir-fry for 3-4 minutes. Stir in cooked rice, breaking up any clumps. Add Schezuan sauce, soy sauce, salt, and pepper. Toss everything together for 2-3 minutes until well combined and heated through. Garnish with chopped spring onions and serve hot." }
    ];
/**
 * DOM element references for key UI components.
 */
const container = document.getElementById("recipeContainer");
const ingredientInput = document.getElementById("ingredientInput");
const modeToggle = document.getElementById("modeToggle");
const body = document.getElementById("body");
const navbar = document.querySelector(".navbar");
const recipeModal = new bootstrap.Modal(document.getElementById("recipeModal"));

/**
 * Initialize the app by displaying all recipes and setting up event listeners for filters.
 */
displayRecipes(recipes);

/**
 * Add event listeners to filter inputs to trigger recipe filtering on user input.
 */
ingredientInput.addEventListener("input", filterRecipes);

// Add event listeners for diet checkboxes
document.querySelectorAll('.diet-checkbox').forEach(checkbox =>
  checkbox.addEventListener("change", filterRecipes)
);

// Add event listeners for allergy checkboxes
document.querySelectorAll('.allergy-checkbox').forEach(checkbox =>
  checkbox.addEventListener("change", filterRecipes)
);

/**
 * Filters the recipes based on user input from ingredient search, diet selection, and allergy filter.
 * Updates the displayed recipes to show only those that match the criteria.
 */
function filterRecipes() {
  const ingredientInputValue = ingredientInput.value.toLowerCase();
  const selectedIngredients = ingredientInputValue.split(',').map(i => i.trim()).filter(i => i !== '');
  const selectedDiets = Array.from(document.querySelectorAll('.diet-checkbox:checked')).map(cb => cb.value);
  const selectedAllergies = Array.from(document.querySelectorAll('.allergy-checkbox:checked')).map(cb => cb.value);

  const filtered = recipes.filter(r => {
    // Check if any selected ingredient matches any ingredient in the recipe
    const matchIngredient = selectedIngredients.length === 0 || selectedIngredients.some(ing =>
      r.ingredients.some(i => i.toLowerCase().includes(ing))
    );

    // Check if recipe diet is in selected diets (if any selected)
    const matchDiet = selectedDiets.length === 0 || selectedDiets.includes(r.diet);

    // Check if recipe does not contain any selected allergies
    const matchAllergy = selectedAllergies.length === 0 || !selectedAllergies.some(allergy => r.allergies.includes(allergy));

    return matchIngredient && matchDiet && matchAllergy;
  });

  displayRecipes(filtered);
}

/**
 * Renders the list of recipes in the container element.
 * If no recipes match, displays a message. Otherwise, creates card elements for each recipe.
 * @param {Array} list - Array of recipe objects to display.
 */
function displayRecipes(list) {
  container.innerHTML = ""; // Clear previous recipes
  if (list.length === 0) {
    container.innerHTML = `<p class="text-center text-muted mt-4">
      No recipes found. Try adjusting your filters.
    </p>`;
    return;
  }

  list.forEach(r => {
    container.innerHTML += `
      <div class="col-md-4 mb-4">
        <div class="card card-recipe h-100">
          <img src="${r.image}" class="card-img-top" alt="${r.name}">
          <div class="card-body">
            <h5 class="card-title">${r.name}</h5>
            <p><strong>Diet:</strong> ${r.diet}</p>
            <p><strong>Allergens:</strong> ${
              r.allergies.length ? r.allergies.join(", ") : "None"
            }</p>
            <button class="btn btn-dark btn-sm" onclick='viewRecipe(${JSON.stringify(r)})'>
              View Recipe
            </button>
          </div>
        </div>
      </div>`;
  });
}

/**
 * Displays the selected recipe in a modal window.
 * Populates the modal with recipe name, ingredients list, and instructions.
 * Attaches the download functionality to the download button.
 * @param {Object} recipe - The recipe object to display.
 */
function viewRecipe(recipe) {
  document.getElementById("modalTitle").innerText = recipe.name;

  const list = document.getElementById("modalIngredients");
  list.innerHTML = recipe.ingredients.map(i => `<li>${i}</li>`).join("");

  document.getElementById("modalInstructions").innerText = recipe.instructions;
  recipeModal.show();

  document.getElementById("downloadBtn").onclick = () => downloadRecipe(recipe);
}

/**
 * Downloads the recipe as a plain text file.
 * Creates a blob with the recipe content and triggers a download.
 * @param {Object} recipe - The recipe object to download.
 */
function downloadRecipe(recipe) {
  const content = `Recipe: ${recipe.name}\n\nIngredients:\n${recipe.ingredients.join(
    '\n'
  )}\n\nInstructions:\n${recipe.instructions}`;

  const blob = new Blob([content], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `${recipe.name.replace(/\s+/g, '_')}.txt`; // Replace spaces with underscores

  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

/**
 * Event listener for the dark mode toggle button.
 * Toggles dark mode classes on body and navbar, and updates button text.
 */
modeToggle.addEventListener("click", () => {
  body.classList.toggle("dark");
  navbar.classList.toggle("dark");
  modeToggle.textContent = body.classList.contains("dark")
    ? "☀️ Light Mode"
    : "🌙 Dark Mode";
});

/**
 * Initialize EmailJS for contact form functionality.
 */
(function() {
  emailjs.init("uvw4SjrsVdrNvS-AK");
})();

/**
 * Event listener for the contact form submission.
 * Prevents default form submission, sends email via EmailJS, and updates status message.
 */
document.getElementById("contact-form").addEventListener("submit",function(e){
    e.preventDefault();
    // emailjs.sendForm("YOUR_SERVICE_ID","YOUR_TEMPLATE_ID",this)
     emailjs.sendForm("service_hzs7xwq","template_rrs27wp",this)
     .then(function(response){
        document.getElementById("status").innerHTML="✅ Message sent Sucessfully!";
     },function(error){
        document.getElementById("status").innerHTML="❌ Failed to send message.";
        console.error("FAILED....",error)
     })
})
