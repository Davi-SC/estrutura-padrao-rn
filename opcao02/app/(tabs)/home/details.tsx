import { router } from "expo-router";
import { Button, StyleSheet, Text, View } from "react-native";

export default function Details() {
  return (
    <View style={styles.container}>
      <Text>Tela Detalhes</Text>
      <Button title="Voltar para home" onPress={() => router.push("./home")} />
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
