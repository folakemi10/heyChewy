import React from 'react'
import {View, Text, StyleSheet, Image,TextInput,TouchableHighlight} from 'react-native'
import Logo from '../../assets/heychewy1.png'

const Username = () => {
    const [text, onChangeText] = React.useState(null);
    return(
    <TextInput
    style={styles.input}
    onChangeText={onChangeText}
    value={text}
    placeholder="Username"/>
    )

};

const Password = () => {
    const [text, onChangeText] = React.useState(null);
    return(
    <TextInput
    style={styles.input}
    onChangeText={onChangeText}
    value={text}
    placeholder="Password"/>
    )

};

const ConfirmPassword = () => {
    const [text, onChangeText] = React.useState(null);
    return(
    <TextInput
    style={styles.input}
    onChangeText={onChangeText}
    value={text}
    placeholder="Confirm Password"/>
    )

};

const CreateAccount = ( )=> {
    return (
        <View style={styles.header}> 
        <Image source={Logo} style={styles.logo} paddingBottom />
        <Text style={styles.message}> Thanks for joining our  {'\n'} PAW-some community!  </Text>
        <Username/>
        <Password/>
        <ConfirmPassword/>
        <TouchableHighlight
        style={styles.register}
        onPress={() => this.submitSuggestion(this.props)}
        underlayColor='#fff'>
        <Text style={[styles.registerButton]}>Register</Text>
        </TouchableHighlight>
        </View>
    );

};

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#009387'
    },

    header: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 30,
        paddingHorizontal: 10,
        paddingBottom: 50
    },

    message: {
        color: '#3153A4',
        fontWeight: 'bold',
        fontSize: 25,
        paddingTop: 30,
        paddingBottom: 20,
        textAlign: 'center'
        
    },

    input: {
        height: 40,
        width: 250,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 10,
        color:'#C4C4C4'
    },

    registerButton: {
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        color: '#fff'
    },

    logo: {
        width: 99,
        height: 90,
        paddingTop: 80,
        paddingBottom: 50,
    },

    register: {
        marginRight: 100,
        marginLeft: 100,
        marginTop: 10,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft:40,
        paddingRight: 40,
        backgroundColor: '#3153A4',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#fff',
      }
  });

  export default CreateAccount;