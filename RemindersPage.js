import { StyleSheet, View, Pressable, Text } from "react-native";
import { UpComingReminders } from "./RemindersPageComponents/UpComingReminders";
import { DailyReminders } from "./RemindersPageComponents/DailyReminders";
import { useNavigation } from "@react-navigation/native";


export function RemindersPage(){
    const navigation = useNavigation();
    return(
        <View style={styles.container}>
            <View style={{flexDirection: 'row'}}>
                <Pressable style={styles.button} onPress={() => navigation.goBack()}>
                    <Text style={styles.text}>Back</Text>
                </Pressable>
            </View>
            <UpComingReminders/>
            <DailyReminders/>
        </View>
    );
}


const styles = StyleSheet.create({
    button: {
        paddingVertical: 5,
        paddingHorizontal: 20,
        borderRadius: 20,
        backgroundColor: '#3153A4',
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#B9D7EF',
    },
    container:{
        flex: 1,
        padding: 30
    },
})