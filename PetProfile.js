import React from "react";
import { StyleSheet, Text, View, SafeAreaView, Image, ScrollView, TouchableOpacity, ImageBackground } from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


export function PetProfile() {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.titleBar}>
                <Ionicons name="ios-arrow-back" size={24} color="#fff" onPress={() => navigation.navigate('PetList')}></Ionicons>
                <Ionicons name="create" size={24} color="#fff" onPress={() => navigation.navigate('EditProfile')}></Ionicons>
            </View>

            <View style={{ alignSelf: "center" }}>
                <View style={styles.profileImage}>
                    <Image source={require("./assets/hazel.jpg")} style={styles.image} resizeMode="center"></Image>
                </View>
            </View>

            <View style={styles.infoContainer}>
                <Text style={[styles.text, { fontWeight: "200", fontSize: 36 }]}>Evie</Text>
                <Text style={[styles.text, { color: "#AEB5BC", fontSize: 14 }]}>Chihuahua / Pomeranion</Text>
            </View>



            <Text style={[styles.subText, styles.recent]}>Pet status</Text>
            <View style={{ alignItems: "center" }}>
                <View style={styles.recentItem}>
                    <View style={{ width: 250 }}>
                        <Text style={[styles.text, { color: "#fff", fontWeight: "300" }]}>
                        Gender : Female
                        </Text>
                    </View>
                </View>

                <View style={styles.recentItem}>
                    <View style={{ width: 250 }}>
                        <Text style={[styles.text, { color: "#fff", fontWeight: "300" }]}>
                            Age : 4 Months
                        </Text>
                    </View>
                </View>

                <View style={styles.recentItem}>
                    <View style={{ width: 250 }}>
                        <Text style={[styles.text, { color: "#fff", fontWeight: "300" }]}>
                            Weight : 3 lbs.
                        </Text>
                    </View>
                </View>

                <View style={{ marginTop: 32, marginBottom: 32,  flex: 1, justifyContent: 'space-between' }} >
                {/* onPress={() => navigation.navigate('MedicalHistory')*/}
            <TouchableOpacity onPress={() => navigation.navigate('MedicalHistory')} title="medical history" style={styles.button}> 
                <Text style={styles.btext}>{' medical history '}</Text>
            </TouchableOpacity>
                
            <TouchableOpacity title="notes" style={styles.button} onPress={() => navigation.navigate('PetNotes')}>
                <Text style={styles.btext}>{' notes'}</Text>
            </TouchableOpacity>

            </View>
            <View style={{alignItems: 'center'}}>
          <TouchableOpacity onPress={() => this.bs.current.snapTo(0)}>
            <View
              style={{
                height: 100,
                width: 100,
                borderRadius: 15,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <ImageBackground
     
                style={{height: 100, width: 100}}
                imageStyle={{borderRadius: 15}}>
                <View
                  style={{
                    flex: 10,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Icon
                    name="camera"
                    size={35}
                    color="#fff"
                    style={{
                      opacity: 0.7,
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderWidth: 1,
                      borderColor: '#fff',
                      borderRadius: 10,
                    }}
                  />
                </View>

              </ImageBackground>
            </View>
          </TouchableOpacity>
            </View>
            </View>
        </ScrollView>
    </SafeAreaView>




);
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#3153A4", 
        alignItems: 'center',
        justifyContent: "space-between"
    },
    text: {
        color: "#fff", 
        // fontFamily: 'WorkSans-Medium'

    },
    btext: {
        color: '#3153A4',
        fontSize: 40,
    },
    buttontext: {
        color: "#3153A4",
        alignItems: 'center',
        justifyContent: 'center',
        width: 300,
        height: 80,
        borderRadius: 20,
        backgroundColor: 'white',
    },
    image: {
        flex: 1,
        height: undefined,
        width: undefined
    },
    titleBar: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 24,
        marginHorizontal: 16
    },
    subText: {
        fontSize: 20,
        color: "#fff",
        textTransform: "uppercase",
        fontWeight: "500"
    },
    profileImage: {
        width: 200,
        height: 200,
        borderRadius: 100,
        overflow: "hidden"
    },
    dm: {
        backgroundColor: "#41444B",
        position: "absolute",
        top: 20,
        width: 40,
        height: 40,
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center"
    },
    camera: {
        backgroundColor: "#34FFB9",
        position: "absolute",
        bottom: 28,
        left: 10,
        padding: 4,
        height: 20,
        width: 20,
        borderRadius: 10
    },
    add: {
        backgroundColor: "#41444B",
        position: "absolute",
        bottom: 0,
        right: 0,
        width: 60,
        height: 60,
        borderRadius: 30,
        alignItems: "center",
        justifyContent: "center"
    },
    infoContainer: {
        alignSelf: "center",
        alignItems: "center",
        marginTop: 16
    },
    statsContainer: {
        flexDirection: "row",
        alignSelf: "center",
        marginTop: 32
    },
    statsBox: {
        alignItems: "center",
        flex: 1
    },
    mediaImageContainer: {
        width: 180,
        height: 200,
        borderRadius: 12,
        overflow: "hidden",
        marginHorizontal: 10
    },
    mediaCount: {
        backgroundColor: "#41444B",
        position: "absolute",
        top: "50%",
        marginTop: -50,
        marginLeft: 30,
        width: 100,
        height: 100,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 12,
        shadowColor: "rgba(0, 0, 0, 0.38)",
        shadowOffset: { width: 0, height: 10 },
        shadowRadius: 20,
        shadowOpacity: 1
    },
    recent: {
        marginLeft: 130,
        marginTop: 32,
        marginBottom: 6,
        fontSize: 15
    },
    recentItem: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 16
    },
    activityIndicator: {
        backgroundColor: "#CABFAB",
        padding: 4,
        height: 12,
        width: 12,
        borderRadius: 6,
        marginTop: 3,
        marginRight: 20
    },

  button: {
    alignItems: "center",
    width: 350,
    height: 80,
    borderRadius: 20,
    backgroundColor: "white",
    justifyContent: "center",
    marginBottom: 20,
  },
});
