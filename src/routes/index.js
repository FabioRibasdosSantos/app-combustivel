
import SingIn from '../pages/Calc'

export default function Routes(){
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Calc"
                component={Calc}
                options={{headerShow: false}}
            />


        </Stack.Navigator>
    )
}