import React, { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export default function HomeScreen({ navigation }: any) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<any[]>([]);

  return (
    <View style={styles.container}>
      <Text>Bem-vindo ao App!</Text>
      <Text>
        {data.length}{" "}
        {data.length === 1 ? "item encontrado" : "itens encontrados"}
      </Text>
      <Button
        title="Ver Detalhes do Item 1"
        onPress={() => navigation.navigate("Detail", { id: 1 })}
      />
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
