import Welcome from "@/components/Welcome/Welcome";
import React from "react";
import { StyleSheet, View } from "react-native";

const index = () => {
  return (
    <View style={styles.container}>
      {/* <Basics /> */}
      {/* <Flex /> */}
      {/* <ConditionalStyling /> */}
      {/* <ImageView /> */}
      {/* <Functions /> */}
      {/* <PlatformStyling /> */}
      <Welcome />
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  container: { flex: 1 },
});
