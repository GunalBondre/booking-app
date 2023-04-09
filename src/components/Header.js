import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Ionicons, AntDesign, FontAwesome5 } from "@expo/vector-icons";

const Header = (props) => {
  return (
    <View style={styles.container}>
      <Pressable
        style={[
          styles.button,
          {
            borderWidth: 1,
            borderColor: "white",
            borderRadius: 30,
            paddingHorizontal: 10,
            paddingVertical: 5,
          },
        ]}
      >
        <Ionicons name="bed-outline" size={24} color="white" />
        <Text style={styles.text}>Stays</Text>
      </Pressable>
      <Pressable style={styles.button}>
        <Ionicons name="airplane-outline" size={24} color="white" />
        <Text style={styles.text}>Flights</Text>
      </Pressable>
      <Pressable style={styles.button}>
        <AntDesign name="car" size={24} color="white" />
        <Text style={styles.text}>Car Rentals</Text>
      </Pressable>
      <Pressable style={styles.button}>
        <FontAwesome5 name="uber" size={24} color="white" />
        <Text style={styles.text}>Taxi</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 65,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "#003580",
  },
  text: {
    color: "white",
    marginLeft: 5,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default Header;
