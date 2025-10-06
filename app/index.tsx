import Flex from "@/components/Flex";
import React from "react";
import { StyleSheet, View } from "react-native";

const index = () => {
  return (
    <View style={styles.container}>
      {/* <Basics /> */}
      <Flex />
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  container: { flex: 1 },
});
