import React from 'react'
import {View, Text, StyleSheet, Button} from 'react-native'

export const TodoScreen = ({todo, goBack}) => {
    return (
        <View style={styles.navbar}>
            <Text style={styles.text}>{todo.title}</Text>
            <View style={styles.buttons}>
                <View style={styles.button}>
                    <Button title="Back" onPress={goBack} 
                    color="#757575"/>
                </View>
                <View style={styles.button}>
                    <Button title="Delete" 
                    color="#e53935"
                    onPress={goBack} />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    buttons:{
        flexDirection:'row',
        justifyContent: 'space-between'
    },

    button:{
        width:'45%'
    },
});