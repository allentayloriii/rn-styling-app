import PlatformStyling from "@/components/PlatformStyling";
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
      <PlatformStyling />
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  container: { flex: 1 },
});
