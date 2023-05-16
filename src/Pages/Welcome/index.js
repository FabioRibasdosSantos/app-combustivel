
import React  from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Video from 'react-native-video'; 
import video from "../../assets/liquido.mp4"


import {useNavigation} from '@react-navigation/native';
import * as Animatable from 'react-native-animatable'

export default function Welcome(){

    const navigation = useNavigation();
 
            

  return (
        <View style={styles.container}>
            
            <View style={styles.containerLogo}>
                <Video
                    
                    source={video}
                    paused={false}
                    style= {styles.backgroundVideo}
                    repeat={true}
                    
                />
            </View>      

            <Animatable.View delay={600} animation="fadeInUp" style={styles.containerForm}>
                <Text style={styles.title}>Bem vindo ao seu aplicativo de Abastecimento!</Text>

                <TouchableOpacity 
                style={styles.button}
                onPress={ () => navigation.navigate('Resuts')}
                >
                    <Text style={styles.buttonText}>Vamos calcular</Text>
                </TouchableOpacity>
            </Animatable.View>
        </View>
        
  );
}


const styles = StyleSheet.create({
    container:{
        flex: 1,
        
    },
    containerLogo:{
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        height: 250,
    },
    message:{
        fontSize: 28,
        fontWeight: 'bold',
        color: '#fff',
        textAlign:'center'
    },
    containerForm:{
        backgroundColor: '#fff',
        
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
    mensagem: {
        marginTop: 20,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center'
    }
})

