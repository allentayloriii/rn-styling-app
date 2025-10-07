import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const SafeBox = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.bottom}>
        <Text>Safebox</Text>
      </View>
    </SafeAreaView>
  );
};

export default SafeBox;

const styles = StyleSheet.create({
  bottom: {
    backgroundColor: "green",
    position: "absolute",
    width: "100%",
    height: 100,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 20,
  },
});
