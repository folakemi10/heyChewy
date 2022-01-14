import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, Image, Pressable } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import styles from './style.js';



export function HomeScreen() {
    return(
       <View style = {styles.container} >
           <Image source={require('./assets/heychewy2.png')} style={styles.heyChewy2} />
            <View style={{ flex: 1,  justifyContent:"space-evenly",}}>
                <Pressable title="my pets" style={styles.button}>
                    <Text style={styles.text}>{'my pets'}</Text>
                </Pressable>
                <Pressable title="reminders" style={styles.button}>
                    <Text style={styles.text}>{'reminders'}</Text>
                </Pressable>
            </View>
            <View style={{ flex: 1,}}>

            </View>
       </View>
    );    
  }

