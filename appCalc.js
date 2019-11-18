import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, } from 'react-native';

import Incrementor from './src/incrementor';
import Input from './src/input';
import Calcular from './src/calcular';

/*orden imports: 
import os,
import local, 
from local import
*/

export default function App() {
  const [minGrade, setMinGrade] = React.useState('11.5');
  const [grade1, setGrade] = React.useState('');
  return (

    <View style={{ 
      flex: 1,
      alignItems: 'center',
     justifyContent: 'center',

  
    }}>
  
    <Text  style={styles.calc}> {'Calculadora UCSP'} </Text>
    <Input
       label= 'Aprobar con'
      label2 = 'Permanente 1'
      label3= 'Parcial'
      label4= 'Permanente 2'
       value = {minGrade}
       onChangeText={setMinGrade} ///esto para escribir abajo
       keyboardType = 'number-pad'
     // esto va desps del /> <Text>{minGrade}</Text>
    />
     
     <Text>{minGrade}</Text>
     <Calcular

      color = "red"
     // name = "World"
     //   name = {'number'}
     //name = "World"
     //number = {3}
    />
    </View>
  );
}

const styles = StyleSheet.create({
  calc: {
      margin: 20,
      fontSize : 20,
      fontStyle: "italic", 
  },
});
