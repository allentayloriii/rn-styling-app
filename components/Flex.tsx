import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Flex = () => {
  return (
    <View style={styles.container}>
      <View
        style={{
          flex: 2,
          backgroundColor: "purple",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            backgroundColor: "teal",
            alignSelf: "center",
          }}
        >
          <Text style={{ color: "white" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </Text>
          {/* <Text style={{ color: "white" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis,
            aliquam culpa consectetur quo quas libero sit cum placeat veniam
            aliquid quia nesciunt rerum porro similique fugiat a veritatis, illo
            tenetur?
          </Text> */}
        </View>
      </View>
      <View style={styles.innerBox} />
      <View style={{ flex: 2, backgroundColor: "blue" }} />
      <View style={{ flex: 1, backgroundColor: "green" }} />
    </View>
  );
};

export default Flex;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "yellow",
    gap: 10,
  },
  innerBox: {
    flex: 1,
    backgroundColor: "red",
  },
});
