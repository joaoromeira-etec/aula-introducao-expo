import { View, Text, Image } from 'react-native';

import styles from './styles'

function Mensagemalt({ titulo, children, imagem }) {
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>{titulo}</Text>
            <Text style={styles.texto}>{children}</Text>
            <Image source={imagem} style={styles.imagem}></Image>
        </View>
    );
}

export default Mensagemalt;