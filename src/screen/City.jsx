import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  ImageBackground,
} from "react-native";
import React from "react";

import Icontext from "../compoments/Icontext";

const City = (props) => {
  const {
    container,
    cityName,
    cityText,
    countryName,
    populationWrapper,
    populationText,
    riseSetWrapper,
  } = styles;
  return (
    <SafeAreaView style={container}>
      <ImageBackground
        // style={styles.image}
        source={require("../../assets/sunset2.jpg")}
      >
        <View>
          <Text style={[cityName, cityText]}>London</Text>
          <Text style={[countryName, cityText]}>Uk</Text>
        </View>

        <View style={[populationWrapper, styles.rowLayout]}>
          <Icontext
            iconName={"user"}
            text={"8000"}
            iconColor={"red"}
            bodyTextStyles={populationText}
          />
        </View>

        <View style={[riseSetWrapper, styles.rowLayout]}>
          <Icontext
            text={"10:46:58am"}
            iconName={"sunrise"}
            iconColor={"white"}
            bodyTextStyles={styles.riseSetText}
          />
          {/* <Text style={styles.riseSetText}>10:46:58am</Text> */}
          <Icontext
            text={"17:28:15pm"}
            iconName={"sunset"}
            iconColor={"white"}
            bodyTextStyles={styles.riseSetText}
          />
          {/* <Text style={styles.riseSetText}>17:28:15pm</Text> */}
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
  },

  image: {},
  cityName: {
    fontSize: 40,
  },
  countryName: {
    fontSize: 30,
  },

  cityText: {
    justifyContent: "center",
    alignSelf: "center",
    fontWeight: "bold",
    color: "white",
  },
  populationWrapper: {
    // flexDirection: "row",
    // alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
  },
  populationText: {
    color: "red",
    fontSize: 25,
    marginLeft: 7.5,
    fontWeight: "bold",
  },

  riseSetWrapper: {
    flexDirection: "row",
    justifyContent: "space-aroud",
    alignItems: "center",
    marginTop: 30,
  },
  riseSetText: {
    fontSize: 25,
    color: "white",
    fontWeight: "bold",
  },

  rowLayout: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default City;
