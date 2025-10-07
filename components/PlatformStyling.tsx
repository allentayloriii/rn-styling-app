import React from "react";
import { Platform, StyleSheet, Text, View } from "react-native";

const PlatformStyling = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>I have platform styles!</Text>
    </View>
  );
};

export default PlatformStyling;

const styles = StyleSheet.create({
  container: {},
  label: {
    // Platform.select returns the right object for the current platform
    ...Platform.select({
      ios: {
        color: "blue",
        fontSize: 20,
        fontWeight: "bold" as const, // TypeScript improvement
      },
      android: {
        color: "green",
        fontSize: 18,
        fontStyle: "italic" as const, // TypeScript improvement
      },
      default: {
        color: "purple",
        fontSize: 16,
      },
    }),
  },
});
