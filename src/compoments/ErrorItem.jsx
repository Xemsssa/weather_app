import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Feather from "@expo/vector-icons";

const ErrorItem = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.errorMsg}>Sorry something goes wrong</Text>
      <Feather name={"frown"} size={100} color={"white"} />
    </View>
  );
};

export default ErrorItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
  },
  errorMsg: {
    fontSize: 30,
    color: "white",
    marginHorizontal: 10,
    textAlign: "center",
  },
});
