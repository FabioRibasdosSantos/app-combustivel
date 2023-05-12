import React from 'react';
import {
    View, 
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity
} from 'react-native';

export default function Calc() {
    return (
        <View style={styles.container}>
            <View style={styles.containerHeader} >
                <Text style={styles.message}>Bem-vindo</Text>
            </View>

            <View style={styles.containerForm}>
                <Text style={styles.title}>Alcool</Text>
                <TextInput 
                placeholder='Digite o valor...'
                style={styles.input}
                />

                <Text style={styles.title}>Gasolina</Text>
                <TextInput 
                placeholder='Digite o valor...'
                style={styles.input}
                />

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>calcular</Text>
                </TouchableOpacity>

            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#002659'
    },
    containerHeader:{
        marginTop: '14%',
        marginBottom: '8%',
        paddingStart: '5%'
    },
    message:{
        fontSize: 28,
        fontWeight: 'bold',
        color: '#fff',
        textAlign:'center'
    },
    containerForm:{
        backgroundColor: '#fff',
        flex: 1,
        borderTopLeftRadius: 25,
        borderBottomRightRadius: 25,
        paddingStart: '5%',
        paddingEnd: '5%'
    },
    title:{
        fontSize: 20,
        marginTop: 28
    },
    input:{
        borderBottomWidth: 1,
        height: 40,
        marginBottom: 12,
        fontSize: 16
    },
    button:{
        backgroundColor: '#002659',
        width: '100%',
        borderRadius: 4,
        paddingVertical: 8,
        marginTop: 14,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText:{
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold'
    },
    buttonRegister:{
        marginTop: 14,
        alignSelf: 'center'
    },
    registerText:{
        color: '#a1a1a1'
    }

})