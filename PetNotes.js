import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, ScrollView, TouchableOpacity, TextInput } from "react-native";

export function PetNotes() {
  const [note,setNote] = useState("None");

  return (

    <SafeAreaView style={styles.container}>
    <View style={styles.textAreaContainer} >
      <Text style={[styles.text, { fontWeight: "200", fontSize: 36, color: 'blue'}]}>Add a Note</Text>
      <TextInput
        style={styles.textArea}
        underlineColorAndroid="transparent"
        placeholder=""
        placeholderTextColor="grey"
        numberOfLines={10}
        multiline={true}
        onChangeText={(val) => setNote(val)}
      />
      </View>
      <View style={styles.infoContainer}>
        <Text style={[styles.text, { fontWeight: "200", fontSize: 35, color: 'blue'}]}>Hazel's Notes</Text>
        <Text style={[styles.text, { fontWeight: "200", fontSize: 25, color: 'blue'}]}>{note}</Text>
      </View>
      </SafeAreaView>
      
      
  )
}

const styles = StyleSheet.create({
  textAreaContainer: {
    borderColor: 'grey',
    borderWidth: 50,
    padding: 5
  },
  textArea: {
    height: 150,
    justifyContent: "flex-start",
    textAlignVertical: 'top'
  },
  text: {
      color: "#fff", 
      fontFamily: 'WorkSans-Medium'

  },
  infoContainer: {
      alignSelf: "center",
      alignItems: "center",
      marginTop: 16
  },
}
)