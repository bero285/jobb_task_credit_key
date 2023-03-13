import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import ChaseLogo from "../assets/chaseBank.png";
export default function ActiveOrders({ myImage, name, active, price }) {
  return (
    <View style={styles.Container}>
      <View style={styles.firstCont}>
        <Image source={{ uri: myImage }} style={styles.logo} />
        <View style={styles.textCont}>
          <Text style={styles.headText}>{name}</Text>
          <Text style={active ? styles.bottomText : styles.bottomTextSecond}>
            {active ? "Active" : "Finished"}{" "}
          </Text>
        </View>
      </View>
      <View style={styles.textCont}>
        <Text style={styles.headText}>90d</Text>
        <Text style={styles.bottomTextSecond}>Term</Text>
      </View>
      <View style={styles.textCont}>
        <Text style={styles.headText}>{price}</Text>
        <Text style={styles.bottomTextLast}>Total</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    width: "100%",
    justifyContent: "space-between",
    flexDirection: "row",
    marginTop: 20,
    padding: 10,
    // backgroundColor: "red",
  },
  logo: {
    width: 30,
    height: 30,
  },
  firstCont: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  textCont: {
    marginLeft: 10,
  },
  bottomText: {
    fontSize: 16,
    color: "#1AAE5F",
  },
  bottomTextSecond: {
    fontSize: 16,
    color: "#808080",
  },
  bottomTextLast: {
    fontSize: 16,
    color: "#808080",
    alignSelf: "flex-end",
  },
  headText: {
    fontSize: 19,
    color: "#4d4d6b",
  },
});
