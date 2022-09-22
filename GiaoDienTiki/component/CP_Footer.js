import React, { useState, useCallback } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const CP_Footer = ({ priceY }) => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapContent}>
        <View style={styles.vText}>
          <Text
            style={{
              fontSize: 24,
              marginRight: "15%",
              fontWeight: "500",
              marginTop: 15,
            }}
          >
            Thành tiền
          </Text>
          <Text
            style={{
              color: "red",
              marginLeft: "15%",
              fontSize: 24,
              marginTop: 15,
            }}
          >
            {priceY} d
          </Text>
        </View>
        <TouchableOpacity style={styles.btnDatHang}>
          <Text>TIẾN HÀNH ĐẶT HÀNG</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexGrow: 3,
  },

  wrapContent: {
    flex: 1,
    backgroundColor: "white",
    marginTop: 80,
    alignItems: "center",
  },

  vText: {
    flexDirection: "row",
  },

  btnDatHang: {
    width: "80%",
    marginTop: 25,
    paddingVertical: 15,
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CP_Footer;
