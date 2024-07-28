import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Text, StyleSheet, View } from "react-native";
export default function WelcomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.confirm}>Welcome!</Text>;
    </View>
  );
}

const styles = StyleSheet.create({
  confirm: {
    fontSize: 30,
    color: "yellow",
  },
  container: {
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
});
