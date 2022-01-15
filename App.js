import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "./HomeScreen";
import { CreateAccount } from "./CreateAccount";
import { LoginPage } from "./LoginPage";
import { RemindersPage } from "./RemindersPage";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="LoginPage" component={LoginPage} />
        <Stack.Screen name="CreateAccount" component={CreateAccount} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="RemindersPage" component={RemindersPage} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
