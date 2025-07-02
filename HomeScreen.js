import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🏪 Smart Warehouse Dashboard</Text>
      <Text style={styles.subtitle}>Welcome! Choose a feature to begin:</Text>

      <Button
        mode="contained"
        style={styles.button}
        onPress={() => navigation.navigate("Prediction")}
      >
        📊 Predict Product Demand
      </Button>

      <Button
        mode="contained"
        style={styles.button}
        onPress={() => navigation.navigate("Suggestions")}
      >
        🧺 Cabinet Suggestions
      </Button>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    justifyContent: "center",
    backgroundColor: "#f5f6fa",
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 30,
    textAlign: "center",
  },
  button: {
    marginVertical: 10,
    paddingVertical: 5,
  },
});
