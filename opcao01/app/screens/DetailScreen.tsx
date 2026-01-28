import React, { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export default function DetailScreen({ route, navigation }: any) {
  const { id } = route.params || { id: "desconhecido" };
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [data, setData] = useState<any>(null);

  return (
    <View style={styles.container}>
      <Text>ID do Item: {data.id}</Text>
      <Text>Título: {data.title}</Text>
      <Text>Descrição: {data.description}</Text>
      <Button title="Voltar" onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 20,
  },
});
