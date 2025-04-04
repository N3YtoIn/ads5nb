import { Text, TouchableOpacity, View } from "react-native"
import { styles } from "./styles"
import { useDispatch, useSelector } from "react-redux"
import { increment, decrement } from "@/src/store/slices/counter-slice"
import { RootState } from "@/src/store"


export const CounterScreen = () => {
    const count = useSelector((state: RootState) => state?.counter?.value)
    const dispatch = useDispatch()


    return(
        <View style={styles.container}>
            <TouchableOpacity 
            style={[styles.buttonContent, {backgroundColor: 'green'}]}
            onPress={() => dispatch(increment())}
            >
                <Text style={[styles.textContainer, {fontSize: 40} ]}>+</Text>
            </TouchableOpacity>

            <Text style={[styles.textContainer, {fontSize: 35}]}>{count}</Text>

            <TouchableOpacity style={[ styles.buttonContent, {backgroundColor:'red'}]}
            onPress={() => dispatch(decrement())}
            >
                <Text style={[styles.textContainer, {fontSize: 40} ]}>-</Text>
            </TouchableOpacity>
        </View>
    )

}