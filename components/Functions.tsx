import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Functions = () => {
  return (
    <View style={styles.container}>
      <View
        style={[
          { backgroundColor: "red", padding: 50 },
          StyleSheet.absoluteFill,
        ]}
      >
        {/* <Text>Functions Component</Text> */}
      </View>
      <View style={styles.overlay}>
        <Text style={{ color: "white" }}>Overlay Text</Text>
        <View
          style={{
            backgroundColor: "white",
            width: "100%",
            height: StyleSheet.hairlineWidth,
          }}
        />
      </View>
    </View>
  );
};

export default Functions;

const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.5)",
    padding: 50,
    fontSize: 25,
    margin: 20,
  },
  container: { flex: 1 },
});
