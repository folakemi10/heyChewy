import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "./HomeScreen";
import { CreateAccount } from "./CreateAccount";
import { LoginPage } from "./LoginPage";
import { RemindersPage } from "./RemindersPage";
<<<<<<< HEAD
import { SingleReminderPage } from "./SingleReminderPage";
=======
import { PetProfile } from "./PetProfile";
>>>>>>> e354e5299b0c7d791b5d55ba946c1d8402f969a5

const Stack = createNativeStackNavigator();

export default function App() {

  // const [loaded] = useFonts({
  //   Montserrat: require('./assets/fonts/'),
  // });
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="LoginPage" component={LoginPage} />
        <Stack.Screen name="CreateAccount" component={CreateAccount} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="RemindersPage" component={RemindersPage} />
<<<<<<< HEAD
        <Stack.Screen name="SingleReminderPage" component={SingleReminderPage} />
=======
        <Stack.Screen name="PetProfile" component={PetProfile} />
>>>>>>> e354e5299b0c7d791b5d55ba946c1d8402f969a5
      </Stack.Navigator>
    </NavigationContainer>
  );
}
