import {useState} from 'react';

import { View, Text, Button, TouchableOpacity } from 'react-native';

import styles from './styles'

export default function Exemplo03() {

    const [numero, setNumero] = useState(0);
    
    function handleIncrementar() {
        setNumero(numero + 1);
        //console.log(numero);
    }

    
    
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Exemplo 3</Text>
            <Button 
                onPress={() => {alert('Macaco')}}
                title='Macaco'
                color="darkblue"
                accessibilityLabel='Botão de Alerta'
            />

            <Text style={styles.txt}>{numero}</Text>

            <TouchableOpacity 
                style={styles.Botao}
                onPress={() => handleIncrementar()}
            >

                <Text style={styles.txtBotao}>INCREMENTAR NÚMERO</Text>

            </TouchableOpacity>
        </View>
    );
}