import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Button,
} from 'react-native';


import Input from './src/input';



export default function App() {
  const [minNota, setMinNota] = React.useState('11.5');
  const [notaFinal, setNotaFinal] = React.useState(null);
  const [perma1, setPerma1] = React.useState('');
  const [perma2, setPerma2] =  React.useState('');
  const [parcial, setParcial] = React.useState('');

  function submit() {
        const resultado = parseFloat(parcial)*0.3 + parseFloat(perma2)*0.2 + parseFloat(perma1)*0.2 ;
        const final = minNota - resultado ; 
        const final_oficial = final / 0.3;
        setNotaFinal(final_oficial);
     
    
  }

  return (
    <React.Fragment>

      <View style={styles.container}>
        <View style={{ alignContent: 'center', justifyContent: 'center', marginTop: 20 }}>
          <Text style={{ fontSize: 24, fontWeight: 'bold', textAlign: 'center' }}>Calculadora UCSP</Text>
        </View>

        <View>
          <Input label="Aprobar con" value={minNota} onChangeText={setMinNota} />
          <Input label="Permanente 1" value={perma1} onChangeText={setPerma1} />
          <Input label="Parcial" value={parcial} onChangeText={setParcial} />
          <Input label = "Permanente 2" value = {perma2} onChangeText={setPerma2}/>
          <Button title="Calcular" onPress={submit} />
        
        </View>
        <View style={{ justifyContent: 'center', alignItems: 'center', padding: 20 }}>
          {notaFinal !== null && (
            <React.Fragment>
              {notaFinal > 0 ? (
                <Text>Necesitas sacar {notaFinal}</Text>
              ) : (
                <Text>Necesitas sacar 0</Text>
              )}
            </React.Fragment>
          )}
        </View>
      </View>

    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  row: {
    flex: 1,
    backgroundColor: '#ffffee',
    width: '100%',
    marginVertical: 10,
    flexDirection: 'row',
  },
  column: {
    flex: 1,
    height: '100%',
    backgroundColor: 'blue',
    marginHorizontal: 10,
  },
  container: {
    padding: 25,
  },
});
