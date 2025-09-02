import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';

// Exemplos
import Exemplo01 from './src/exemplos/ex01';
import Exemplo02 from './src/exemplos/ex02';

// Atividades
import Atividade01 from './src/atividades/atv01';
import Atividade02 from './src/atividades/atv02';




export default function App() {
  return (
    <View style={styles.container}>
      <Atividade02 />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff0ff',
    // alignItems: 'center',
    // justifyContent: 'center',
    padding: 15,
    paddingTop: Constants.statusBarHeight,
  },
});
