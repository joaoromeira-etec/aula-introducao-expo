import { StyleSheet } from "react-native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

const styles = StyleSheet.create(
    {
        container: {
            padding: 10,
            flex: 1,
            backgroundColor: 'blue',
            alignItems: 'center',
            // justifyContent: 'center',
        },
        titulo: {
            fontFamily: 'sans-serif',
            fontSize: RFPercentage(6),
            fontWeight: 'bold',
            padding: 10,
            color: 'purple',
        },
        txt: {
            fontSize: RFPercentage(2.5),
        },
        penes: {
            fontWeight: 'bold',
            padding: 10,
            fontSize: RFPercentage(5), 
            alignItems: 'center',

        },
        xota: {
            padding: 10,
            fontWeight: 'bold',

        },
}
);

export default styles;