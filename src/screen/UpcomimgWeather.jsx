import {
  FlatList,
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
  ImageBackground,
} from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
import Item from "../compoments/ListItem";

const DATA = [
  {
    dt_txt: "2023-02-18 12:00:00",
    main: {
      temp_max: 8.55,
      temp_min: 7.55,
    },
    weather: [{ main: "Clear" }],
  },
  {
    dt_txt: "2023-02-18 15:00:00",
    main: {
      temp_max: 8.55,
      temp_min: 7.55,
    },
    weather: [{ main: "Clouds  " }],
  },

  {
    dt_txt: "2023-02-18 12:00:00",
    main: {
      temp_max: 8.55,
      temp_min: 7.55,
    },
    weather: [{ main: "Rain" }],
  },
];

// const Item = (props) => {
//   const { dt_txt, min, max, condition } = props;

//   return (
//     <View style={styles.item}>
//       <Feather name={"sun"} size={50} color={"white"} />
//       <Text style={styles.item}>{dt_txt}</Text>
//       <Text style={styles.temp}>{min}</Text>
//       <Text style={styles.temp}>{max}</Text>
//     </View>
//   );
// };

const UpcomimgWeather = () => {
  const renderItem = ({ item }) => (
    <Item
      condition={item.weather[0].main}
      dt_txt={item.dt_txt}
      min={item.main.temp_min}
      max={item.main.temp_max}
    />
  );
  const { container, image } = styles;
  return (
    <ImageBackground style={image} source={require("../../assets/sunset.jpg")}>
      <View style={container}>
        <Text>UpcomimgWeather</Text>
        {/* <Text>test</Text> */}
        {/* <Image source={require("../../assets/sunset.jpg")} style={styles.image} /> */}

        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => {
            item.dt_txt;
          }}
        />
      </View>
    </ImageBackground>
  );
};

export default UpcomimgWeather;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    // backgroundColor: "red",
    backgroundColor: "royalBLue",
  },
  date: {
    color: "White",
    fontSize: 15,
  },
  image: {
    // height: 100,
    // width: 100,
    flex: 1,
  },
});
