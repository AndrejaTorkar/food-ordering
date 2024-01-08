// aTorkar started writing code

import { StyleSheet } from "react-native";
import { field_height, field_width } from "./constants";

export const styles = StyleSheet.create({
  restaurants_container: {
    flex: 1,
    backgroundColor: "#fff",
    alignSelf: "stretch",
  },
  rest_container: {
    height: 500,
    flexDirection: "column", // Adjust layout to column
    alignItems: "center", // Center items horizontally
    backgroundColor: "#FFEAC7",
  },
  menu_container: {
    flex: 1,
  },

  additionalInfo: {
    flex: 1,
    flexDirection: "row",
    marginTop: field_width * 0.02,
    justifyContent: "space-between",
    paddingBottom: field_height * 0.01,
    paddingRight: field_width * 0.02,
  },

  image: {
    width: "100%",
    height: field_width * 0.5,
    resizeMode: "cover", // Keep aspect ratio while covering the entire area
    marginBottom: field_height * 0.01,
  },

  ////////////////
  ////////////////
  ////////////////

  // Type and cousine column
  additionalInfoCol: {
    flex: 1,
    flexDirection: "column",
    paddingLeft: field_width * 0.05,
  },

  // Additional info background
  additionalInfoBadge: {
    flex: 1,
    margin: 2,
    backgroundColor: "#6F74CC",
    width: field_width * 0.3,
    borderRadius: field_height * 0.006,
    justifyContent: "center",
  },

  // For restaurant's additional info
  additionalInfoText: {
    fontSize: field_width * 0.04,
    color: "#555",
    color: "white",
    textAlign: "center",
  },

  ////////////////
  ////////////////
  ////////////////
  // Pricing and delivery time column
  restaurant_badges: {
    flex: 1,
    flexDirection: "row",
  },

  // For pricing and delivery time
  badge: {
    flex: 1,
    backgroundColor: "#FFD099",
    borderRadius: field_height * 0.02,
    margin: field_height * 0.003,
    justifyContent: "center",
  },

  // Text for pricing and delivery time
  additionalInfoTextBadge: {
    color: "black",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: field_width * 0.03
  },

  // Styles for food info
  dish_title_field: {
    flex: 1,
    padding: field_width * 0.05,
    alignItems: "center",
  },
  dish_title: {
    color: "#2B3499",
    fontSize: field_width * 0.07,
    fontWeight: "bold"
  },

  dish_price_field: {
    flex: 1,
    alignItems: "center",
    paddingBottom: field_width * 0.03

  },
  dish_price: {
    color: "#6F74CC",
    fontSize: field_width * 0.05
  },

  dish_calories_field: {
    flex: 1,
    alignItems: "center",
    paddingBottom: field_width * 0.03
  },

  dish_calories: {
    color: "#6F74CC",
    fontSize: field_width * 0.05
  },

  dish_health_field: {
    flex: 1,
    alignItems: "center",
  },

  dish_health: {
    color: "#2B3499",
    fontSize: field_width * 0.05,
    marginBottom: field_width * 0.15
  },

  menu_item_text_size: {
    fontSize: field_width * 0.04,
    color: "#2B3499"
  },

  food_image: {
    width: "100%",
    height: field_width * 0.8,
    resizeMode: "cover", // Keep aspect ratio while covering the entire area
  },

  // Normal
  // #2B3499
  // #FF6C22
  // #FF9209
  // #FFD099

  // Medium
  // #6F74CC
  // #FF9860
  // #FFB956
  // #FFEDC8
  
  // Pastel
  // #DCE0FF
  // #FFB09E
  // #FFD4A4
  // #FFEAC7

  // aTorkar finished writing code
});
