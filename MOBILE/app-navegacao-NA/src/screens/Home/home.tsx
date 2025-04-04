import ChavePixScreen from "@/app/area-pix/chave-pix"
import { router } from "expo-router"
import { Button, Text, View } from "react-native"


export const Home =  () => {
    return(
        <View>
            <Button
                title="Go To Next Screen"
                onPress={() => router.navigate('/area-pix/chave-pix')}
            />
        </View>   
    )
}