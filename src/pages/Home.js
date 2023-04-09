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
  Button,
} from "react-native";
import moment from "moment";
import DatePicker from "react-native-date-ranges";
import { dates } from "react-native-date-ranges/src/dates";
import {
  BottomModal,
  ModalButton,
  ModalContent,
  ModalFooter,
  ModalTitle,
} from "react-native-modals";
import { SlideAnimation } from "react-native-modals";

const Home = (props) => {
  const [state, setState] = useState({
    startDate: null,
    endDate: null,
  });
  const [rooms, setRooms] = useState(1);
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);
  const customButton = (onConfirm) => {
    return <Button title={"submit"} onPress={onConfirm} />;
  };

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
          <Pressable style={styles.inputField}>
            <MaterialCommunityIcons name="map-marker" size={24} color="black" />
            <TextInput placeholder="Enter Destination" />
          </Pressable>
          <Pressable style={styles.inputField}>
            <AntDesign name="calendar" size={24} color="black" />
            <DatePicker
              style={{
                width: 350,
                height: 30,
                borderWidth: 0,
                borderRadius: 0,
              }}
              customStyles={{
                placeholderText: {
                  fontSize: 15,
                  alignItems: "center",
                  flexDirection: "row",
                  marginRight: "auto",
                }, // placeHolder style
                flexDirection: "row",
                alignItems: "center",
                headerStyle: {
                  backgroundColor: "#003580",
                },
                contentText: {
                  fontSize: 15,
                  flexDirection: "row",
                  marginRight: "auto",
                },
              }} // optional
              customButton={(onConfirm) => customButton(onConfirm)}
              markText={"date"}
              centerAlign // optional text will align center or not
              allowFontScaling={false} // optional
              placeholder={"Apr 27, 2018 → Jul 10, 2018"}
              mode={"range"}
              onConfirm={(date) => setState(date)}
              blockBefore
            />
          </Pressable>
          <Pressable
            style={styles.inputField}
            onPress={() => setModalVisible(!modalVisible)}
          >
            <MaterialCommunityIcons name="human-male" size={24} color="black" />
            <TextInput
              placeholder="1 room 2 Adults 0 childrens"
              onPress={() => setModalVisible(!modalVisible)}
            />
          </Pressable>
          <Pressable
            style={[
              styles.inputField,
              {
                borderBottomWidth: 0,
                justifyContent: "center",
                backgroundColor: "#003580",
                opacity: 1,
                borderBottomLeftRadius: 10,
                borderBottomRightRadius: 10,
              },
            ]}
          >
            <Text style={{ color: "white", fontWeight: "bold" }}>Search</Text>
          </Pressable>
        </View>

        <BottomModal
          swipeThreshold={300}
          backdropPress={() => setModalVisible(!modalVisible)}
          swipeDirection={["up", "down"]}
          footer={
            <ModalFooter>
              <ModalButton
                text={"Apply"}
                style={{
                  marginBottom: 20,
                  color: "red",
                  backgroundColor: "#003580",
                }}
                onPress={() => setModalVisible(!modalVisible)}
              />
            </ModalFooter>
          }
          modalTitle={<ModalTitle title={"select room and guest"} />}
          modalAnimation={
            new SlideAnimation({
              slideFrom: "bottom",
            })
          }
          onHardwareBackPress={() => setModalVisible(!modalVisible)}
          visible={modalVisible}
          onTouchOutside={() => setModalVisible(!modalVisible)}
        >
          <ModalContent style={{ width: "100%", height: 200 }}>
            <View style={styles.modalContent}>
              <Text>Rooms</Text>
              <Pressable style={styles.CTA}>
                <Pressable>
                  <Text
                    style={styles.incDec}
                    onPress={() => setRooms((val) => val - 1)}
                  >
                    -
                  </Text>
                </Pressable>
                <Pressable>
                  <Text>{rooms}</Text>
                </Pressable>
                <Pressable>
                  <Text
                    style={styles.incDec}
                    onPress={() => setRooms((val) => val + 1)}
                  >
                    +
                  </Text>
                </Pressable>
              </Pressable>
            </View>
            <View style={styles.modalContent}>
              <Text>Adults</Text>
              <Pressable style={styles.CTA}>
                <Pressable>
                  <Text
                    style={styles.incDec}
                    onPress={() => setAdults((val) => val - 1)}
                  >
                    -
                  </Text>
                </Pressable>
                <Pressable>
                  <Text>{adults}</Text>
                </Pressable>
                <Pressable>
                  <Text
                    style={styles.incDec}
                    onPress={() => setAdults((val) => val + 1)}
                  >
                    +
                  </Text>
                </Pressable>
              </Pressable>
            </View>
            <View style={styles.modalContent}>
              <Text>Children</Text>
              <Pressable style={styles.CTA}>
                <Pressable>
                  <Text
                    style={styles.incDec}
                    onPress={() => setChildren((val) => val - 1)}
                  >
                    -
                  </Text>
                </Pressable>
                <Pressable>
                  <Text>{children}</Text>
                </Pressable>
                <Pressable>
                  <Text
                    style={styles.incDec}
                    onPress={() => setChildren((val) => val + 1)}
                  >
                    +
                  </Text>
                </Pressable>
              </Pressable>
            </View>
          </ModalContent>
        </BottomModal>
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
  inputField: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    paddingVertical: 15,
    borderBottomWidth: 2,
    borderStyle: "solid",
    opacity: 0.5,
    paddingHorizontal: 10,
  },
  modalContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 10,
  },
  CTA: {
    flexDirection: "row",
    width: "30%",
    justifyContent: "space-between",
    alignItems: "center",
  },
  incDec: {
    backgroundColor: "gray",
    width: 26,
    height: 26,
    borderRadius: 13,
    color: "white",
    textAlign: "center",
    fontSize: 18,
  },
});

export default Home;
