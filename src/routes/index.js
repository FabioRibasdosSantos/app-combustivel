import { createNativeStackNavigator } from '@react-navigation/native-stack'
const Stack = createNativeStackNavigator();



import Welcome from '../Pages/Welcome'
import Results from '../Pages/Results';


const stack = createNativeStackNavigator();

export default function Routes(){
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Bem vindo ao seu aplicativo de Abastecimento!"
                component={Welcome}
                options={{headerShow: false}}
                
            />

            <Stack.Screen
                name="Calculador"
                component={Results}
                options={{headerShow: false}}
            />
        </Stack.Navigator>
    )
}