import { COLORS } from "@/utils/contants/Colors";
import React from "react";
import { StyleSheet, Text, useColorScheme, View } from "react-native";

const Themed = () => {
  const colorScheme = useColorScheme();
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: COLORS[colorScheme ?? "light"].background,
        },
      ]}
    >
      <Text style={{ color: COLORS[colorScheme ?? "light"].text }}>Themed</Text>
    </View>
  );
};

export default Themed;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
