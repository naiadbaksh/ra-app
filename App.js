import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import Test from "./test.component";
import { StyleSheet, Text, View } from "react-native";
import axios from "axios";

export default function App() {
  const getData = async () => {
    const { data } = await axios.get("http://localhost:1337/api/products", {
      headers: {
        Authorization:
          "Bearer dda20632975e9a51dc0c012c65bf902c86d1c600f345d0205bb7e51006ca6e174addb5db922c67aec5ca969e85c44eb725fece71a67a92e2ac669407c55ceb94650fe859e434b045a24d681471dcaf5c3bffe1dcc016d29104cd7128da439782d68c8f99adacabdcf75e0c236f6026504ae9707e978e8a77ad043bd60ab6b1a2",
      },
    });

    console.log(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={{ color: "#888", fontSize: 18 }}>
        Testing again in VSCode.
      </Text>
      <Test></Test>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
