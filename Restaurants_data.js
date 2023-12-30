import { IMAGE_PATHS } from "./constants";

let restaurantData = [
    {
        title: "Casino Diner",
        delivery_time: "5...10 min",
        type: "American",
        food: "burger",
        pricing: "$$$",
        img: IMAGE_PATHS.casinoImage,
        menu: [
          {
            category: "Pasta",
            items: [
              { title: "Spaghetti Bolognese", price: 12.99, calories: 800, healthIndex: "B" },
              { title: "Carbonara", price: 14.99, calories: 950, healthIndex: "C" },
              { title: "Pesto Linguine", price: 11.99, calories: 700, healthIndex: "A" },
              { title: "Lasagna", price: 15.99, calories: 1200, healthIndex: "D" },
            ],
          },
          {
            category: "Desserts",
            items: [
              { title: "Tiramisu", price: 8.99, calories: 450, healthIndex: "A" },
              { title: "Crème Brûlée", price: 9.99, calories: 550, healthIndex: "B" },
              { title: "Apple Strudel", price: 7.99, calories: 400, healthIndex: "A" },
              { title: "Chocolate Mousse", price: 10.99, calories: 600, healthIndex: "C" },
            ],
          },
          {
            category: "Risotto",
            items: [
              { title: "Mushroom Risotto", price: 13.99, calories: 850, healthIndex: "B" },
              { title: "Seafood Risotto", price: 16.99, calories: 1100, healthIndex: "C" },
              { title: "Asparagus Risotto", price: 12.99, calories: 800, healthIndex: "B" },
            ],
          },
          {
            category: "French Cuisine",
            items: [
              { title: "Coq au Vin", price: 18.99, calories: 1300, healthIndex: "D" },
              { title: "Ratatouille", price: 14.99, calories: 950, healthIndex: "C" },
              { title: "Boeuf Bourguignon", price: 17.99, calories: 1200, healthIndex: "D" },
            ],
          },
          {
            category: "Spanish Tapas",
            items: [
              { title: "Patatas Bravas", price: 9.99, calories: 500, healthIndex: "B" },
              { title: "Gambas al Ajillo", price: 12.99, calories: 750, healthIndex: "A" },
              { title: "Chorizo a la Sidra", price: 11.99, calories: 700, healthIndex: "A" },
            ],
          },
          {
            category: "German Classics",
            items: [
              { title: "Sauerbraten", price: 16.99, calories: 1100, healthIndex: "C" },
              { title: "Wiener Schnitzel", price: 14.99, calories: 950, healthIndex: "C" },
              { title: "Bratwurst with Sauerkraut", price: 12.99, calories: 800, healthIndex: "B" },
            ],
          },
        ],
      },
      {
        title: "Trucker's Den",
        delivery_time: "10...20 min",
        type: "Fast food",
        food: "burger",
        pricing: "$",
        img: IMAGE_PATHS.truckersImage,
        menu: [
          {
            category: "Hamburgers",
            items: [
              { title: "Cheeseburger", price: 7.99, calories: 500, healthIndex: "B" },
              { title: "Beefy", price: 8.99, calories: 600, healthIndex: "C" },
              { title: "Double Patty", price: 9.99, calories: 700, healthIndex: "B" },
              { title: "Chilli Cheese", price: 8.99, calories: 550, healthIndex: "A" },
              { title: "Baconator", price: 10.99, calories: 800, healthIndex: "C" },
              { title: "Mushroom Swiss Burger", price: 9.99, calories: 650, healthIndex: "A" },
            ],
          },
          {
            category: "Desserts",
            items: [
              { title: "Apple Pie", price: 4.99, calories: 300, healthIndex: "A" },
              { title: "Chocolate Cake", price: 5.99, calories: 400, healthIndex: "B" },
              { title: "Carrot Cake", price: 4.99, calories: 350, healthIndex: "A" },
              { title: "Lemon Bars", price: 3.99, calories: 250, healthIndex: "A" },
              { title: "Brownie Sundae", price: 6.99, calories: 500, healthIndex: "C" },
              { title: "Cinnamon Twists", price: 3.99, calories: 300, healthIndex: "B" },
            ],
          },
        ],
      },
      {
        title: "Fast & Startup",
        delivery_time: "15...30 min",
        type: "Continental",
        food: "mixed",
        pricing: "$$",
        img: IMAGE_PATHS.brickImage,
        menu: [
          {
            category: "Pasta",
            items: [
              { title: "Spaghetti Bolognese", price: 12.99, calories: 800, healthIndex: "B" },
              { title: "Fettuccine Alfredo", price: 11.99, calories: 750, healthIndex: "A" },
              { title: "Penne alla Vodka", price: 12.99, calories: 780, healthIndex: "B" },
              { title: "Lasagna", price: 14.99, calories: 900, healthIndex: "C" },
              { title: "Penne alla Arrabbiata", price: 11.99, calories: 760, healthIndex: "B" },
              { title: "Carbonara", price: 13.99, calories: 820, healthIndex: "B" },
              { title: "Shrimp Scampi", price: 16.99, calories: 950, healthIndex: "C" },
            ],
          },
          {
            category: "Sweets",
            items: [
              { title: "Tiramisu", price: 8.99, calories: 450, healthIndex: "A" },
              { title: "Banana Split", price: 9.99, calories: 550, healthIndex: "B" },
              { title: "Rice Pudding", price: 7.99, calories: 400, healthIndex: "A" },
              { title: "Brownies", price: 6.99, calories: 350, healthIndex: "A" },
              { title: "Panna Cotta", price: 8.99, calories: 480, healthIndex: "B" },
              { title: "Cheesecake", price: 10.99, calories: 600, healthIndex: "C" },
              { title: "Chocolate Fondue", price: 12.99, calories: 700, healthIndex: "C" },
            ],
          },
          {
            category: "Salads",
            items: [
              { title: "Caesar Salad", price: 9.99, calories: 500, healthIndex: "B" },
              { title: "Greek Salad", price: 10.99, calories: 600, healthIndex: "C" },
              { title: "Caprese Salad", price: 8.99, calories: 450, healthIndex: "A" },
              { title: "Cobb Salad", price: 11.99, calories: 700, healthIndex: "B" },
            ],
          },
          {
            category: "Seafood",
            items: [
              { title: "Grilled Salmon", price: 14.99, calories: 900, healthIndex: "C" },
              { title: "Shrimp Scampi", price: 16.99, calories: 950, healthIndex: "C" },
              { title: "Lobster Tail", price: 19.99, calories: 1200, healthIndex: "D" },
              { title: "Fish Tacos", price: 13.99, calories: 850, healthIndex: "B" },
            ],
          },
        ],
      },
      {
        title: "Red Dragon",
        delivery_time: "5...10 min",
        type: "Chinese",
        food: "noodles",
        pricing: "$$",
        img: IMAGE_PATHS.oldImage,
        menu: [
          {
            category: "Noodles",
            items: [
              { title: "Lo Mein", price: 10.99, calories: 600, healthIndex: "B" },
              { title: "Chow Mein", price: 9.99, calories: 550, healthIndex: "A" },
              { title: "Dandan Noodles", price: 12.99, calories: 700, healthIndex: "B" },
              { title: "Sichuan Cold Noodles", price: 11.99, calories: 650, healthIndex: "A" },
            ],
          },
          {
            category: "Rice",
            items: [
              { title: "Yangzhou Fried Rice", price: 8.99, calories: 500, healthIndex: "A" },
              { title: "Bao Zai Fan", price: 9.99, calories: 550, healthIndex: "B" },
              { title: "Zong Zi", price: 7.99, calories: 450, healthIndex: "A" },
            ],
          },
          {
            category: "Desserts",
            items: [
              { title: "Fried Ice Cream", price: 5.99, calories: 350, healthIndex: "A" },
              { title: "Tangyuan", price: 4.99, calories: 300, healthIndex: "A" },
              { title: "Egg Tarts", price: 3.99, calories: 250, healthIndex: "A" },
              { title: "Nian Gao", price: 6.99, calories: 400, healthIndex: "B" },
              { title: "Gui Ling Gao", price: 5.99, calories: 380, healthIndex: "B" },
            ],
          },
        ],
      },
      {
        title: "Grab It",
        delivery_time: "10...15 min",
        type: "Coffee shop",
        food: "coffee",
        pricing: "$",
        img: IMAGE_PATHS.starbucksImage,
        menu: [
          {
            category: "Coffee",
            items: [
              { title: "Espresso", price: 2.99, calories: 5, healthIndex: "A" },
              { title: "Cappuccino", price: 3.99, calories: 80, healthIndex: "B" },
              { title: "Latte", price: 4.99, calories: 120, healthIndex: "B" },
              { title: "Americano", price: 2.49, calories: 5, healthIndex: "A" },
              { title: "Macchiato", price: 3.49, calories: 60, healthIndex: "B" },
            ],
          },
          {
            category: "Tea",
            items: [
              { title: "Green Tea", price: 2.99, calories: 0, healthIndex: "A" },
              { title: "Chai Tea", price: 3.49, calories: 40, healthIndex: "A" },
              { title: "Earl Grey", price: 3.99, calories: 20, healthIndex: "A" },
              { title: "Peppermint Tea", price: 2.99, calories: 0, healthIndex: "A" },
            ],
          },
          {
            category: "Pastries",
            items: [
              { title: "Croissant", price: 2.99, calories: 200, healthIndex: "C" },
              { title: "Danish Pastry", price: 3.49, calories: 250, healthIndex: "B" },
              { title: "Cinnamon Roll", price: 3.99, calories: 300, healthIndex: "B" },
              { title: "Muffin", price: 2.49, calories: 180, healthIndex: "C" },
            ],
          },
          {
            category: "Sandwiches",
            items: [
              { title: "Turkey Club", price: 5.99, calories: 400, healthIndex: "B" },
              { title: "Caprese Panini", price: 4.99, calories: 350, healthIndex: "A" },
              { title: "Chicken Avocado Wrap", price: 6.49, calories: 450, healthIndex: "B" },
            ],
          },
          {
            category: "Desserts",
            items: [
              { title: "Chocolate Brownie", price: 3.99, calories: 300, healthIndex: "B" },
              { title: "Cheesecake", price: 4.99, calories: 350, healthIndex: "A" },
              { title: "Tiramisu Cup", price: 5.49, calories: 400, healthIndex: "B" },
              { title: "Fruit Parfait", price: 4.49, calories: 250, healthIndex: "A" },
            ],
          },
        ],
      },
];

export default restaurantData;
