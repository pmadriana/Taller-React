import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

function Hello(){
  return (
    <Text> Hello </Text>
    );
}

export default function App() {
  return (
    <View style={{
      flex: 1,
      backgroundColor: 'white',
      flexDirection: 'column',
    }}>
      <View style={{
        flex: 1,
        backgroundColor: 'white',
       flexDirection: 'row',
      }}>
       <View style={styles.box1}/>
        <View style={styles.box1}/>
        <View style={styles.box1}/>
        <View style={styles.box1}/>
      </View>
      <View style={{
        flex: 1,
        backgroundColor: 'white',
       flexDirection: 'row',
      }}>
       <View style={styles.box2}/>
        <View style={styles.box2}/>
        <View style={styles.box2}/>
        
      </View>
      <View style={{
        flex: 1,
        backgroundColor: 'white',
       flexDirection: 'row',
      }}>
       <View style={styles.box3}/>
        <View style={styles.box3}/>
        
      </View>
    
      
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    flex: 1,
    margin: 20,
    backgroundColor: 'orange',
    margin: 10,
  // paddingTop: 70,
  },
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
});
