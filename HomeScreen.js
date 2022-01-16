//import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import styles from "./style.js";
import {
  SafeAreaView,
  withSafeAreaInsets,
} from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

export function HomeScreen() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flex: 3, }}>
      <Image
        source={require("./assets/heychewy2.png")}
        style={styles.heyChewy2}
      />
      <Text style={{ color: "white", fontSize: 30, lineHeight: 100 }}>
        show me ...
      </Text>
      </View>
      <View style={{ flex: 2, justifyContent: 'center'}}>
        <TouchableOpacity
          title="my pets"
          style={styles.button}
          onPress={() => navigation.navigate("PetList")}
        >
          <Text style={styles.text}>{"my companions"}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          title="reminders"
          style={styles.button}
          onPress={() => navigation.navigate("RemindersPage")}
        >
          <Text style={styles.text}>{"reminders"}</Text>
        </TouchableOpacity>
        <Text style={{ color: "white", fontSize: 35, lineHeight: 50 }}>
          browse companions
        </Text>
      </View>

      <ScrollView
        centerContent={true}
        horizontal={true}
        contentContainerStyle={styles.scontainer}
      >
        <TouchableOpacity style={styles.sbutton}>
          <Image source={require("./assets/dog.png")} style={styles.portrait} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.sbutton}>
          <Image source={require("./assets/cat.png")} style={styles.portrait} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.sbutton}>
          <Image
            source={require("./assets/bunny.png")}
            style={styles.portrait}
          />
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}
