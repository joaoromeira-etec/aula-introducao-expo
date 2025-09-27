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
        


        txtSaida: {
            margin: 6,
            fontSize: 22,
            fontWeight: 'bold',
            textAlign: 'center',
            color: 'darkblue',
            borderWidth: 2,
            borderRadius: 20,
            borderColor: 'darkblue',
            textAlign: 'center',
            textAlignVertical: 'center',
            width: '70%',
        },

        txtEntrada: {
            backgroundColor: 'darkblue',
            borderWidth: 4,
            textAlign: 'center',
            textAlignVertical: 'center',
            fontSize: 22,
            borderColor: 'white',
            height: RFPercentage(6),
            color: 'white',
            borderRadius: 10,
            marginTop: 10,
            marginBottom: 10,
            width: '30%',
        },

        button: {
            backgroundColor: 'cyan',
            height: 40,
            justifyContent: 'center',
            borderRadius: 10,
            marginTop: 20,
        },

        textButton: {
            fontSize: RFPercentage(3),
            color: 'black',
            textAlign: 'center',
        },

        textLabel: {
            fontSize: RFPercentage(2),
            fontWeight: 'bold',
            color: 'darkblue',
            marginTop: 10,
        },
}
);

export default styles;