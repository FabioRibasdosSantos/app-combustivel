import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

export default function Calc() {
  const [etanol, setEtanol] = useState('');
  const [gasolina, setGasolina] = useState('');
  const [litros, setLitros] = useState('');
  const [resultado, setResultado] = useState('');

  const calcularCombustivel = () => {
    const valorEtanol = parseFloat(etanol.replace(',', '.'));
    const valorGasolina = parseFloat(gasolina.replace(',', '.'));
    const qtdeLitros = parseFloat(litros.replace(',', '.'));

    if (valorEtanol / valorGasolina <= 0.7) {
      const totalEtanol = qtdeLitros * valorEtanol;
      setResultado(`Abasteça com Etanol! Valor total: R$ ${totalEtanol.toFixed(2)}`);
    } else {
      const totalGasolina = qtdeLitros * valorGasolina;
      setResultado(`Abasteça com Gasolina! Valor total: R$ ${totalGasolina.toFixed(2)}`);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerHeader}>
        <Text style={styles.message}>Qual devo abastecer?</Text>
      </View>

      <View style={styles.containerForm}>
        <Text style={styles.title}>Etanol</Text>
        <TextInput
          placeholder="Digite o valor por litro"
          style={styles.input}
          value={etanol}
          onChangeText={(valor) => setEtanol(valor)}
          keyboardType="decimal-pad"
        />

        <Text style={styles.title}>Gasolina</Text>
        <TextInput
          placeholder="Digite o valor por litro"
          style={styles.input}
          value={gasolina}
          onChangeText={(valor) => setGasolina(valor)}
          keyboardType="decimal-pad"
        />

        <Text style={styles.title}>Litros a serem abastecidos</Text>
        <TextInput
          placeholder="Digite a quantidade de litros"
          style={styles.input}
          value={litros}
          onChangeText={(valor) => setLitros(valor)}
          keyboardType="decimal-pad"
        />

        <TouchableOpacity style={styles.button} onPress={calcularCombustivel}>
          <Text style={styles.buttonText}>calcular</Text>
        </TouchableOpacity>

        <Text style={styles.resultado}>{resultado}</Text>
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
    mensagem: {
        marginTop: 20,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center'
    }
})
