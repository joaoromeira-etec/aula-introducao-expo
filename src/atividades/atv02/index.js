import { View, Text, Image } from 'react-native';
import styles from './styles'

//Imagens.
import espadão from '../../../assets/Espadão.png'
import espadalonga from '../../../assets/espadalonga.png'

import Mensagemalt from './mensagemalt';

function Atividade02() {
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Atividade 2!</Text>
                
                <Mensagemalt
                    imagem={espadão}
                    titulo={'Espada Ignição-Serpe'} 
                    texto={'Espada Grande motorizada para caça de Serpes.'}
                    preco={'R$ 490,00'}>
                </Mensagemalt>


            <Mensagemalt  titulo={'Cortador Infernal'}></Mensagemalt>
            <Mensagemalt titulo={'Produto 3: '}>O tempo acabou!</Mensagemalt>
            <Mensagemalt titulo={'Produto 4: '}></Mensagemalt>

        </View>
    );
}

export default Atividade02;