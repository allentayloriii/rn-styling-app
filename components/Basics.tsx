import React from "react";
import { StyleSheet, Text, View, useWindowDimensions } from "react-native";

const Basics = () => {
  const { width, height, scale, fontScale } = useWindowDimensions();
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.basicText}>Basics</Text>
        <Text style={styles.bodyText}>This is a basic component.</Text>

        <Text style={styles.bodyText}>
          Window Dimensions: {width} x {height}, scale {scale}, font scale{" "}
          {fontScale}
        </Text>
      </View>

      <View style={styles.boxOne} />
      <View style={styles.boxTwo} />
      <View style={[styles.boxThree, { left: width / 2 - 25 }]} />
    </View>
  );
};

export default Basics;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#182264",
    padding: 20,
  },
  textContainer: {
    marginBottom: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  basicText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
  bodyText: {
    fontSize: 16,
    color: "white",
  },
  boxOne: {
    width: 50,
    height: 50,
    backgroundColor: "#423f93",
  },
  boxTwo: {
    width: "50%",
    height: "50%",
    backgroundColor: "#f0a500",
  },
  boxThree: {
    position: "absolute",
    bottom: 50,
    height: 50,
    width: 50,
    backgroundColor: "#2620d5",
  },
});
