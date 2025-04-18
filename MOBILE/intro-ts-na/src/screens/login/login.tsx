import { Text, View } from "react-native"
import { Input } from "@/src/components/input/input"
import { useState } from "react"

export const Login = () => {
    const [email,setEmail] = useState("")
    const [senha,setSenha] = useState("")

    return(
        <View>
            <Input 
            titleInput="E-mail:"
            setValueInput={setEmail}
            valueInput={email}
            />
            <Input 
            titleInput="Senha:"
            setValueInput={setSenha}
            valueInput={senha}
            />
        </View>
    )
}