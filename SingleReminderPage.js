import { StyleSheet, View , Text} from "react-native";


export function SingleReminderPage({route, navigation}){
    const {day} = route.params;
    console.log(route.params)
    console.log(day)
    
    return(
        <View style={styles.container1}>
            <Text>{day}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container1:{
        flex: 1,
        backgroundColor: '#B9D7EF',
        alignItems: 'center'
    }
})