import { Button, StyleSheet } from "react-native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

const styles = StyleSheet.create(
    {
        container: {
            width: '95%',
            borderWidth: RFValue(1),
            marginTop: RFValue(10),
            borderColor: '#ccc',
            borderRadius: RFValue(8),
        },

        input: {
            height: RFValue(50),
            fontSize: RFValue(16),
        },

        button: {
            backgroundColor: '#007BFF',
            padding: RFValue(16),
        },

        buttonText: {
            color: 'white',
            fontSize: RFValue(20),
            textAlign: 'center',
            fontWeight: 'bold',
        },
});

export default styles;