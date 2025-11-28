const tabItems = document.querySelectorAll(".tab-item");
const contents = document.querySelectorAll(".tab-content");

tabItems.forEach((item) => {
  item.addEventListener("click", () => {
    tabItems.forEach((t) => t.classList.remove("active"));
    item.classList.add("active");

    const target = item.getAttribute("data-target");
    contents.forEach((c) => {
      if (c.id === target) c.classList.remove("d-none");
      else c.classList.add("d-none");
    });
  });
});

const recipes = [
  {
    title: "Mediterranean Quinoa Bowl",
    description: "Healthy bowl with quinoa, vegetables, and tahini dressing",
    rating: 4.5,
    reviews: 156,
    prepTime: "20 min",
    cookTime: "35 min",
    servings: "2 people",
    difficulty: "Easy",
    cuisine: "Mediterranean",
    image: "./images/QuinoaBowl.png",

    extendedPrepNote:
      "This recipe requires more than 45 minutes to prepare. Plan accordingly!",

    ingredients: [
      "1 cup quinoa",
      "Cherry tomatoes, halved",
      "Cucumber, diced",
      "Red onion, sliced",
      "Kalamata olives",
      "Feta cheese, crumbled",
      "Fresh parsley",
      "Tahini dressing",
      "Lemon juice",
      "Olive oil",
    ],

    instructions: [
      "Rinse quinoa thoroughly and cook 15 minutes.",
      "Prepare vegetables while quinoa cooks.",
      "Mix tahini, lemon juice, garlic, and water.",
      "Fluff quinoa and cool slightly.",
      "Assemble bowl with all ingredients.",
      "Drizzle tahini dressing and serve.",
      "Garnish with fresh parsley.",
    ],

    nutrition: {
      Calories: "480 kcal",
      Protein: "18g",
      Carbohydrates: "58g",
      Fat: "20g",
      Fiber: "10g",
      Sodium: "540mg",
    },

    tips: [
      "Rinse quinoa well to remove bitterness.",
      "Let quinoa cool before adding ingredients.",
      "Make extra tahini dressing.",
      "Add chicken or chickpeas for more protein.",
      "Serve immediately for best taste.",
    ],
  },
  {
    title: "Spicy Thai Peanut Noodles",
    description: "Stir-fried noodles with peanut sauce, veggies, and tofu",
    rating: 4.7,
    reviews: 220,
    prepTime: "25 min",
    cookTime: "20 min",
    servings: "3 people",
    difficulty: "Medium",
    cuisine: "Thai",
    image: "./images/thai_noodles.png",

    ingredients: [
      "200g rice noodles",
      "1 cup shredded carrots",
      "1 red bell pepper, sliced",
      "1 cup broccoli florets",
      "200g firm tofu, cubed",
      "3 tbsp peanut butter",
      "2 tbsp soy sauce",
      "1 tbsp sriracha",
      "1 tbsp sesame oil",
      "2 cloves garlic, minced",
      "1 tsp ginger, grated",
      "Chopped peanuts for garnish",
    ],

    instructions: [
      "Cook noodles according to package instructions.",
      "Sauté tofu in sesame oil until golden.",
      "Stir-fry vegetables for 3-5 minutes.",
      "Mix peanut butter, soy sauce, sriracha, garlic, and ginger into a sauce.",
      "Combine noodles, vegetables, tofu, and sauce.",
      "Cook for 2 more minutes to blend flavors.",
      "Garnish with chopped peanuts and fresh cilantro.",
    ],

    nutrition: {
      Calories: "550 kcal",
      Protein: "22g",
      Carbohydrates: "70g",
      Fat: "20g",
      Fiber: "8g",
      Sodium: "700mg",
    },

    tips: [
      "Use gluten-free noodles if needed.",
      "Add extra veggies like snap peas or mushrooms.",
      "Adjust peanut sauce for more creaminess.",
      "Serve hot for best texture.",
      "Store leftovers separately to prevent sogginess.",
    ],
  },
  {
    title: "Classic Margherita Pizza",
    description:
      "Thin-crust pizza with tomato sauce, fresh mozzarella, and basil",
    rating: 4.8,
    reviews: 310,
    prepTime: "15 min",
    cookTime: "12 min",
    servings: "2 people",
    difficulty: "Easy",
    cuisine: "Italian",
    image: "./images/margherita_pizza.png",

    ingredients: [
      "Pizza dough, 250g",
      "1/2 cup tomato sauce",
      "150g fresh mozzarella, sliced",
      "Fresh basil leaves",
      "1 tbsp olive oil",
      "Salt to taste",
      "Black pepper to taste",
      "Cornmeal for dusting",
    ],

    instructions: [
      "Preheat oven to 250°C with pizza stone inside.",
      "Roll out dough on a floured surface.",
      "Spread tomato sauce evenly over dough.",
      "Add mozzarella slices and season with salt and pepper.",
      "Bake pizza for 10-12 minutes until crust is golden.",
      "Remove from oven and add fresh basil leaves.",
      "Drizzle olive oil and serve hot.",
    ],

    nutrition: {
      Calories: "600 kcal",
      Protein: "25g",
      Carbohydrates: "70g",
      Fat: "25g",
      Fiber: "4g",
      Sodium: "800mg",
    },

    tips: [
      "Use fresh, high-quality mozzarella for best taste.",
      "Preheat oven fully for a crisp crust.",
      "Add toppings after baking for delicate herbs.",
      "Slice immediately to serve hot.",
      "Experiment with different cheeses like parmesan or provolone.",
    ],
  },
  {
    title: "Avocado Toast with Poached Eggs",
    description:
      "Healthy breakfast with smashed avocado, poached eggs, and seeds",
    rating: 4.6,
    reviews: 140,
    prepTime: "10 min",
    cookTime: "10 min",
    servings: "2 people",
    difficulty: "Easy",
    cuisine: "American",
    image: "./images/avocado_toast.png",

    ingredients: [
      "2 slices whole-grain bread",
      "1 ripe avocado",
      "2 large eggs",
      "1 tsp lemon juice",
      "Salt and pepper to taste",
      "Chili flakes",
      "Mixed seeds (pumpkin, sunflower, sesame)",
      "Olive oil drizzle",
    ],

    instructions: [
      "Toast the bread slices until golden brown.",
      "Mash avocado with lemon juice, salt, and pepper.",
      "Poach eggs in simmering water for 3-4 minutes.",
      "Spread avocado mash on toasted bread.",
      "Place poached eggs on top.",
      "Sprinkle chili flakes and mixed seeds.",
      "Drizzle olive oil and serve immediately.",
    ],

    nutrition: {
      Calories: "350 kcal",
      Protein: "14g",
      Carbohydrates: "30g",
      Fat: "20g",
      Fiber: "8g",
      Sodium: "300mg",
    },

    tips: [
      "Use fresh eggs for perfect poaching.",
      "Adjust chili flakes to your spice preference.",
      "Serve immediately for best texture.",
      "Try adding cherry tomatoes or arugula for extra flavor.",
      "Avoid over-mashing avocado to keep some texture.",
    ],
  },
  {
    title: "Chicken Caesar Salad",
    description:
      "Crispy romaine lettuce with grilled chicken, croutons, and Caesar dressing",
    rating: 4.7,
    reviews: 200,
    prepTime: "15 min",
    cookTime: "20 min",
    servings: "3 people",
    difficulty: "Medium",
    cuisine: "American",
    image: "./images/caesar_salad.png",

    ingredients: [
      "2 chicken breasts",
      "1 head romaine lettuce, chopped",
      "1/2 cup Caesar dressing",
      "1/2 cup croutons",
      "1/4 cup grated Parmesan cheese",
      "Salt and pepper",
      "Olive oil",
      "Lemon wedges",
    ],

    instructions: [
      "Season chicken with salt and pepper and grill until cooked.",
      "Chop romaine lettuce and place in a large bowl.",
      "Add croutons and Parmesan cheese.",
      "Slice grilled chicken and add on top.",
      "Drizzle Caesar dressing evenly.",
      "Toss lightly to combine.",
      "Serve with lemon wedges.",
    ],

    nutrition: {
      Calories: "450 kcal",
      Protein: "35g",
      Carbohydrates: "20g",
      Fat: "25g",
      Fiber: "5g",
      Sodium: "600mg",
    },

    tips: [
      "Use homemade croutons for better flavor.",
      "Add anchovies to dressing if desired.",
      "Grill chicken with herbs for extra taste.",
      "Serve immediately to keep lettuce crisp.",
      "Adjust dressing amount to preference.",
    ],
  },
  {
    title: "Berry Smoothie Bowl",
    description:
      "Refreshing smoothie bowl with mixed berries, banana, and granola",
    rating: 4.8,
    reviews: 180,
    prepTime: "10 min",
    cookTime: "0 min",
    servings: "2 people",
    difficulty: "Easy",
    cuisine: "International",
    image: "./images/berry_smoothie.png",

    ingredients: [
      "1 cup frozen mixed berries",
      "1 banana",
      "1/2 cup Greek yogurt",
      "1/4 cup almond milk",
      "2 tbsp honey",
      "1/4 cup granola",
      "Chia seeds for topping",
      "Fresh berries for garnish",
    ],

    instructions: [
      "Blend frozen berries, banana, yogurt, almond milk, and honey until smooth.",
      "Pour into a bowl.",
      "Top with granola, chia seeds, and fresh berries.",
      "Drizzle a little honey on top.",
      "Serve immediately.",
    ],

    nutrition: {
      Calories: "320 kcal",
      Protein: "12g",
      Carbohydrates: "55g",
      Fat: "8g",
      Fiber: "9g",
      Sodium: "50mg",
    },

    tips: [
      "Use frozen banana for creamier texture.",
      "Adjust sweetness with honey or agave syrup.",
      "Mix different berries for variety.",
      "Add protein powder for extra energy.",
      "Serve immediately to prevent melting.",
    ],
  },
  {
    title: "Beef Stir-Fry with Vegetables",
    description:
      "Quick and tasty stir-fry with beef strips, bell peppers, and broccoli",
    rating: 4.6,
    reviews: 210,
    prepTime: "15 min",
    cookTime: "15 min",
    servings: "3 people",
    difficulty: "Medium",
    cuisine: "Asian",
    image: "./images/beef_stirfry.png",

    extendedPrepNote: "Marinate beef for at least 30 minutes for best flavor.",

    ingredients: [
      "300g beef strips",
      "1 red bell pepper, sliced",
      "1 yellow bell pepper, sliced",
      "1 cup broccoli florets",
      "2 tbsp soy sauce",
      "1 tbsp oyster sauce",
      "1 tsp cornstarch",
      "2 cloves garlic, minced",
      "1 tsp ginger, grated",
      "2 tbsp vegetable oil",
      "Sesame seeds for garnish",
    ],

    instructions: [
      "Marinate beef with soy sauce, oyster sauce, and cornstarch for 30 minutes.",
      "Heat oil in a wok and sauté garlic and ginger.",
      "Add beef and cook until browned.",
      "Add vegetables and stir-fry for 5-7 minutes.",
      "Combine beef and vegetables with sauce and cook 2 more minutes.",
      "Garnish with sesame seeds.",
      "Serve hot with steamed rice or noodles.",
    ],

    nutrition: {
      Calories: "500 kcal",
      Protein: "35g",
      Carbohydrates: "25g",
      Fat: "28g",
      Fiber: "6g",
      Sodium: "750mg",
    },

    tips: [
      "Use high heat for quick stir-frying.",
      "Slice beef thinly for tenderness.",
      "Add chili flakes for spice if desired.",
      "Serve immediately to keep veggies crisp.",
      "Experiment with different vegetables like snap peas or mushrooms.",
    ],
  },
  {
    title: "Chocolate Lava Cake",
    description:
      "Decadent dessert with molten chocolate center and powdered sugar topping",
    rating: 4.9,
    reviews: 250,
    prepTime: "15 min",
    cookTime: "12 min",
    servings: "2 people",
    difficulty: "Medium",
    cuisine: "French",
    image: "./images/chocolate_lava.png",

    extendedPrepNote:
      "Serve immediately after baking for gooey chocolate center.",

    ingredients: [
      "100g dark chocolate",
      "50g unsalted butter",
      "2 large eggs",
      "2 egg yolks",
      "1/4 cup sugar",
      "1/4 cup flour",
      "1 tsp vanilla extract",
      "Powdered sugar for garnish",
      "Butter for greasing ramekins",
    ],

    instructions: [
      "Preheat oven to 200°C and grease ramekins with butter.",
      "Melt chocolate and butter together.",
      "Whisk eggs, yolks, and sugar until fluffy.",
      "Fold chocolate mixture into egg mixture.",
      "Sift flour and fold into batter gently.",
      "Pour batter into ramekins and bake 10-12 minutes.",
      "Remove and dust with powdered sugar before serving.",
    ],

    nutrition: {
      Calories: "450 kcal",
      Protein: "7g",
      Carbohydrates: "45g",
      Fat: "28g",
      Fiber: "5g",
      Sodium: "150mg",
    },

    tips: [
      "Do not overbake to keep the center molten.",
      "Use high-quality chocolate for best flavor.",
      "Grease ramekins well to prevent sticking.",
      "Serve with ice cream or berries.",
      "Let cakes cool slightly before removing from ramekins.",
    ],
  },
  {
    title: "Chicken Shawarma",
    description:
      "Juicy marinated chicken served in pita with garlic sauce and pickles",
    rating: 4.8,
    reviews: 320,
    prepTime: "20 min",
    cookTime: "40 min",
    servings: "4 people",
    difficulty: "Medium",
    cuisine: "Middle Eastern",
    image: "./images/chicken_shawarma.png",

    ingredients: [
      "500g chicken thighs, boneless",
      "3 cloves garlic, minced",
      "2 tbsp yogurt",
      "1 tsp ground cumin",
      "1 tsp ground paprika",
      "1/2 tsp turmeric",
      "1/2 tsp cinnamon",
      "Salt and pepper to taste",
      "Olive oil",
      "Pita bread for serving",
      "Pickles and garlic sauce for garnish",
    ],

    instructions: [
      "Mix garlic, yogurt, spices, salt, and olive oil to make marinade.",
      "Coat chicken with marinade and refrigerate for at least 2 hours.",
      "Preheat oven to 200°C and bake chicken for 25-30 minutes.",
      "Slice cooked chicken thinly.",
      "Warm pita bread and spread garlic sauce.",
      "Add chicken and top with pickles.",
      "Roll pita and serve hot.",
    ],

    nutrition: {
      Calories: "400 kcal",
      Protein: "30g",
      Carbohydrates: "30g",
      Fat: "18g",
      Fiber: "3g",
      Sodium: "600mg",
    },

    tips: [
      "Use yogurt-based marinade for tender chicken.",
      "Add extra spices for stronger flavor.",
      "Serve with fresh vegetables like lettuce and tomato.",
      "Warm pita slightly before serving.",
      "Leftover chicken can be used in salads.",
    ],
  },
  {
    title: "Falafel with Tahini Sauce",
    description: "Crispy chickpea fritters served with creamy tahini sauce",
    rating: 4.7,
    reviews: 210,
    prepTime: "25 min",
    cookTime: "15 min",
    servings: "4 people",
    difficulty: "Medium",
    cuisine: "Middle Eastern",
    image: "./images/falafel.png",

    extendedPrepNote: "Soak chickpeas overnight for best texture.",

    ingredients: [
      "1 cup dried chickpeas",
      "1 small onion, chopped",
      "3 cloves garlic",
      "1/4 cup fresh parsley",
      "1 tsp ground cumin",
      "1 tsp ground coriander",
      "Salt and pepper to taste",
      "Vegetable oil for frying",
      "Tahini sauce for serving",
      "Lemon wedges",
    ],

    instructions: [
      "Soak chickpeas overnight in water.",
      "Drain and blend chickpeas, onion, garlic, parsley, and spices to form a coarse paste.",
      "Shape mixture into small balls.",
      "Heat oil in a pan and fry falafel until golden brown.",
      "Drain on paper towels.",
      "Serve hot with tahini sauce and lemon wedges.",
      "Optional: serve in pita with lettuce and tomatoes.",
    ],

    nutrition: {
      Calories: "300 kcal",
      Protein: "12g",
      Carbohydrates: "35g",
      Fat: "12g",
      Fiber: "9g",
      Sodium: "400mg",
    },

    tips: [
      "Do not over-blend chickpeas; keep texture slightly coarse.",
      "Serve immediately for best crispiness.",
      "Add baking powder to make falafel fluffier.",
      "Garnish with fresh herbs for extra flavor.",
      "Falafel can be baked for a healthier option.",
    ],
  },
  {
    title: "Kofta Kebabs",
    description: "Spiced ground beef skewers grilled to perfection",
    rating: 4.7,
    reviews: 230,
    prepTime: "20 min",
    cookTime: "15 min",
    servings: "4 people",
    difficulty: "Medium",
    cuisine: "Middle Eastern",
    image: "./images/kofta_kebabs.png",

    ingredients: [
      "500g ground beef or lamb",
      "1 small onion, grated",
      "2 cloves garlic, minced",
      "1/4 cup fresh parsley, chopped",
      "1 tsp ground cumin",
      "1 tsp ground coriander",
      "1/2 tsp paprika",
      "Salt and pepper to taste",
      "Wooden skewers soaked in water",
      "Olive oil for brushing",
      "Optional: yogurt sauce for serving",
    ],

    instructions: [
      "Mix ground meat with onion, garlic, parsley, and spices.",
      "Shape mixture into long sausage-like shapes around skewers.",
      "Chill for 15 minutes in refrigerator.",
      "Preheat grill or pan, brush with olive oil.",
      "Grill kofta for 10-12 minutes, turning occasionally.",
      "Serve hot with yogurt sauce and pita bread.",
      "Garnish with fresh herbs if desired.",
    ],

    nutrition: {
      Calories: "420 kcal",
      Protein: "28g",
      Carbohydrates: "5g",
      Fat: "32g",
      Fiber: "1g",
      Sodium: "600mg",
    },

    tips: [
      "Do not overwork the meat to keep kofta tender.",
      "Soak skewers to prevent burning.",
      "Serve with grilled vegetables for a full meal.",
      "Add a pinch of cinnamon for authentic flavor.",
      "Brush occasionally with olive oil while grilling to stay moist.",
    ],
  },
  {
    title: "Koshari",
    description:
      "Egyptian national dish made with rice, lentils, pasta, chickpeas, and tomato sauce topped with crispy onions",
    rating: 4.9,
    reviews: 480,
    prepTime: "20 min",
    cookTime: "40 min",
    servings: "4 people",
    difficulty: "Medium",
    cuisine: "Egyptian",
    image: "./images/koshari.png",

    extendedPrepNote:
      "Cooking each component separately and combining at the end ensures perfect texture.",

    ingredients: [
      "1 cup rice",
      "1 cup brown lentils",
      "1 cup elbow macaroni or small pasta",
      "1 can chickpeas, drained",
      "2 large onions, thinly sliced",
      "4 cloves garlic, minced",
      "1 can crushed tomatoes",
      "2 tbsp tomato paste",
      "1 tsp ground cumin",
      "1 tsp ground coriander",
      "1/2 tsp chili flakes",
      "Salt and pepper to taste",
      "3 tbsp vegetable oil",
      "2 tbsp vinegar",
      "Optional: hot sauce for serving",
    ],

    instructions: [
      "Cook lentils in boiling water until tender but not mushy, then drain.",
      "Cook rice separately until fluffy.",
      "Boil pasta until al dente, then drain.",
      "In a pan, heat oil and fry onions until crispy and golden brown. Set aside.",
      "Prepare tomato sauce: sauté garlic, add crushed tomatoes, tomato paste, cumin, coriander, chili, salt, and pepper. Simmer 10-15 minutes.",
      "Combine rice, lentils, pasta, and chickpeas in a large serving dish.",
      "Pour tomato sauce on top and sprinkle crispy fried onions.",
      "Drizzle a little vinegar over the top and serve hot.",
      "Optional: serve with extra hot sauce on the side.",
    ],

    nutrition: {
      Calories: "550 kcal",
      Protein: "18g",
      Carbohydrates: "95g",
      Fat: "15g",
      Fiber: "12g",
      Sodium: "500mg",
    },

    tips: [
      "Cook each component separately to keep the perfect texture.",
      "Fry onions slowly to get maximum crispiness without burning.",
      "Adjust tomato sauce seasoning according to taste.",
      "Add chickpeas for extra protein and texture.",
      "Serve immediately for best taste and texture.",
    ],
  },
  {
    title: "Chocolate Brownies",
    description: "Rich and fudgy chocolate brownies with a crackly top",
    rating: 4.9,
    reviews: 340,
    prepTime: "15 min",
    cookTime: "25 min",
    servings: "8 people",
    difficulty: "Easy",
    cuisine: "American",
    image: "./images/chocolate_brownies.png",

    ingredients: [
      "1/2 cup unsalted butter",
      "1 cup granulated sugar",
      "2 large eggs",
      "1 tsp vanilla extract",
      "1/3 cup unsweetened cocoa powder",
      "1/2 cup all-purpose flour",
      "1/4 tsp salt",
      "1/4 tsp baking powder",
      "Optional: 1/2 cup chocolate chips",
    ],

    instructions: [
      "Preheat oven to 175°C and grease a 9x9 inch baking pan.",
      "Melt butter and mix with sugar.",
      "Add eggs and vanilla, mix well.",
      "Sift in cocoa powder, flour, salt, and baking powder.",
      "Fold in chocolate chips if using.",
      "Pour batter into pan and spread evenly.",
      "Bake for 20-25 minutes. Let cool before cutting.",
    ],

    nutrition: {
      Calories: "300 kcal",
      Protein: "4g",
      Carbohydrates: "40g",
      Fat: "15g",
      Fiber: "3g",
      Sodium: "150mg",
    },

    tips: [
      "Do not overbake to keep brownies fudgy.",
      "Use high-quality cocoa for richer flavor.",
      "Cool completely before cutting to avoid crumbling.",
      "Add a pinch of espresso powder for deeper chocolate flavor.",
      "Optional: top with nuts for crunch.",
    ],
  },
  {
    title: "Tiramisu",
    description:
      "Classic Italian dessert with layers of coffee-soaked ladyfingers and mascarpone cream",
    rating: 4.9,
    reviews: 310,
    prepTime: "20 min",
    cookTime: "0 min (plus chilling)",
    servings: "6 people",
    difficulty: "Medium",
    cuisine: "Italian",
    image: "./images/tiramisu.png",

    extendedPrepNote: "Chill for at least 4 hours to allow flavors to meld.",

    ingredients: [
      "250g mascarpone cheese",
      "3 large eggs, separated",
      "1/2 cup granulated sugar",
      "1 tsp vanilla extract",
      "1 cup strong coffee, cooled",
      "2 tbsp coffee liqueur (optional)",
      "200g ladyfingers",
      "Cocoa powder for dusting",
      "Chocolate shavings for garnish",
    ],

    instructions: [
      "Separate egg whites and yolks.",
      "Beat yolks with sugar until pale and creamy, then add mascarpone and vanilla.",
      "Whip egg whites to stiff peaks and fold into mascarpone mixture gently.",
      "Mix coffee with liqueur in a shallow dish.",
      "Dip ladyfingers briefly into coffee mixture and layer at bottom of serving dish.",
      "Spread half of mascarpone cream over ladyfingers.",
      "Repeat layers and finish with mascarpone cream.",
      "Dust top with cocoa powder and garnish with chocolate shavings.",
      "Chill at least 4 hours before serving.",
    ],

    nutrition: {
      Calories: "420 kcal",
      Protein: "7g",
      Carbohydrates: "35g",
      Fat: "28g",
      Fiber: "2g",
      Sodium: "150mg",
    },

    tips: [
      "Do not soak ladyfingers too long to prevent sogginess.",
      "Use strong espresso for authentic flavor.",
      "Chill well before serving for best texture.",
      "Fold egg whites gently to keep dessert light and airy.",
      "Optional: sprinkle a bit of coffee powder on top before serving.",
    ],
  },
  {
    title: "Classic Vanilla Milkshake",
    description:
      "Creamy and sweet vanilla milkshake made with ice cream and milk, perfect for a refreshing treat",
    rating: 4.8,
    reviews: 180,
    prepTime: "5 min",
    cookTime: "0 min",
    servings: "2 people",
    difficulty: "Easy",
    cuisine: "American",
    image: "./images/vanilla_milkshake.png",

    ingredients: [
      "2 cups vanilla ice cream",
      "1 cup whole milk (chilled)",
      "2 tsp vanilla extract",
      "2 tbsp sugar (optional)",
      "Whipped cream for topping",
      "Sprinkles or chocolate syrup for garnish",
    ],

    instructions: [
      "In a blender, combine vanilla ice cream, chilled milk, vanilla extract, and sugar if using.",
      "Blend until smooth and creamy.",
      "Pour milkshake into glasses.",
      "Top with whipped cream.",
      "Add sprinkles or chocolate syrup for garnish.",
      "Serve immediately with a straw.",
    ],

    nutrition: {
      Calories: "350 kcal",
      Protein: "8g",
      Carbohydrates: "45g",
      Fat: "15g",
      Fiber: "1g",
      Sodium: "150mg",
    },

    tips: [
      "Use full-fat ice cream for a richer taste.",
      "Chill the glasses before serving to keep milkshake cold longer.",
      "Adjust sugar according to your preference.",
      "Add a scoop of protein powder for a more filling milkshake.",
      "Experiment with flavors like chocolate, strawberry, or caramel.",
    ],
  },
  {
    title: "Classic French Fries",
    description:
      "Crispy golden French fries made from fresh potatoes, perfect as a snack or side dish",
    rating: 4.7,
    reviews: 220,
    prepTime: "15 min",
    cookTime: "20 min",
    servings: "4 people",
    difficulty: "Easy",
    cuisine: "International",
    image: "./images/french_fries.png",

    ingredients: [
      "4 large potatoes",
      "3 cups vegetable oil (for frying)",
      "1 tsp salt",
      "1/2 tsp black pepper (optional)",
      "2 tsp paprika (optional)",
      "Water (for soaking potatoes)",
    ],

    instructions: [
      "Peel the potatoes and cut into even sticks.",
      "Soak potato sticks in cold water for 30 minutes to remove excess starch.",
      "Drain and pat dry thoroughly with a towel.",
      "Heat oil in a deep fryer or large pot to 160°C (320°F).",
      "Fry potatoes in batches for 5-6 minutes until soft but not browned. Remove and drain.",
      "Increase oil temperature to 190°C (375°F).",
      "Fry potatoes again for 3-4 minutes until golden and crispy.",
      "Drain on paper towels and season with salt, pepper, and paprika if desired.",
      "Serve hot with ketchup, mayonnaise, or your favorite dip.",
    ],

    nutrition: {
      Calories: "310 kcal",
      Protein: "4g",
      Carbohydrates: "50g",
      Fat: "12g",
      Fiber: "5g",
      Sodium: "350mg",
    },

    tips: [
      "Cut potatoes evenly for uniform cooking.",
      "Soaking removes excess starch for crispier fries.",
      "Double fry method gives perfect crunch.",
      "Serve immediately for best texture.",
      "Experiment with seasoning like garlic powder, cayenne, or herbs.",
    ],
  },
];

