import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

const obj = {
    a: 1,
    b: 2,
}

const copy = {...obj} ///copia todas las props
function Input(props)
{
    state = {
        text: ''
      };
    return (
        <View style = {{ margin: 12,}}>   
            
            <Text>{props.label}</Text>
            <TextInput {...props} 
            style={styles.box}
            />
          
        </View>
        
    );
}



const styles = StyleSheet.create({
    box: {
        
        borderColor: 'black', 
        borderWidth: 1,
        height: 30,
      
        //width: 300,
    },
});

export default Input;
