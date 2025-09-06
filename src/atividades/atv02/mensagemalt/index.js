import { View, Text, Image } from 'react-native';

import styles from './styles'

function Mensagemalt({ titulo, texto, preco, imagem }) {
    return(
        <View style={styles.container}>

            <View style={styles.resolucaoImagem}>
            <Image source={imagem} style={styles.imagem}></Image>
            </View>

            
        
            <View style={styles.resolucaoTexto}>
            <Text style={styles.titulo}>{titulo}</Text>
            <Text style={styles.texto}>{texto}</Text>
            <Text style={styles.preco}>{preco}</Text>
            </View>
        

           


        </View>
    );
}

export default Mensagemalt;