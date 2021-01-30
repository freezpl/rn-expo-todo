import React, { useState } from 'react'
import {View, StyleSheet, TextInput, Button, Alert} from 'react-native'

export const AddTodo = ({onSubmit}) => {

    const [value, setValue] = useState('');

    const pressHandler = () => {
        if (value.trim()) {
            setValue('');
            onSubmit(value);
        } else {
            Alert.alert('Empty string!');
        }
    }

    return(
        <View style={styles.block}>
            <TextInput style={styles.input} 
            onChangeText={setValue} 
            placeholder = 'What you do?' 
            value={value}
            />
            <Button title="Add" onPress={pressHandler}/>
        </View>
    )
}

const styles = StyleSheet.create({
 block:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15
 },
 input:{
    width: '70%',
    borderStyle: 'solid',
    borderColor: '#000',
    borderBottomWidth: 1,
    padding: 8
 }
});