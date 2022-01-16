import { StyleSheet, Text, View, Image, ScrollView, ImageBackground, TouchableOpacity, SafeAreaView } from 'react-native';
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';

export function MedicalHistory() {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={Styles.container}>
            <View style={Styles.titleBar}>
                <Ionicons name="ios-arrow-back" size={24} color="#3153A4" onPress={() => navigation.navigate('PetProfile')}></Ionicons>

            </View>
            <TouchableOpacity style={Styles.button}>
                <Text style={Styles.text}>upload files</Text>
            </TouchableOpacity>
            <ScrollView contentContainerStyle={Styles.scontainer}>

            </ScrollView>
        </SafeAreaView>
    );
}

const Styles= StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ffffff", 
        alignItems: 'center',
        justifyContent: "space-between"
    },

    button: {
        //flex: 1,
        alignItems: "center",
        width: 297,
        height: 73,
        borderRadius: 20,
        backgroundColor: "#3153A4",
        justifyContent: "center",
        marginBottom: 20,
      },

    scontainer: {
        flexGrow: 1,
        backgroundColor: "#E5E5E5", 
        alignItems: 'center',
        justifyContent: "space-between",
        width: 350,
        borderRadius: 15,
    },

    text: {
        color: "#fff", 
        // fontFamily: 'WorkSans-Medium'
        fontSize: 34,
        fontWeight: "bold",
    },



});