import { View, Text, Image } from 'react-native';
import styles from './styles'

import espadão from '../../../assets/Espadão.png'

import Mensagemalt from './mensagemalt';

function Atividade02() {
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Atividade 2!</Text>


            <Mensagemalt titulo={'Produto 1:'} imagem={espadão}>O produto 1 é</Mensagemalt>
            <Mensagemalt titulo={'Produto 2: '}>Acesso permitido</Mensagemalt>
            <Mensagemalt titulo={'Produto 3: '}>O tempo acabou!</Mensagemalt>
            <Mensagemalt titulo={'Produto 4: '}></Mensagemalt>

        </View>
    );
}

export default Atividade02;