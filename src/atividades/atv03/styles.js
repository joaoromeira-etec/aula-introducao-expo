import { StyleSheet } from "react-native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            backgroundColor: 'darkblue',
            alignItems: 'center',
            justifyContent: 'space-evenly',
        },
        titulo: {
            backgroundColor: 'white',
            fontSize: RFPercentage(4),
            fontWeight: 'bold',
            color: 'darkblue',
            borderWidth: 2,
            borderColor: 'darkblue',
            borderRadius: 50,
            padding: 8,
            textAlign: 'center',
            textAlignVertical: 'center',
            width: '80%',
            height: 80,
        },

        txt: {
            backgroundColor: 'white',
            fontSize: RFPercentage(3),
            color: 'darkblue',
            fontWeight: 'bold',
            borderWidth: 2,
            borderColor: 'white',
            borderRadius: 10,
            padding: 8,
            textAlign: 'center',
            textAlignVertical: 'center',
            width: '50%',
            height: 60,
            justifyContent: 'space-evenly',
        },

        txtBotao: {
            backgroundColor: 'white',
            color: 'darkblue',
            fontSize: RFPercentage(2),
            fontWeight: 'bold',
            borderWidth: 2,
            borderColor: 'darkblue',
            borderRadius: 60,
            padding: 8,
            textAlign: 'center',
            textAlignVertical: 'center',
            width: '25%',
            height: 60,
            

        },
        containerBotoes: {
            flexDirection: 'row',
            alignItems: 'center',
        },
}
);

export default styles;