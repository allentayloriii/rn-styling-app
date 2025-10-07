import Themed from "@/components/Themed";
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
      {/* <Welcome /> */}
      {/* <SafeBox /> */}
      <Themed />
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  container: { flex: 1 },
});
