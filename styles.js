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

  restaurant_badges: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center"
  },

  badge: {
    borderColor: "#BBB",
    borderWidth: 2,
    borderRadius: field_height * 0.02,
    padding: 5, 
    margin: 3,
    alignContent: "center"
  },

  additionalInfoText: {
    fontSize: field_width * 0.04,
    color: "#888",
  },

  additionalInfoTextBadge: {
    color : "red",
    fontWeight: "bold"
  },

  additionalInfoCol: {
    flex: 1,
    flexDirection: "column",
    paddingLeft: 20,
  },
});
