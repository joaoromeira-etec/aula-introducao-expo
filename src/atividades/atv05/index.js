import { View, Text, TextInput, TouchableOpacity } from 'react-native';

import styles from './styles'
import { useState } from 'react';

export default function Atividade05() {

    const [n1, setN1] = useState(0);
    const [n2, setN2] = useState(0);
    const [total, setTotal] = useState(0);

    function Soma() {
        const conta = parseInt(n1) + parseInt(n2);
        setTotal(conta.toString());
    }

    function Subtrair() {
        const conta = parseInt(n1) - parseInt(n2);
        setTotal(conta.toString());
    }

    function Multiplicar() {
        const conta = parseInt(n1) * parseInt(n2);
        setTotal(conta.toString());
    }

    function Dividir() {
        const conta = parseInt(n1) / parseInt(n2);
        setTotal(conta.toString());
    }

    function Zerar() {
        setNumero(0);
    }

    return(
    <View style={styles.container}>
            <Text style={styles.titulo}>Atividade 5</Text>
            
            <Text style={styles.txtSaida}> Calculadora Daora </Text>



            <Text style={styles.textLabel}> 1º número </Text>
            <TextInput 
                style={styles.txtEntrada}
                onChangeText={ (entrada) => setN1(entrada) }
                value={n1}
            />


            <Text style={styles.txtSaida}> + </Text>


            <Text style={styles.textLabel}> 2º número </Text>
            <TextInput 
                style={styles.txtEntrada}
                onChangeText={ (entrada) => setN2(entrada) }
                value={n2}
            />


            <Text style={[styles.txtSaida, {margin: 0}]}> = </Text>


            <Text style={styles.textLabel}> Total </Text>
            <TextInput 
                style={styles.txtEntrada}
                editable={false}
                value={total}    
            />

        <View style={styles.buttonRow}>
            <TouchableOpacity style={ styles.button } onPress={() => Soma()}>
                <Text style={styles.textButton}> + </Text>
            </TouchableOpacity>
            <TouchableOpacity style={ styles.button } onPress={() => Subtrair()}>
                <Text style={styles.textButton}> - </Text>
            </TouchableOpacity>
            <TouchableOpacity style={ styles.button } onPress={() => Multiplicar()}>
                <Text style={styles.textButton}> * </Text>
            </TouchableOpacity>
            <TouchableOpacity style={ styles.button } onPress={() => Dividir()}>
                <Text style={styles.textButton}> / </Text>
            </TouchableOpacity>
        </View>

        <TouchableOpacity style={ styles.buttonZerar } onPress={() => Dividir()}>
                <Text style={styles.textButton}> Zerar </Text>
        </TouchableOpacity>

    </View>
    );
}