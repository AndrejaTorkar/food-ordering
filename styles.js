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
  },
  menu_container: {
    alignContent: "stretch",
  },

  additionalInfo: {
    flexDirection: "row",
    marginTop: 10,
    justifyContent: "space-between",
    paddingBottom: 10,
  },

  image: {
    width: "100%",
    height: 200,
    resizeMode: "cover", // Keep aspect ratio while covering the entire area
    marginBottom: 10,
  },

  // Pricing and delivery time column
  restaurant_badges: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center"
  },

  // For pricing and delivery time
  badge: {
    flex: 1,
    borderColor: "#BBB",
    borderWidth: 2,
    borderRadius: field_height * 0.02,
    padding: 5, 
    margin: 3,
    alignContent: "center"
  },

  // For restaurant's additional info
  additionalInfoText: {
    fontSize: field_width * 0.04,
    color: "#555",
    color: "white",
    textAlign: "center"

  },

  // Additional info background
  additionalInfoBadge: {
    margin: 2,
    backgroundColor: "#6F74CC",
    width: field_width * 0.3,
    borderRadius: 5,
  },

  // Text for pricing and delivery time
  additionalInfoTextBadge: {
    color : "red",
    fontWeight: "bold",
    textAlign: "center"
  },

  // Type and cousine column
  additionalInfoCol: {
    flex: 1,
    flexDirection: "column",
    paddingLeft: 20,
  },
  

  // Normal
    // #2B3499
    // #FF6C22
    // #FF9209
    // #FFD099

    // Medium
//    #6F74CC
//    #FF9860
//    #FFB956
//    #FFEDC8
  // Pastel
    // #DCE0FF
    // #FFB09E
    // #FFD4A4
    // #FFEAC7
});
