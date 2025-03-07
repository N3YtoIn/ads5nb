import axios from 'axios'
import { useEffect, useState } from 'react'
import { ActivityIndicator, Text, View } from 'react-native'


export default function Home () {
    const [dataApi, setDataApi] = useState('')
    const [loading, setLoading] = useState(false)

    const getApi = async () => {
        setLoading(true)
        setTimeout(() => {     
            axios.get("http://localhost:3000/teste").then((resp) => {
                setDataApi(resp.data)
            }).catch((err) => console.log('err', err)).finally(() => {
                setLoading(false)
            })
                
     }, 1000)
    }

    useEffect(() => {
        getApi()
    }, [])

    return (
        <View>
            {
                loading ? <ActivityIndicator size={30}/>: <Text>{dataApi}</Text>
            }
        </View>
    )
}