import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#000000',
        gap: 40,
    },

    buttonContent:{
        height: 60,
        width: '70%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 25,
        borderColor: 'white',
        borderWidth: 2,
        borderStyle: "solid"
    },

    textContainer:{
        color:'white',
        fontWeight: "bold"
    },
})