function loadRecipe(index) {
  const r = recipes[index];

  document.getElementById("recipe-img-desktop").src = r.image;
  document.getElementById("recipe-img-mobile").src = r.image;

  document.getElementById("rating").textContent = r.rating;
  document.getElementById("reviews").textContent = r.reviews;
  document.getElementById("prepTime").textContent = r.prepTime;
  document.getElementById("cookTime").textContent = r.cookTime;
  document.getElementById("servings").textContent = r.servings;
  document.getElementById("difficulty").textContent = r.difficulty;
  document.getElementById("cuisine").textContent = r.cuisine;
  document.getElementById("title").textContent = r.title;
  document.getElementById("description").textContent = r.description;

  const note = document.getElementById("recipe-note");
  if (r.extendedPrepNote) {
    note.classList.remove("d-none");
    document.getElementById("note-description").textContent =
      r.extendedPrepNote;
  } else {
    note.classList.add("d-none");
  }

  const ing = document.getElementById("ingredients");
  ing.innerHTML = "";
  r.ingredients.forEach((item) => {
    ing.innerHTML += `    <div class="d-flex align-items-center mb-2 gap-2">
    <div
      class="d-flex justify-content-center align-items-center bg-orange text-white rounded-circle"
      style="width: 25px; height: 25px"
    >
    ${r.ingredients.indexOf(item) + 1}
    </div>
    <span>${item}</span>
  </div>`;
  });

  const ins = document.getElementById("instructions");
  ins.innerHTML = "";
  r.instructions.forEach((item) => {
    ins.innerHTML += `<div class="d-flex align-items-center mb-2 gap-2">
    <div
      class="d-flex justify-content-center align-items-center p-3 me-2 bg-orange text-white fs-5 fw-bolder rounded-4"
      style="width: 45px; height: 45px"
    >
      ${r.instructions.indexOf(item) + 1}
    </div>
    <span>${item}</span>
  </div>`;
  });

  const nut = document.getElementById("nutrition");
  nut.innerHTML = "";
  for (let key in r.nutrition) {
    switch (key) {
      case "Calories":
        nut.innerHTML += `<div class="col-12 col-md-6">
        <div class="d-flex align-items-center p-3 bg-light rounded-4">
          <div class="p-2 bg-light-orange rounded-2 text-white me-3">
            <i class="fa-solid fa-fire text-orange"></i>
          </div>
          <div
            class="d-flex justify-content-between align-items-center w-100"
          >
            <div>${key}</div>
            <div  class="fw-bolder fs-4">${r.nutrition[key]}</div>
          </div>
        </div>
      </div>`;
        break;
      case "Protein":
        nut.innerHTML += `<div class="col-12 col-md-6">
        <div class="d-flex align-items-center p-3 bg-light rounded-4">
          <div class="p-2 bg-light-primary rounded-2 text-white me-3">
            <i class="fa-solid fa-dumbbell text-primary"></i>
          </div>
          <div
            class="d-flex justify-content-between align-items-center w-100"
          >
            <div>${key}</div>
            <div  class="fw-bolder fs-4">${r.nutrition[key]}</div>
          </div>
        </div>
      </div>`;
        break;
      case "Carbohydrates":
        nut.innerHTML += `<div class="col-12 col-md-6">
        <div class="d-flex align-items-center p-3 bg-light rounded-4">
          <div class="p-2 bg-light-warning rounded-2 text-dark me-3">
            <i class="fa-solid fa-wheat-awn text-warning"></i>
          </div>
          <div
            class="d-flex justify-content-between align-items-center w-100"
          >
            <div>${key}</div>
            <div  class="fw-bolder fs-4">${r.nutrition[key]}</div>
          </div>
        </div>
      </div>`;
        break;
      case "Fat":
        nut.innerHTML += `<div class="col-12 col-md-6">
        <div class="d-flex align-items-center p-3 bg-light rounded-4">
          <div class="p-2 bg-light-danger rounded-2 text-danger me-3">
            <i class="fa-solid fa-droplet text-danger"></i>
          </div>
          <div
            class="d-flex justify-content-between align-items-center w-100"
          >
            <div>${key}</div>
            <div  class="fw-bolder fs-4">${r.nutrition[key]}</div>
          </div>
        </div>
      </div>`;
        break;
      case "Fiber":
        nut.innerHTML += `<div class="col-12 col-md-6">
        <div class="d-flex align-items-center p-3 bg-light rounded-4">
          <div
            class="p-2 bg-light-success rounded-2 text-success me-3"
          >
            <i class="fa-solid fa-seedling text-success"></i>
          </div>
          <div
            class="d-flex justify-content-between align-items-center w-100"
          >
            <div>${key}</div>
            <div class="fw-bolder fs-4">${r.nutrition[key]}</div>
          </div>
        </div>
      </div>`;
        break;
      case "Sodium":
        nut.innerHTML += `<div class="col-12 col-md-6">
        <div class="d-flex align-items-center p-3 bg-light rounded-4">
          <div class="p-2 bg-light-pink rounded-2 text-danger me-3">
            <i class="fa-solid fa-cube text-pink"></i>
          </div>
          <div
            class="d-flex justify-content-between align-items-center w-100"
          >
            <div>${key}</div>
            <div class="fw-bolder fs-4">${r.nutrition[key]}</div>
          </div>
        </div>
      </div>`;
        break;
    }
  }

  const tips = document.getElementById("tips");
  tips.innerHTML = "";
  r.tips.forEach((item) => {
    tips.innerHTML += `<div
    class="bg-light-yellow-one d-flex align-items-center p-4 rounded-3 border-start border-4 border-warning"
  >
    <i
      class="fa-solid fa-circle-check me-2 text-dark-orange fs-5"
    ></i>
    <p class="mb-0 text-secondary">
      ${item}
    </p>
  </div>`;
  });
}

const lastIndexes = [];

function randomRecipe() {
  let index;
  do {
    index = Math.floor(Math.random() * recipes.length);
  } while (lastIndexes.includes(index) && recipes.length > 15);

  lastIndexes.push(index);
  if (lastIndexes.length > 15) {
    lastIndexes.shift();
  }

  loadRecipe(index);
}

document.getElementById("shuffle-btn").addEventListener("click", randomRecipe);
