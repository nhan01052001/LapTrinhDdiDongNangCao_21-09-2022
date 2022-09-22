import React, { useState, useCallback } from "react";
import { StyleSheet, Text, View } from "react-native";

const CP_Center = () => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapContent}>
        <Text>Bạn có phiếu quà tặng Tiki/Got it/ Urbox?</Text>
        <Text style={{ color: "blue", marginLeft: 10 }}>Nhập tại đây?</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexGrow: 1,
  },

  wrapContent: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    flexDirection: "row",
    marginTop: 20,
  },
});

export default CP_Center;
