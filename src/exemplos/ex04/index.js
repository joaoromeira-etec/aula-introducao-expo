import { useState } from 'react';

import { View, Text, TextInput, TouchableOpacity } from 'react-native';

import styles from './styles'

export default function Exemplo04() {
    const [texto, setTexto] = useState('');
    const [txt2, setTxt2] = useState('Valor Inicial');
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Exemplo 4</Text>

            <Text style={styles.txt}>{texto}</Text>
            <TextInput
                onChangeText={setTexto}
                placeholder="digite sua mensagem"
                keyboardType='ascii-capable'
                maxLength={7}
                style={styles.input}
            />

            <Text style={styles.txt}>{txt2}</Text>
            <TextInput
                value={txt2}
                onChangeText={setTxt2}
                placeholder="digite sua mensagem"
                keyboardType='ascii-capable'
                style={styles.input}
            />

            <TouchableOpacity
                style={styles.botao}
                onPress={() => { }}
            >

            </TouchableOpacity>
        </View>

    );
}