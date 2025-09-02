import { StyleSheet } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";

const styles = StyleSheet.create(
    {
        container: {            
            backgroundColor: 'white',
            borderWidth: RFPercentage(0.3),
            width: '90%',
            padding: 8,
            alignItems: 'Produto',
            borderRadius: 20,
            marginBottom: RFPercentage(1),            
        },
        titulo: {
            fontSize: RFPercentage(2),
            color: 'darkviolet',
            fontWeight: 'bold',
            marginBottom: RFPercentage(1),
        },
        texto: {
            fontSize: RFPercentage(2),
            color: 'darkviolet',
        },
        imagem: {
            // height: RFPercertage(10);
            // width: RFPercentage(28);
            width: '80%',
            resizeMode: 'contain',
        }
});

export default styles;