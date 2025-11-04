import { useState } from 'react';
import { TouchableOpacity, Text } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'


import styles from './styles'

export default function ItemLista({children, id, deleteItem}) {
    return(
        <TouchableOpacity style={styles.container} >
            <Text style={styles.txtitem}>{children}</Text>
            <MaterialIcons 
            name="delete-outline" 
            size={26} 
            color="purple" 
            onPress={() => deleteItem(id)}/>
        </TouchableOpacity>
    );
}