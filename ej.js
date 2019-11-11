import React from 'react';
import { StyleSheet, Text, View, Button, } from 'react-native';

import Incrementor from './src/incrementor';

const b = 2; // no cambia
let a = 120; //cambia
const incrementBy2 = (number) => number + 2; //recibe parametro number y despues de la flecha es lo que retorna
/*function incrementBy2(number) //lo mismo de arriba
{
  return number + 2;
}*/

export default function App() {
  return (

    <View style={{ 
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    }}>
  
    <Incrementor
      number = {3}
      color = "red"
     // name = "World"
     //   name = {'number'}
     //name = "World"
     //number = {3}
    />
      
    </View>
  );
}
/*
const styles = StyleSheet.create({

   box1: {
    flex: 1,
    margin: 20,
    backgroundColor: 'brown',
    margin: 10,
    //paddingTop: 70,
  },
  box2: {
    flex: 1,
    margin: 20,
    backgroundColor: 'red',
    margin: 10,
   // paddingTop: 70,
  },
  box3: {
    flex: 1,
    margin: 20,
    backgroundColor: 'orange',
    margin: 10,
   // paddingTop: 70,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});*/
/*
state 
hook 
  const [number, setNumber] = React.useState(props.number); 
  onPress = {() => setNumber(number + 1)}
*/
