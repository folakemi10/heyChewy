import { StyleSheet, Text, View, Pressable, TouchableOpacity, FlatList, SafeAreaView, StatusBar } from "react-native";
import React, { useState } from "react";
const DATA = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      title: "First Item",
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      title: "Second Item",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      title: "Third Item",
    },
  ];
  
const Item = ({ item, onPress, backgroundColor, textColor }) => (
    <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
      <Text style={[styles.title, textColor]}>{item.title}</Text>
    </TouchableOpacity>
  );

export function UpComingReminders(){
    const [selectedId, setSelectedId] = useState(null);

    const renderItem = ({ item }) => {
        
        return (
        <Item
            item={item}
            onPress={() => setSelectedId(item.id)}
            backgroundColor={{ backgroundColor: "#3153A4" }}
            textColor={{ color: 'white' }}
        />
        );
    };
    

    return(
        
        <View style={styles.upComingReminders}>
            <Text style={styles.text}>Upcoming Reminders</Text>
            <SafeAreaView>
                <FlatList
                data={DATA}
                renderItem={renderItem}
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
        backgroundColor: "#B9D7EF"
    },
    text:{
        fontWeight: "bold",
        fontSize: 20,
        color: "#3153A4"
    }
})