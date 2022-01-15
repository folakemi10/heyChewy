import { StyleSheet } from 'react-native';



export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3153A4',
        alignItems: 'center',
        justifyContent: "space-between",
    },
    scontainer: {
        flexGrow: 1,
        justifyContent: "space-between",
        padding: 20,
      

    },
    text: {
        color: '#3153A4',
        fontSize: 50,
    },
    heyChewy2: {
        flex: 1,
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
        height: 80,
        borderRadius: 20,
        backgroundColor: 'white',
        
    },
    sbutton: {
        width: 200,
        height: 200,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 1,
        borderRadius: 100,
       

    },
    sidescroll: {
        flex: 1,
        borderWidth: 5,
        backgroundColor: "white",
        alignItems: 'center',
        top: 0, 
    }

  });
  