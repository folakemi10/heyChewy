import { StyleSheet, Text, View, Pressable, TouchableOpacity, FlatList, SafeAreaView, StatusBar } from "react-native";
import React, { useState } from "react";

const DATA = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      title: "Grooming Appointment",
      date: "1/15",
      des: "Take Bella to get her nails trimed"
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      title: "Change light bulb",
      date: "1/20",
      des: "Change light bulb for fishes"
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      title: "Change Noodle's bedding",
      date: "1/30",
      des: "Change Noodle's substrate for woodchips"
    },
  ];
  
const Item = ({ item, onPress, backgroundColor, textColor }) => (
    <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
      <Text style={[styles.title, textColor]}>{item.title}</Text>
    </TouchableOpacity>
  );

export function UpComingReminders(){
    const [selectedId, setSelectedId] = useState(null);

    const renderReminder = ({ item }) => {
        
        return (
          <Pressable style={{padding:5}} onPress={() => setSelectedId(item.id)}>
            <View style={styles.card}>
                <View style={{alignSelf: 'center'}}>
                  <Text style={{color: "#3153A4", fontSize:30}}>{item.date} | </Text>
                </View>
                <View style={{flex: 1}}>
                  <Text style={{color: "#3153A4", fontSize:20, flexWrap:'wrap'}}>{item.title}</Text>
                  <Text style={{color: "#3153A4", fontSize:15,}} numberOfLines={1}>{item.des}</Text>
                </View>
            </View>
          </Pressable>
        );
    };
  

    return(
        
        <View style={styles.upComingReminders}>
            <Text style={styles.text}>Upcoming Reminders</Text>
            <SafeAreaView style={{borderRadius: 20, flex: 1}}>
                <FlatList
                data={DATA}
                renderItem={renderReminder}
                keyExtractor={(item) => item.id}
                extraData={selectedId}
                />
            </SafeAreaView>
        </View>
    );
}


const styles = StyleSheet.create({
    upComingReminders:{
        flex: 0.4,
        padding: 10,
        borderRadius: 20,
        backgroundColor: "#3153A4"
    },
    text:{
        fontWeight: "bold", 
        fontSize: 20,
        color: "white"
    },
    card: {
      flex: 0.4,
      padding: 10,
      borderRadius: 20,
      backgroundColor: "#B9D7EF",
      flexDirection: 'row',
  },
})