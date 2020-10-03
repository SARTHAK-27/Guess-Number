import React from "react";
import { View, StyleSheet } from "react-native";

const Card = (props) => {
  return (
    <View style={{ ...Styles.card, ...props.style }}>{props.children}</View>
  );
};

const Styles = StyleSheet.create({
  card: {
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.7,
    shadowRadius: 6,
    elevation: 8,
    backgroundColor: "white",
    padding: 20,
  },
});

export default Card;
