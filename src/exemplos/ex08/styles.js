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
        cabecalho: {
            backgroundColor: '#1338BE',
            width: '95%',
            padding: RFPercentage(2),
            alignItems: 'center',
            color: 'white',
            fontSize: RFValue(20),
            textAlign: 'center',
            fontWeight: 'bold',
            borderRadius: 0,
        },
        lista: {
            marginTop: RFValue(4),
            width: '100%',
        }
}
);

export default styles;