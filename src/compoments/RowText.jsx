import { StyleSheet, Text, View } from "react-native";
import React from "react";

const RowText = (props) => {
  const { hiMessage, LowMessage } = props;
  const { hiLowWrapper, hiLow } = styles;
  return (
    <View style={hiLowWrapper}>
      <Text style={hiLow}> {hiMessage} </Text>
      <Text style={hiLow}> {LowMessage} </Text>
    </View>
  );
};

export default RowText;

const styles = StyleSheet.create({});
