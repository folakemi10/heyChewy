import { StyleSheet, View , Text, SafeAreaView, FlatList, Pressable} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Days = [
    { id: "1", title: "Walk Bella"},
    { id: "2", title: "Clean litter box"},
    { id: "3", title: "Feed fish"},
  ];

export function SingleReminderPage({route, navigation}){
    const {day} = route.params;

    const renderReminder = ({ item }) => {     
        return (
        <View style={{padding:10}}>
            <View style={styles.dailyReminder}>
                <Text style={ {color: '#3153A4', flexWrap: 'wrap'} } >{item.title}</Text>
            </View>
        </View>
        );
    };

    return(
        <View style={styles.container1}>
            <View style={styles.titleBar}>
                    <Ionicons name="ios-arrow-back" size={24} color="#3153A4" onPress={() => navigation.goBack()}></Ionicons>
            </View>
            <View style={{ flexDirection: 'row'}}>
                <Text style={styles.dayText}>{day}</Text>
                <View style={styles.icon}>
                    <Ionicons name="create" size={24} color="#fff"></Ionicons>
                </View>
            </View>
            <View style={{flex: 1, backgroundColor: 'white', borderRadius: 20, padding: 10}}>
                <SafeAreaView style={{flex: 1}}>
                        <FlatList
                        data={Days}
                        renderItem={renderReminder}
                        keyExtractor={(item) => item.id}
                        />
                </SafeAreaView>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container1:{
        flex: 1,
        backgroundColor: '#B9D7EF',
        padding: 30
    },
    dayText:{
        fontSize: 40,
        fontWeight: 'bold',
        color: '#3153A4'
    },
    icon:{
        flex: 1, 
        flexDirection: 'row', 
        justifyContent: 'flex-end',
        padding: 20
    },
    dailyReminder:{
        flex: 0.4,
        padding: 10,
        borderRadius: 20,
        backgroundColor: "#B9D7EF"
    },
    titleBar: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 24,
    },
})