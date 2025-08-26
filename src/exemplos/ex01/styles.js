import { StyleSheet } from "react-native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            backgroundColor: '#ff0',
            alignItems: 'center',
            justifyContent: 'center',
        },
        titulo: {
            fontSize: RFPercentage(5),
            fontWeight: 'bold',
            color: '#777',
        },
        txt: {
            fontSize: RFValue(2.5),
        },
}
);

export default styles;