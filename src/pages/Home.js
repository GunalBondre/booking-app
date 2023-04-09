import React, { useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  Ionicons,
  AntDesign,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

import Header from "../components/Header";
import {
  Pressable,
  ScrollView,
  View,
  StyleSheet,
  Text,
  TextInput,
} from "react-native";
import moment from "moment";
import DateRangePicker from "react-native-daterange-picker";

const Home = (props) => {
  const [state, setState] = useState({
    startDate: null,
    endDate: null,
    displayDate: moment(),
  });

  function handleChange(dates) {
    setState({
      ...dates,
    });
  }

  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: "Booking.com",
      headerTitleStyle: {
        fontWeight: "bold",
        color: "white",
      },
      headerStyle: {
        backgroundColor: "#003580",
        height: 110,
        borderBottomColor: "transparent",
        shadowColor: "transparent",
      },
      headerRight: () => (
        <Ionicons
          name="notifications-circle-outline"
          size={24}
          color="white"
          style={{ marginRight: 14 }}
        />
      ),
    });
  }, []);

  return (
    <>
      <Header />
      <ScrollView>
        <View style={styles.container}>
          <Pressable style={styles.destination}>
            <MaterialCommunityIcons name="map-marker" size={24} color="black" />
            <TextInput placeholder="Enter Destination" />
          </Pressable>
          <Pressable style={styles.destination}>
            <AntDesign name="calendar" size={24} color="black" />
            <DateRangePicker
              onChange={handleChange}
              startDate={state.startDate}
              endDate={state.endDate}
              displayedDate={state.displayedDate}
              range
            >
              <Text>Click me!</Text>
            </DateRangePicker>
          </Pressable>
          <Pressable></Pressable>
          <Pressable></Pressable>
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 3,
    borderColor: "#FFC72C",
    borderRadius: 10,
    margin: 10,
  },
  destination: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    paddingVertical: 15,
    borderBottomWidth: 2,
    borderStyle: "solid",
    opacity: 0.5,
  },
});

export default Home;
