// import { StatusBar } from 'expo-status-bar';
import React from 'react'
import {Ionicons, View, Text, StyleSheet, Image,TextInput,TouchableHighlight, Pressable} from 'react-native'
// import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import Logo from './assets/heychewy1.png'
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';



const Username = () => {
    const [text, onChangeText] = React.useState(null);
    return(
    <TextInput
    style={styles.input}
    onChangeText={onChangeText}
    value={text}
    placeholder="Username"/>
    )

};

const Password = () => {
    const [text, onChangeText] = React.useState(null);
    return(
    <TextInput
    style={styles.input}
    onChangeText={onChangeText}
    value={text}
    placeholder="Password"/>
    )

};

const ConfirmPassword = () => {
    const [text, onChangeText] = React.useState(null);
    return(
    <TextInput
    style={styles.input}
    onChangeText={onChangeText}
    value={text}
    placeholder="Confirm Password"/>
    )

};

/*const Register = () => {
    const navigation = useNavigation();

    return (
        <TouchableHighlight
        style={styles.register}
        onPress={() => navigation.navigate('HomeScreen')}
        underlayColor='#B9D7EF'>
        <Text style={[styles.registerButton]}>Register</Text>
        </TouchableHighlight>       
    )
}; */

export function CreateAccount () {
    const navigation = useNavigation();
    return (

        <View style={styles.header}> 
        <View style={styles.titleBar}>
            <Pressable style={styles.button} onPress={() => navigation.goBack()}>
                <Text style={styles.text}>Return to Login</Text>
            </Pressable>
        </View>
        <Image source={Logo} style={styles.heyChewy1}/>
        <Text style={styles.message}> Thanks for joining our  {'\n'} PAW-some community!  </Text>
        <Username/>
        <Password/>
        <ConfirmPassword/>
        <TouchableHighlight
        style={styles.register}
        onPress={() => navigation.navigate('HomeScreen')}
        underlayColor='#fff'>
        <Text style={(styles.registerButton)}>Register</Text>    
        </TouchableHighlight>
        </View>

    );
 
};


const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#009387',
      alignItems: "center",
      justifyContent: "center",
      paddingVertical: 80
    },

    header: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 30,
        paddingHorizontal: 10,
        paddingBottom: 120
    },

    message: {
        color: '#3153A4',
        fontWeight: 'bold',
        fontSize: 25,
        paddingTop: 30,
        paddingBottom: 20,
        textAlign: 'center'
        
    },

    input: {
        height: 40,
        width: 250,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 10,
        color:'#C4C4C4'
    },

    registerButton: {
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        color: '#fff'
    },

    logo: {
        width: 99,
        height: 90,
        // paddingTop: 120,
        // paddingBottom: 50,
    },

    titleBar: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 24,
        marginHorizontal: 16
    },

    register: {
        marginRight: 100,
        marginLeft: 100,
        marginTop: 10,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft:40,
        paddingRight: 40,
        backgroundColor: '#3153A4',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#fff',
      },

      heyChewy1: {
        flex: 1,
        height: 200,
        width: 200,
        resizeMode: 'contain',

    },
   });

   export default CreateAccount;