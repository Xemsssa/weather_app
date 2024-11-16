import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";

const Icontext = (props) => {
  const { text, iconName, iconColor, bodytextStyle } = props;
  return (
    <View style={styles.wrapper}>
      <Feather name={iconName} size={50} color={iconColor} />
      <Text style={[styles.text, styles.bodytextStyle]}>{text}</Text>
    </View>
  );
};

export default Icontext;

const styles = StyleSheet.create({
  text: {
    color: "white",
    fontSize: 28,
    fontWeight: "bold",
  },

  wrapper: {
    alignItems: "center",
    flexDirection: "row",
  },
});
