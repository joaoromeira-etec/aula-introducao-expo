import {useState} from 'react';

import { View, Text, Button, TouchableOpacity } from 'react-native';

import styles from './styles'

export default function Atividade03() {

    const [numero, setNumero] = useState(0);
    
    function handleIncrementar() {
        setNumero(numero + 1);
        //console.log(numero);
    }

    function handleSubtrair() {
        setNumero(numero - 1);
    }

    function handleZerar() {
        setNumero(0);
    }

    return(
        <View style={styles.container}>

            <Text style={styles.titulo}>Atividade 3</Text>


             <View style={styles.containerBotoes}>
             <TouchableOpacity 
                style={styles.Botao}
                onPress={() => handleIncrementar()}
            >
                <Text style={styles.txtBotao}>Aumentar! :0</Text>
            </TouchableOpacity>

            <Text style={styles.txt}>{numero}</Text>

            <TouchableOpacity 
                style={styles.Botao}
                onPress={() => handleSubtrair()}
            >
                <Text style={styles.txtBotao}>Diminuir! 0:</Text>
            </TouchableOpacity>
            </View>




            <TouchableOpacity 
                style={styles.Botao}
                onPress={() => handleZerar()}
            >
                <Text style={styles.txtBotao}>Zerar o contador</Text>
            </TouchableOpacity>
            




        </View>
    );
}

