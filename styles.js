import { StyleSheet } from "react-native";

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
      marginTop: 10,
    },
    additionalInfoText: {
      fontSize: 12,
      color: "#888",
    },
    image: {
      width: "100%",
      height: 200,
      resizeMode: "cover", // Keep aspect ratio while covering the entire area
      marginBottom: 10,
    },
  });