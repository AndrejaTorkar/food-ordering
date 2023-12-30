/*
IMAGE RESOURCES:
* starbucks.jpg: Image by saraj from https://pixabay.com/photos/cafe-starbucks-coffee-restaurant-266651/
* chairs.jpg: Image by JayMantri from https://pixabay.com/photos/bar-pub-chairs-restaurant-diner-405932/
* brick_wall.jpg: Image by Pexels from https://pixabay.com/photos/brick-wall-chairs-furniture-1834784/
* old_china.jpg: Image by Markus Winkler from https://pixabay.com/photos/interior-design-restaurant-diner-6998378/
* karo.jpg: Image by Pexels from https://pixabay.com/photos/restaurant-furniture-interiors-1837150/

CODING RESOURCES: 
* https://react.dev/learn/importing-and-exporting-components
* https://github.com/Purii/react-native-tableview-simple
* https://legacy.reactjs.org/docs/components-and-props.html
* 
*/

import React from "react";
import { ScrollView, Text, View, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { TableView, Section, Cell } from "react-native-tableview-simple";
import restaurantData from "./Restaurants_data";
import { styles } from "./styles";

const Stack = createStackNavigator();

const HomescreenCell = ({ navigation, ...props }) => (
  <Cell
    {...props}
    style={styles.rest_container}
    onPress={() =>
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


const RestaurantsScreen = ({ navigation }) => (
  <View style={styles.restaurants_container}>
    <ScrollView>
      <TableView>
        {/* iterate through restaurantData */}
        {restaurantData.map((data, index) => (
          <Section key={index} header="" separatorTintColor="blue" sectionTintColor={"red"}>
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

// const DishScreen = ({}) => {

// };

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

