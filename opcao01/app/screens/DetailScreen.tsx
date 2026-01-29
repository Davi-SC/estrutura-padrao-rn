import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Button,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function DetailScreen({ route, navigation }: any) {
  const { id } = route.params || { id: "desconhecido" };
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [data, setData] = useState<any>(null);

  const loadData = () => {
    setLoading(true);
    setError(false);

    setTimeout(() => {
      // 50% de chance de erro na primeira tentativa
      const shouldFail = Math.random() > 0.5;

      if (shouldFail && !data) {
        setError(true);
        setLoading(false);
      } else {
        setData({
          id,
          title: `Item ${id}`,
          description: `Descrição detalhada do item ${id}`,
        });
        setLoading(false);
      }
    }, 1500);
  };

  useEffect(() => {
    loadData();
  }, []);

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" />
        <Text>Carregando detalhes...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.container}>
        <Text>Erro ao carregar dados</Text>
        <Text>Não foi possível carregar as informações do item {id}</Text>
        <Button title="Tentar Novamente" onPress={loadData} />
      </View>
    );
  }

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
