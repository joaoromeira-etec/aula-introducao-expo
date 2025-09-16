import { StyleSheet } from "react-native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            backgroundColor: 'deepskyblue',
            alignItems: 'center',
            justifyContent: 'space-evenly',
        },

        titulo: {
            fontSize: RFPercentage(5),
            fontWeight: 'bold',
            color: 'darkblue',
        },

        txt: {
            fontSize: RFPercentage(2.5),
            fontWeight: 'bold',
        },

        Botao: {
            backgroundColor: 'darkblue',
            width: '60%',
            borderRadius: RFPercentage(1),
            padding: RFPercentage(1),
            alignItems: 'center',
        },

        txtBotao: {
            color: 'white',
            fontSize: RFPercentage(2),

        },
}
);

export default styles;