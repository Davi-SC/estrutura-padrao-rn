import { NavigationContainer } from "@react-navigation/native";
import TabNavigation from "./app/navigation/TabNavigation";

const linking = {
  prefixes: ["opcao01://", "https://opcao01.com"],
  config: {
    screens: {
      HomeStack: {
        screens: {
          Home: "home",
          Detail: "details/:id",
        }
      },
      Profile: "profile",
    }
  }
}

export default function App() {
  return (
    <NavigationContainer linking={linking} >
      <TabNavigation />
    </NavigationContainer>
  );
}
