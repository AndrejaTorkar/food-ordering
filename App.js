/*
IMAGE RESOURCES:
* starbucks.jpg: Image by saraj from https://pixabay.com/photos/cafe-starbucks-coffee-restaurant-266651/
* chairs.jpg: Image by JayMantri from https://pixabay.com/photos/bar-pub-chairs-restaurant-diner-405932/
* brick_wall.jpg: Image by Pexels from https://pixabay.com/photos/brick-wall-chairs-furniture-1834784/
* old_china.jpg: Image by Markus Winkler from https://pixabay.com/photos/interior-design-restaurant-diner-6998378/
* karo.jpg: Image by Pexels from https://pixabay.com/photos/restaurant-furniture-interiors-1837150/
*/

import React from "react";
import { ScrollView, StyleSheet, Text, View, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { TableView, Section, Cell } from "react-native-tableview-simple";

// Import the image
const casinoImage = require("./assets/head_photos/karo.jpg");
const truckersImage = require("./assets/head_photos/chairs.jpg");
const brickImage = require("./assets/head_photos/brick_wall.jpg");
const oldImage = require("./assets/head_photos/old_china.jpg");
const starbucksImage = require("./assets/head_photos/starbucks.jpg");

let restaurantData = [
  {
    title: "Casino Diner",
    delivery_time: "5...10 min",
    type: "American",
    food: "burger",
    pricing: "$",
    img: casinoImage,
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
    img: truckersImage,
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
    img: brickImage,
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
    img: oldImage,
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
    img: starbucksImage,
    menu: [
      { category: "Coffee", items: [{ title: "Espresso" }, { title: "Cappuccino" }, { title: "Latte" }, { title: "Americano" }, { title: "Macchiato" }] },
      { category: "Tea", items: [{ title: "Green Tea" }, { title: "Chai Tea" }, { title: "Earl Grey" }, { title: "Peppermint Tea" }] },
      { category: "Pastries", items: [{ title: "Croissant" }, { title: "Danish Pastry" }, { title: "Cinnamon Roll" }, { title: "Muffin" }] },
      { category: "Sandwiches", items: [{ title: "Turkey Club" }, { title: "Caprese Panini" }, { title: "Chicken Avocado Wrap" }] },
      { category: "Desserts", items: [{ title: "Chocolate Brownie" }, { title: "Cheesecake" }, { title: "Tiramisu Cup" }, { title: "Fruit Parfait" }] },
    ],
  },
];

const Stack = createStackNavigator();

const HomescreenCell = ({ navigation, ...props }) => (
  <Cell
    {...props}
    style={styles.rest_container}
    onPress={() =>
      // ITERATE THROUGH props.menu
      navigation.navigate("Menu", {
        items: props.menu,
      })
    }
  >
    {/* Add the Image component with the source */}
    <Image source={props.img} style={styles.image} />
    <View style={styles.additionalInfo}>
      <Text style={styles.additionalInfoText}>{props.delivery_time}</Text>
      <Text style={styles.additionalInfoText}>{props.type}</Text>
      <Text style={styles.additionalInfoText}>{props.food}</Text>
      <Text style={styles.additionalInfoText}>{props.pricing}</Text>
      {/* Add more information as needed */}
    </View>
  </Cell>
);

////////////////////////////////////////
////////////////////////////////////////
////////////////////////////////////////
////////////////////////////////////////

const RestaurantsScreen = ({ navigation }) => (
  <View style={styles.restaurants_container}>
    <ScrollView>
      <TableView>
        {/* iterate through restaurantData */}
        {restaurantData.map((data, index) => (
          <Section key={index} header="" separatorTintColor="#ccc">
            <HomescreenCell navigation={navigation} {...data} />
          </Section>
        ))}
      </TableView>
    </ScrollView>
  </View>
);

const MenuScreen = ({ route }) => {
  const { items } = route.params;

  return (
    <View style={styles.menu_container}>
      <ScrollView>
        <TableView style={styles.menu_view}>
          {items.map((category, index) => (
            <Section key={index} header={category.category}>
              {category.items.map((item, itemIndex) => (
                <Cell key={itemIndex} title={item.title} />
              ))}
            </Section>
          ))}
        </TableView>
      </ScrollView>
    </View>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Restaurants" component={RestaurantsScreen} />
        <Stack.Screen name="Menu" component={MenuScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  restaurants_container: {
    flex: 1,
    backgroundColor: "#fff",
    alignSelf: "stretch",
  },
  rest_container: {
    height: 500,
    flexDirection: "column", // Adjust layout to column
    alignItems: "center", // Center items horizontally
  },
  menu_container: {
    alignContent: "stretch",
  },
  additionalInfo: {
    marginTop: 10,
  },
  additionalInfoText: {
    fontSize: 12,
    color: "#888",
  },
  image: {
    width: "100%",
    height: 200, // Adjust the height as needed
    resizeMode: "cover", // Maintain aspect ratio while covering the entire space
    marginBottom: 10,
  },
});
