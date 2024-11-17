import { Button, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";

const Counter = () => {
  // let count = 0;

  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log(`Our count value is ${count}`)
  }, [ ])
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{`count ${count}`}</Text>
      <Button
        title="increase"
        onPress={() => {
          // count++;
          setCount(count + 1);
          console.log(count);
        }}
        color="red"
      />
      <Button
        title="decrease"
        onPress={() => {
          // count--;
          setCount(count - 1);
          console.log(count);
        }}
      />
    </View>
  );
};

export default Counter;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "orange",
  },
  title: {
    alignSelf: "center",
    fontSize: 25,
    marginTop: 25,
  },
});
