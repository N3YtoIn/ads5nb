import axios from "axios";
import { useEffect, useState } from "react";
import { Image, Text, TouchableOpacity, View } from 'react-native'


export default function Home () {
    const [valueApi, setValueApi] = useState([])
    const [match, setMatch] = useState([])

    const requestApi = async () => {
        return await axios.get("http://localhost:3000/dogs/getAllDogs").then((resp) => {
            setValueApi(resp.data)
        })
    }

    useEffect(() => {
        requestApi()
    }, [])

    const handlePressNo = () => {
        setValueApi((prevState) => prevState.slice(1))
    } 

    const handlePressYes = () => {
        setMatch((prevState) => [...prevState, valueApi[0]])
        setValueApi((prevState) => prevState.slice(1))
        
    }   
    
    return (
        <View>
            <Image
                source={valueApi[0]?.image[0]}
                style={{
                    height: 500,
                    width: '80%',
                }}
                resizeMode="contain"
            />
            <View style={{flexDirection: 'row'}}>
                <TouchableOpacity style={{
                    backgroundColor: 'red',
                    height: 50,
                    width: 50
                }}
                onPress={handlePressNo}
                />

                <TouchableOpacity style={{
                    backgroundColor: 'green',
                    height: 50,
                    width: 50
                }}
                onPress={handlePressYes}
                />
            </View>
        </View>
    )
}