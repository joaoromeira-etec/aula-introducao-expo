import { StyleSheet } from "react-native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

const styles = StyleSheet.create(
    {
    container: {
            flex: 1,
            backgroundColor: 'white',
            alignItems: 'center',
                
        },

        titulo: {
            fontSize: RFPercentage(5),
            fontWeight: 'bold',
            color: 'darkblue',
            margin: RFPercentage(5),
            borderWidth: 2,
            borderRadius: 20,
            borderColor: 'darkblue',
            textAlign: 'center',
            textAlignVertical: 'center',
            width: '90%',
            height: 80,
        },

        txt: {
            fontSize: RFPercentage(2.5),
        },

        entradaImc: {
            flex: 1,
            flexDirection: 'row',
        },

        input: {
            height: 50,
            fontWeight: 'bold',
            textAlignVertical: 'center',
            textAlign: 'center',
            width: '150',
            fontSize: RFPercentage(2),
            marginTop: RFPercentage(2),
            color: 'darkblue',
            borderWidth: 2,
            borderColor: 'darkblue',
        },

        button: {
            backgroundColor: '#1338BE',
            height: RFPercentage(6),
            justifyContent: 'center',
            width: '200',
            alignItems: 'center',
            borderRadius: 10,
            paddingVertical: 10,
            paddingHorizontal: 20,
            marginTop: RFPercentage(5),
        },

        buttonText: {
            color: 'white',
            fontSize: RFPercentage(3),
            fontWeight: 'bold',

        },

        containerResultados: {
            marginTop: RFPercentage(5),
            alignItems: 'center',
            textAlignVertical: 'center',
            width: '90%',
            borderStyle: 'solid',
            borderWidth: 2,
            borderRadius: 20,
            borderColor: 'darkblue',
        },

        resultados: {
            margin: RFPercentage(5),
            fontSize: RFPercentage(2.5),
            fontWeight: 'bold',
            color: 'purple',
        },


        
}
);

export default styles;