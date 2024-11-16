import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import RowText from "../compoments/RowText";

export default function CurrentWeather() {
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <Text>Current Weather</Text>
        <Feather name="sun" size={100} color="black" />
        <Text style={styles.temp}>6</Text>
        <Text style={styles.feels}>Feels like 5</Text>
        <RowText
          hiMessage={"High: 6"}
          lowMessage={"Low: 5"}
          containerStyles={styles.hiLowWrapper}
          oneStyles={styles.hiLow}
          twoStyles={styles.hiLow}
        />
      </View>
      <RowText
        hiMessage={"Its sunny"}
        lowMessage={"Its perfect t-shirt weathers "}
        containerStyles={styles.bodyWrapper}
        oneStyles={styles.desc}
        twoStyles={styles.message}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "pink",
  },
  wrapper: {
    flex: 1,
    backgroundColor: "pink",
  },
  temp: {
    color: "black",
    fontSize: 60,
  },
  feels: {
    color: "black",
    fontSize: 48,
  },
  hiLow: {
    color: "black",
    fontSize: 20,
  },
  hiLowWrapper: {
    flexDirection: "row",
    width: "100%",
  },
  bodyWrapper: {
    // flex: 1,
    justifyContent: "flex-end",
    alignItems: "flex-start",
    paddingLeft: 25,
    marginBottom: 40,
  },

  desc: {
    fontSize: 60,
  },
  message: {
    fontSize: 40,
  },
});
