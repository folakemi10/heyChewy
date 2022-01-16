import { StyleSheet } from 'react-native';



export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3153A4',
        alignItems: 'center',
        justifyContent: "space-between",
    },
    scontainer: {
        flexGrow: .5,
        justifyContent: "space-between",
        //padding: 10,
      

    },
    text: {
        top: '60',
        color: '#3153A4',
        fontSize: 36,
        position: 'absolute',
        fontWeight: 'bold',
    },
    heyChewy2: {
        //flex: 1,
        height: 200,
        width: 200,
        resizeMode: 'contain',

    },
    portrait: {
        height: 150, 
        width: 150, 
        resizeMode: 'contain',
        borderRadius: 100,
    },
    button: {
        alignItems: 'center',
        width: 300,
        height: 73,
        borderRadius: 15,
        backgroundColor: 'white',
        marginBottom: 40,
        
    },
    sbutton: {
        top: 60,
        width: 200,
        height: 200,
        justifyContent: 'center',
        padding: 1,
        borderRadius: 100,
       

    },

  });
  