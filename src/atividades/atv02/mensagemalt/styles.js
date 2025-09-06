import { StyleSheet } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";

const styles = StyleSheet.create(
    {
        container: {            
            backgroundColor: 'white',
            borderWidth: RFPercentage(0.3),
            width: '90%',
            padding: 8,
            borderRadius: 20,
            marginBottom: RFPercentage(1),
            flexDirection: 'row',            
        },


        titulo: {
            fontSize: RFPercentage(2.5),
            color: 'darkviolet',
            fontWeight: 'bold',
            marginBottom: RFPercentage(1),
        },


        texto: {
            fontSize: RFPercentage(1.5),
            color: 'darkviolet',
            marginBottom: RFPercentage(1),
        },

        preco: {
            fontSize: RFPercentage(2),
            color: 'black',
            fontWeight: 'bold',
            marginBottom: RFPercentage(1),
        },

        imagem: {
            height: RFPercentage(10),
            width: RFPercentage(10),
            resizeMode: 'strecht',
        },

        resolucaoImagem: {
            width: '30%',
        },

        resolucaoTexto: {
            widhr: '70%',
        }
});

export default styles;