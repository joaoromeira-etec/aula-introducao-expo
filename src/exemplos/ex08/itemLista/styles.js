import { StyleSheet } from "react-native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

const styles = StyleSheet.create(
    {
        container: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingTop: RFValue(10),
            paddingBottom: RFValue(2),
            borderBottomWidth: RFValue(3),
            borderColor: '#1338BE',
            width: '95%',
            alignSelf: 'center',
                
        },

        txtitem: {
            fontSize: RFValue(16),
        },
}
);

export default styles;