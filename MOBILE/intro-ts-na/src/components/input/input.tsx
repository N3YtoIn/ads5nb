import { useState } from "react"
import { Text, View, TextInput, StyleSheet } from "react-native"

interface IProps {
    titleInput: string,
    setValueInput: (value: string) => void
    valueInput: string
}

export const Input = ({titleInput, setValueInput, valueInput}: IProps) => {
    return(

        <View style={styles.container}>
            <Text>{titleInput}</Text>
            <TextInput
            style={styles.styleInput}
            onChangeText={setValueInput}
            value={valueInput}
            />
        </View>
    )
}

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        alignItems: 'flex-start',
        justifyContent: 'center'
    },

    styleInput: {
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 10,
        padding: 16
    }
})