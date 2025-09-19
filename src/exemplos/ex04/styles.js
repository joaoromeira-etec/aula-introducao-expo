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
            width: '80%',
            height: 80,
        },
        txt: {
            fontSize: RFPercentage(2.5),
            color: '#1338BE',
        },
        input: {
            borderWidth: RFPercentage(0.2),
            borderColor: '#1338BE',
            borderRadius: RFPercentage(1.5),
            width: '80%',
            padding: RFPercentage(1.5),
            fontSize: RFPercentage(2),
            textAlign: 'center',
        },
        botao: {
            margin: RFPercentage(5),
            backgroundColor: '#1338BE',
            width: '75%',
            alignItems: 'center',
            borderRadius: 20,

        },
        txtbotao: {
            color: 'white',
            fontSize: RFPercentage(2),
            margin: RFPercentage(2),
            fontWeight: 'bold',
        }
}
);

export default styles;