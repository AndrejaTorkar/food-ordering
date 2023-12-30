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
    { category: "Pasta", items: [{ title: "Spaghetti Bolognese" }, { title: "Carbonara" }, { title: "Pesto Linguine" }, { title: "Lasagna" }] },
    { category: "Desserts", items: [{ title: "Tiramisu" }, { title: "Crème Brûlée" }, { title: "Apple Strudel" }, { title: "Chocolate Mousse" }] },
    { category: "Risotto", items: [{ title: "Mushroom Risotto" }, { title: "Seafood Risotto" }, { title: "Asparagus Risotto" }] },
    { category: "French Cuisine", items: [{ title: "Coq au Vin" }, { title: "Ratatouille" }, { title: "Boeuf Bourguignon" }] },
    { category: "Spanish Tapas", items: [{ title: "Patatas Bravas" }, { title: "Gambas al Ajillo" }, { title: "Chorizo a la Sidra" }] },
    { category: "German Classics", items: [{ title: "Sauerbraten" }, { title: "Wiener Schnitzel" }, { title: "Bratwurst with Sauerkraut" }] },
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
    { category: "Hamburgers", items: [{ title: "Cheeseburger" }, { title: "Beefy" }, { title: "Double Patty" }, { title: "Chilli Cheese" }, { title: "Baconator" }, { title: "Mushroom Swiss Burger" }] },
    { category: "Desserts", items: [{ title: "Apple Pie" }, { title: "Chocolate Cake" }, { title: "Carrot Cake" }, { title: "Lemon Bars" }, { title: "Brownie Sundae" }, { title: "Cinnamon Twists" }] },
    ],
},
{
    title: "Fatst & Startup",
    delivery_time: "15...30 min",
    type: "Continental",
    food: "mixed",
    pricing: "$$",
    img: IMAGE_PATHS.brickImage,
    menu: [
    { category: "Pasta", items: [{ title: "Spaghetti Bolognese" }, { title: "Fettuccine Alfredo" }, { title: "Penne alla Vodka" }, { title: "Lasagna" }, { title: "Penne alla Arrabbiata" }, { title: "Carbonara" }, { title: "Shrimp Scampi" }] },
    { category: "Sweets", items: [{ title: "Tiramisu" }, { title: "Banana Split" }, { title: "Rice Pudding" }, { title: "Brownies" }, { title: "Panna Cotta" }, { title: "Cheesecake" }, { title: "Chocolate Fondue" }] },
    { category: "Salads", items: [{ title: "Caesar Salad" }, { title: "Greek Salad" }, { title: "Caprese Salad" }, { title: "Cobb Salad" }] },
    { category: "Seafood", items: [{ title: "Grilled Salmon" }, { title: "Shrimp Scampi" }, { title: "Lobster Tail" }, { title: "Fish Tacos" }] },
    ],
},
{
    title: "Red Dragon",
    delivery_time: "5...10 min",
    type: "Chniese",
    food: "noodles",
    pricing: "$$",
    img: IMAGE_PATHS.oldImage,
    menu: [
    { category: "Noodles", items: [{ title: "Lo Mein" }, { title: "Chow Mein" }, { title: "Dandan Noodles" }, { title: "Sichuan Cold Noodles" }] },
    { category: "Rice", items: [{title: "Yangzhou Fried Rice"}, {title: "Bao Zai Fan"}, {title: "Zong Zi"}]},
    { category: "Deserts", items: [{ title: "Fried Ice Cream" }, { title: "Tangyuan" }, { title: "Egg Tarts" }, { title: "Nian Gao" }, { title: "Gui Ling Gao" }] }
    ],
},
{
    title: "Grab It",
    delivery_time: "10...15 min",
    type: "Coffe shop",
    food: "coffe",
    pricing: "$",
    img: IMAGE_PATHS.starbucksImage,
    menu: [
    { category: "Coffee", items: [{ title: "Espresso" }, { title: "Cappuccino" }, { title: "Latte" }, { title: "Americano" }, { title: "Macchiato" }] },
    { category: "Tea", items: [{ title: "Green Tea" }, { title: "Chai Tea" }, { title: "Earl Grey" }, { title: "Peppermint Tea" }] },
    { category: "Pastries", items: [{ title: "Croissant" }, { title: "Danish Pastry" }, { title: "Cinnamon Roll" }, { title: "Muffin" }] },
    { category: "Sandwiches", items: [{ title: "Turkey Club" }, { title: "Caprese Panini" }, { title: "Chicken Avocado Wrap" }] },
    { category: "Desserts", items: [{ title: "Chocolate Brownie" }, { title: "Cheesecake" }, { title: "Tiramisu Cup" }, { title: "Fruit Parfait" }] },
    ],
},
];

export default restaurantData;