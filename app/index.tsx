import React from "react";
import { StyleSheet, View } from "react-native";
import Basics from "../components/Basics";

const index = () => {
  return (
    <View style={styles.container}>
      <Basics />
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  container: { flex: 1 },
});
