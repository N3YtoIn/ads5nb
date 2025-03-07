import { Text, TouchableOpacity, View } from "react-native"
import { styles } from "./styles"
import { router } from "expo-router"


export const Home = () => {

    const handleNavigate = () => {
        router.navigate('/login-screen')
    }

    return(
        <View style={styles.container}>
            <Text style={styles.styleText}>Hello World!!</Text>
            
            <TouchableOpacity 
                style={styles.styleContainerButton}
                onPress={handleNavigate}>
                <Text style={styles.styleTextButton}>Proxima Tela</Text>
            </TouchableOpacity>
        </View>
    )
}