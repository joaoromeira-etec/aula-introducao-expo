import { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


import styles from './styles'

export default function ItemAdc({ addItems }) {

    const [text, setText] = useState('');

    return(
       <View style={styles.container}>

        <TextInput
            placeholder='Adicionar item'
            style={styles.input}
            onChangeText={txt => setText(txt)}
            value={text}
        />

        <TouchableOpacity style={styles.button} onPress={() => addItems(text)}>
            <Text style={styles.buttonText}>
                <MaterialCommunityIcons 
                name="plus" 
                size={26} 
                color="white" 
                />
                Adicionar Item
            </Text>
        </TouchableOpacity>
        
       </View>
    );
}