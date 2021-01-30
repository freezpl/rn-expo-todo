import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'

export const Todo = ({title, id, onRemove, onOpen}) => {

    return (
        <TouchableOpacity activeOpacity={.5} 
            onPress={()=>{onOpen(id)}}
            onLongPress={()=>{onRemove(id)}}>
            <View style={styles.todo}>
                <Text style={styles.text}>{title}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    todo: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        borderWidth: 1,
        borderColor: '#eee',
        borderRadius: 5,
        marginBottom: 10
    },
    text: {
        fontSize: 20
    },
});