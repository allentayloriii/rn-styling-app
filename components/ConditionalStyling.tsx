import React, { useState } from "react";
import { Button, StyleSheet, View } from "react-native";

const ConditionalStyling = () => {
  const [conditional, setConditional] = useState(true);

  const getMyStyle = () => {
    return {
      backgroundColor: conditional ? "red" : "green",
      width: 100,
      height: 100,
    };
  };
  return (
    <View style={styles.container}>
      <Button title="Toggle" onPress={() => setConditional(!conditional)} />
      <View
        style={[
          styles.box,
          { backgroundColor: conditional ? "purple" : "orange" },
        ]}
      />
      <View style={getMyStyle()} />
    </View>
  );
};

export default ConditionalStyling;

const styles = StyleSheet.create({
  container: {},
  box: {
    width: 100,
    height: 100,
    backgroundColor: "purple",
  },
});
