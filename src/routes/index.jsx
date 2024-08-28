import { NavigationContainer } from "@react-navigation/native";

import { StatusBar } from "expo-status-bar";
import StackRouter  from "./stack.routes";

const Routes =() => {
    return(
        <NavigationContainer>
            <StatusBar style="auto"/>
            <StackRouter/>
        </NavigationContainer>
    )
}
export default Routes;