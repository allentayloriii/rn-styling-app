import React from "react";
import { Image, StyleSheet, View } from "react-native";

const IMG = require("@/assets/images/react-logo.png");

const ImageView = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: "https://galaxies.dev/img/mika.webp" }}
        style={{ width: 200, height: 200 }}
      />
      <View>
        <Image source={IMG} />
      </View>
    </View>
  );
};

export default ImageView;

const styles = StyleSheet.create({
  container: {},
});
