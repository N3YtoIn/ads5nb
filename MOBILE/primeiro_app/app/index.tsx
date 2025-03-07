import { Home } from "@/src/screens/home/home";
import { Stack } from "expo-router";



export default function index() {
    
    return(
        <>
        
            <Stack.Screen
                options={{
                    title: "Home",
                    
                }}
            
            />
            <Home/>
        </>

    )
}