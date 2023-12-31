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
* https://colorhunt.co/palette/2b3499ff6c22ff9209ffd099
*

IMPROVEMENTS:
*
*/

import React from "react";
import { ScrollView, Text, View, Image, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { TableView, Section, Cell } from "react-native-tableview-simple";
import restaurantData from "./Restaurants_data";
import { styles } from "./styles";
import { field_height, field_width } from "./constants";

const Stack = createStackNavigator();

const HomescreenCell = ({ navigation, ...props }) => (
  <Cell
    {...props}
    style={styles.rest_container}
    title={<Text style={{...styles.menu_item_text_size, fontWeight: "bold"}}>{props.title}</Text>}
    onPress={() =>
      navigation.navigate("Menu", 
      {
        items: props.menu,
      }
            
      )
    }
  >
    <Image source={props.img} style={styles.image} />
    <View style={styles.additionalInfo}>
      <View style={styles.additionalInfoCol}>
        <View style={styles.additionalInfoBadge}>
          <Text style={styles.additionalInfoText}>{props.type}</Text>
        </View>
        <View style={styles.additionalInfoBadge}>
          <Text style={styles.additionalInfoText}>{props.food}</Text>
        </View>
      </View>
      <View style={styles.restaurant_badges}>
        <View style={styles.badge}>
          <Text style={styles.additionalInfoTextBadge}>{props.pricing}</Text>
        </View>
        <View style={styles.badge}>
          <Text style={styles.additionalInfoTextBadge}>{props.delivery_time}</Text>
          </View>
      </View>  

    </View>
  </Cell>
);

const RestaurantsScreen = ({ navigation }) => (
  <View style={styles.restaurants_container}>
    <ScrollView>
      <TableView>
        {/* iterate through restaurantData */}
        {restaurantData.map((data, index) => (
          <Section key={index} header="" sectionTintColor={"#FFEAC7"}>
            <HomescreenCell navigation={navigation} {...data}/>
          </Section>
        ))}
      </TableView>
    </ScrollView>
  </View>
);

const FoodInformationScreen = ({ route }) => {
  const { title, price, calories, healthIndex } = route.params;

  return (
    <View style={styles.menu_container}>
      <ScrollView>
        <View style={styles.dish_title_field}>
          <Text style={styles.dish_title}>{title}</Text>
        </View>
        <View style={styles.dish_price_field}>
          <Text style={styles.dish_price}>Price: ${price}</Text>
        </View>
        <View style={styles.dish_calories_field}>
          <Text style={styles.dish_calories}>Calories: {calories}</Text>
        </View>
        <View style={styles.dish_health_field}>
          <Text style={styles.dish_health}>Health Index: {healthIndex}</Text>
        </View>
      </ScrollView>
    </View>
  );
};

const MenuScreen = ({ route, navigation }) => {
  const { items } = route.params;

  return (
    <View style={styles.menu_container}>
      <ScrollView>
        <TableView>
          {items.map((category, index) => (
            <Section key={index} header={<Text style={styles.menu_item_text_size}>{category.category}</Text>}>
              {category.items.map((item, itemIndex) => (
                <TouchableOpacity
                  key={itemIndex}
                  onPress={() =>
                    navigation.navigate("Food Information", {
                      title: item.title,
                      price: item.price || 0,
                      calories: item.calories || 0,
                      healthIndex: item.healthIndex || "N/A",
                    })
                  }
                >
                  <Cell title={<Text style={styles.menu_item_text_size}>{item.title}</Text>} />
                </TouchableOpacity>
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
    <NavigationContainer style={{fontSize: 150}}>
      <Stack.Navigator 
        screenOptions={{
          headerStyle: {
            backgroundColor: '#FFEAC7', 
          },
          headerTintColor: '#2B3499',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: field_width * 0.05,
          },
        }}
      >
        <Stack.Screen name="Restaurants" component={RestaurantsScreen}/>
        <Stack.Screen name="Menu" component={MenuScreen}/>
        <Stack.Screen name="Food Information" component={FoodInformationScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

