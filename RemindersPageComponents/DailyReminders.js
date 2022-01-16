import { StyleSheet, Text, View, Pressable, FlatList, SafeAreaView, StatusBar } from "react-native";
import React, { useState } from "react";
import { SingleReminderPage } from "../SingleReminderPage";
import { useNavigation } from "@react-navigation/native";

  const Days = [
    { id: "1", title: "monday"},
    { id: "2", title: "tuesday"},
    { id: "3", title: "wednesday"},
    { id: "4", title: "thursday"},
    { id: "5", title: "friday"},
    { id: "6", title: "saturday"},
    { id: "7", title: "sunday"}
  ];

export function DailyReminders(){
    const [selectedId, setSelectedId] = useState(null);
    const navigation = useNavigation();
    
    const renderDay = ({ item }) => {
        
        return (
        <Pressable style={{padding:10}} onPress={() => navigation.navigate('SingleReminderPage', {dayID: item.id, day: item.title})}>
            <View style={styles.dailyReminders}>
                <Text style={styles.text}>{item.title}</Text>
            </View>
        </Pressable>
        );
    };

    return(
        
        <View style={styles.container2}>
            <Text style={styles.text}>Weekly Reminders</Text>
            <SafeAreaView>
                    <FlatList
                    data={Days}
                    renderItem={renderDay}
                    keyExtractor={(item) => item.id}
                    extraData={selectedId}
                    />
            </SafeAreaView>
        </View>
        
    );
}


const styles = StyleSheet.create({
    container2:{
        flex: 1,
        padding: 5
    },
    dailyReminders:{
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