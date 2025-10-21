import { View, Text, TextInput, TouchableOpacity } from 'react-native';

import styles from './styles'
import { useState } from 'react';

export default function Atividade06() {

    const [massa, setMassa] = useState(0);
    const [altura, setAltura] = useState(0);
    const [resultado, setResultado] = useState(0);
    const [classificacao, setClassificacao] = useState('');

    function CalcularImc() {
        const valor = massa / (altura * altura);
        setResultado(valor);

        if (valor < 18.5) {
            setClassificacao('Abaixo do peso');
        } else if (valor >= 18.5 && valor < 24.9) {
            setClassificacao('Peso normal');
        } else if (valor >= 25 && valor < 29.9) {
            setClassificacao('Sobrepeso');
        } else if (valor >= 30 && valor < 34.9) {
            setClassificacao('Obesidade grau I');
        } else if (valor >= 35 && valor < 39.9) {
            setClassificacao('Obesidade grau II');
        } else {
            setClassificacao('Obesidade grau III');
        }
    }
    return(
        <View style={styles.container}>

            <Text style={styles.titulo}>Atividade 6</Text>
            <Text style={styles.txt}></Text>

            <View style={styles.entradaImc}>

                <TextInput
                placeholder="Altura" 
                placeholderTextColor="lightblue"
                keyboardType='numeric'
                style={styles.input}
                onChangeText={(entrada) => setAltura(entrada)}
                />               
                <TextInput
                placeholder="Peso" 
                placeholderTextColor="lightblue"
                keyboardType='numeric'
                style={styles.input}
                onChangeText={(entrada) => setMassa(entrada)}
                />

            </View>

            <View style={styles.containerResultados}>
                <Text style={styles.resultados}>IMC: {resultado.toFixed(2)}</Text>
                <Text style={styles.resultados}>Classificação: {classificacao}</Text>
            </View>
            
            <TouchableOpacity style={styles.button} onPress={() => CalcularImc()}>
                <Text style={styles.buttonText}> Calcular </Text>
            </TouchableOpacity>
            
            <Text style={styles.resultados}> </Text>

        </View>
    )
}