import React, { useState, useCallback } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Platform,
  Alert,
  TextInput,
} from "react-native";
import CP_Center from "../component/CP_Center";
import CP_TempPrice from "../component/CP_TempPrice";
import CP_Footer from "../component/CP_Footer";

const SC_ProductDetail = () => {
  let temp = 140000;
  const [countAmount, setCountAmount] = useState(1);
  const [price, setPrice] = useState(temp);

  const handleIncrement = useCallback(() => {
    setCountAmount((current) => current + 1);
    setPrice((current) => current + temp);
  }, []);

  const handleDecrement = useCallback(() => {
    setCountAmount((current) => current - 1);
    setPrice((current) => current - temp);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.vHeader}>
        <View style={styles.wrapBook}>
          <Image
            source={require("../assets/book.png")}
            style={{ width: "30%", height: 180 }}
          />
          <View style={styles.wrapInforBook}>
            <Text style={styles.text1}>Nguyên hàm tích phân và ứng dụng</Text>
            <Text style={[styles.text1, { marginBottom: 20 }]}>
              Cung cấp bởi Tiki Trading
            </Text>
            <Text style={styles.price1}>{price} d</Text>
            <Text style={{ opacity: 0.5 }}>141.000 d</Text>
            <View style={styles.amount}>
              <TouchableOpacity
                style={styles.btnCountAmount}
                onPress={handleDecrement}
              >
                <Text
                  style={{
                    fontSize: 25,
                    backgroundColor: "#C4C4C4",
                  }}
                >
                  -
                </Text>
              </TouchableOpacity>
              <Text
                style={{
                  fontSize: 25,
                  paddingHorizontal: 10,
                }}
              >
                {countAmount}
              </Text>
              <TouchableOpacity
                style={styles.btnCountAmount}
                onPress={handleIncrement}
              >
                <Text
                  style={{
                    fontSize: 25,
                    backgroundColor: "#C4C4C4",
                  }}
                >
                  +
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  justifyContent: "center",
                  marginLeft: 100,
                }}
              >
                <Text style={{ fontSize: 18, color: "blue" }}>Mua Sau</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={[styles.wrapBook, {}]}>
          <Text style={{ fontSize: 15, marginRight: 30 }}>
            Mua giam gia da luu
          </Text>
          <TouchableOpacity>
            <Text style={{ fontSize: 15, color: "blue" }}>Xem tai day</Text>
          </TouchableOpacity>
        </View>
        <View
          style={[styles.wrapBook, { alignItems: "center", marginTop: 10 }]}
        >
          <TextInput
            style={[styles.input, { width: 220 }]}
            placeholder="Ma giam gia"
          />
          <TouchableOpacity style={styles.btnApDung}>
            <Text style={{ fontSize: 18, color: "white", fontWeight: "700" }}>
              Ap dung
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <CP_Center />
      <CP_TempPrice priceX={price} />
      <CP_Footer priceY={price} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? 30 : 0,
    backgroundColor: "#616161",
  },
  vHeader: {
    flex: 1,
    backgroundColor: "white",
    flexGrow: 5,
  },

  wrapBook: {
    flexDirection: "row",
    margin: 10,
    width: "100%",
  },

  wrapInforBook: {
    marginLeft: 10,
    width: "65%",
  },

  text1: {
    fontSize: 15,
    fontWeight: "500",
    width: "100%",
    marginBottom: 10,
  },

  price1: {
    fontSize: 20,
    color: "red",
    marginBottom: 5,
  },

  amount: {
    position: "absolute",
    flexDirection: "row",
    justifyContent: "space-around",
    // width: "30%",
    bottom: 0,
  },

  btnApDung: {
    padding: 10,
    backgroundColor: "#0A5EB7",
    marginLeft: 30,
  },

  input: {
    height: 40,
    borderWidth: 1,
    padding: 20,
  },
});

export default SC_ProductDetail;
