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
      { category: "Pasta", items: [{ title: "Aglio e Olio" }, { title: "Carbonara" }] },
      { category: "Ice cream", items: [{ title: "Chocolate" }, { title: "Vanillia" }] },
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
      { category: "Pasta", items: [{ title: "Aglio e Olio" }, { title: "Carbonara" }] },
      { category: "Ice cream", items: [{ title: "Chocolate" }, { title: "Vanillia" }] },
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
      { category: "Pasta", items: [{ title: "Aglio e Olio" }, { title: "Carbonara" }] },
      { category: "Ice cream", items: [{ title: "Chocolate" }, { title: "Vanillia" }] },
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
      { category: "Pasta", items: [{ title: "Aglio e Olio" }, { title: "Carbonara" }] },
      { category: "Ice cream", items: [{ title: "Chocolate" }, { title: "Vanillia" }] },
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
      { category: "Pasta", items: [{ title: "Aglio e Olio" }, { title: "Carbonara" }] },
      { category: "Ice cream", items: [{ title: "Chocolate" }, { title: "Vanillia" }] },
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
    <Text>Restaurants Screen</Text>
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
      <Text>Menu Screen</Text>
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
