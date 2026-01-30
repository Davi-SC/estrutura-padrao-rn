import { router } from "expo-router";
import React, { useState, useEffect } from "react";
import { ActivityIndicator, Button, StyleSheet, Text, View } from "react-native";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="red" />
        <Text>Carregando...</Text>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <Text>Tela Home</Text>
      <Button
        title="Ir para detalhes"
        onPress={() => router.push("/(tabs)/home/details")}
      />
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
