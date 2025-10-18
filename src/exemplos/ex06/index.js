import { View, Text, TextInput, TouchableOpacity } from 'react-native';

import styles from './styles'
import { useState } from 'react';

export default function Exemplo06() {

    const [massa, setMassa] = useState(0);
    const [altura, setAltura] = useState(0);
    const [resultado, setResultado] = useState(0);

    function CalcularImc() {
        const valor = massa / (altura * altura);
        setResultado(valor);
    }
    return(
        <View style={styles.container}>

            <Text style={styles.titulo}>Exemplo 6</Text>
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
            
            <TouchableOpacity style={styles.button} onPress={() => CalcularImc()}>
                <Text style={styles.buttonText}> Calcular </Text>
            </TouchableOpacity>
            
            <Text style={styles.resultados}>{resultado.toFixed(2)}</Text>

        </View>
    );
}