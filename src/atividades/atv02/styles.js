import { StyleSheet } from "react-native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

const styles = StyleSheet.create(
    {
        container: {
            backgroundColor: '#fff',
            padding: 10,
            flex: 1,
            alignItems: 'center',
            borderRadius: 20,
        },
        titulo: {
            fontSize: RFPercentage(5),
            color: 'purple',
            fontWeight: "bold",
            borderWidth: 2,
            borderColor: 'purple',
            marginTop: 10,
            marginBottom: 10,
            padding: 8,
            width: '100%',
            height: 80,
            textAlign: 'center',
            textAlignVertical: 'center',
            borderRadius: 20,
        },
        imagem: {
            
            width: '80%',
            resizeMode: 'stretch',
        }
}
);

export default styles;