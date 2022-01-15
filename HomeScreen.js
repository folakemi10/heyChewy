//import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView, ImageBackground, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import styles from './style.js';
import { SafeAreaView, withSafeAreaInsets } from 'react-native-safe-area-context';



export function HomeScreen() {
    return(
       <SafeAreaView style = {styles.container} >

           <Image source={require('./assets/heychewy2.png')} style={styles.heyChewy2} />
           <Text style={{ color: 'white', fontSize: 30, lineHeight:100,}}>show me ...</Text>
            
            <View style={{ flex: 1, justifyContent: 'space-between',}}>

                <TouchableOpacity title="my pets" style={styles.button}>
                    <Text style={styles.text}>{'my pets'}</Text>
                </TouchableOpacity>
                <TouchableOpacity title="reminders" style={styles.button}>
                    <Text style={styles.text}>{'reminders'}</Text>
                </TouchableOpacity>
            </View>

            <View style={{ flex: 1, alignItems: 'center',}}> 
                <Text style={{ color: 'white', fontSize: 35, lineHeight: 200,}}>browse pets</Text>
            </View>    
                
                <ScrollView centerContent={true} horizontal={true} contentContainerStyle={styles.scontainer}>
                    <TouchableOpacity style={styles.sbutton}>
                        <Image 
                        source={require('./assets/dog.png')}
                        style={styles.portrait}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.sbutton}>
                        <Image 
                        source={require('./assets/cat.png')}
                        style={styles.portrait}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.sbutton}>
                        <Image 
                        source={require('./assets/bunny.png')}
                        style={styles.portrait}/>
                    </TouchableOpacity>
                </ScrollView>
            
       </SafeAreaView>
    );    
  }
