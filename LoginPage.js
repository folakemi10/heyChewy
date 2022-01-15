import {
  StyleSheet,
  View,
  Image,
  useWindowDimensions,
  Text,
  SafeAreaView
} from "react-native";
import { withSafeAreaInsets } from "react-native-safe-area-context";
import Custominput from "./Custominput/Custominput";
import React, { useState } from "react";
import CustomButton from "./Custom button/CustomButton";
import { useNavigation } from "@react-navigation/native";

export function LoginPage() {
  const navigation = useNavigation();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { height } = useWindowDimensions();

  const onRegisterPress = () => {
    // go to create account
    console.warn("Register");
    navigation.navigate("CreateAccount");
  };
  const onSignInPress = () => {
    // go to home page
    console.warn("SignIn");
    navigation.navigate("HomeScreen");
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}> Hello and welcome to </Text>
      <Image
        source={require("./assets/heychewy1.png")}
        style={[styles.logo, { height: height * 0.3 }]}
      />
      <Custominput
        placeholder="Username"
        value={username}
        setValue={setUsername}
      />
      <Custominput
        placeholder="password"
        value={password}
        setValue={setPassword}
        secureTextEntry={true}
      />
      <View style={{ flexDirection: "row" }}>
        <CustomButton text="Register" onPress={onRegisterPress} />
        <CustomButton text="Sign In" onPress={onSignInPress} />
      </View>
    </SafeAreaView>
  );
}

//why is there a seperate styles.js
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
  },

  logo: {
    maxWidth: 200,
    maxHeight: 200,
    width: "100%",
    resizeMode: "contain",
    paddingVertical: 130,
  },

  header: {
    color: "#3153A4",
    fontWeight: "bold",
    fontStyle: "italic",
  },
});
