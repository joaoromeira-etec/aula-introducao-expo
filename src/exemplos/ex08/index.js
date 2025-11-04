import { useState } from 'react';
import { View, Text, FlatList, Alert, Platform } from 'react-native';
import uuid from 'react-native-uuid';


import ItemLista from './itemLista';
import ItemAdc from './ItemAdc';


import styles from './styles'


export default function Exemplo08() {

    const [items, setItems] = useState([

        { id: uuid.v4(), text: 'Leite integral' },
        { id: uuid.v4(), text: 'Pão de forma' },
        { id: uuid.v4(), text: 'Nescau' }, 
        { id: uuid.v4(), text: 'Manteiga' }, 
    ]); // [] array ou lista de itens.


    function deletarItem(id) {
        setItems(prevItems => {
            return prevItems.filter( item => item.id !== id );
        });
    } //function deletarItem


    function adicionarItem(text) {
        if (text === '') {
            Platform === 'web' 
                ? alert('O valor do item não pode ser vazio!')
                : Alert.alert('Erro', 'O valor do item não pode ser vazio!', [{ text: 'OK' }]);
            
        } else {
            setItems( prevItems => {
                return [ { id: uuid.v4(),text}, ...prevItems ];
            });
        }
    } //function adicionarItem


    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Exemplo 8</Text>
            <Text style={styles.cabecalho}>Lista de compras</Text>
            <ItemAdc addItems={adicionarItem}/>
            <FlatList

            data={items}
            renderItem={
                ( {item }) => 
                    <ItemLista id={item.id} deleteItem={deletarItem} >
                        {item.text}
                   </ItemLista>}

            style={styles.lista}
            />
        </View>
    );
}