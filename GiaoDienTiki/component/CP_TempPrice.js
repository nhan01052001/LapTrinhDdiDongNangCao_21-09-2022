import React, { useState, useCallback } from "react";
import { StyleSheet, Text, View } from "react-native";

const CP_TempPrice = ({ priceX }) => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapContent}>
        <Text style={{ fontSize: 18, marginLeft: 30, fontWeight: "500" }}>
          Tạm tính
        </Text>
        <Text style={{ color: "red", marginRight: 30, fontSize: 18 }}>
          {priceX} đ
        </Text>
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
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "white",
    flexDirection: "row",
    marginTop: 20,
  },
});

export default CP_TempPrice;
