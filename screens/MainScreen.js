import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import { AddTodo } from '../src/AddTodo';
import { Todo } from '../src/Todo';

export const MainScreen = ({ addTodo, todos, removeTodo, openTodo }) => {
    return (
        <View style={styles.navbar}>
            <AddTodo onSubmit={addTodo} />

            <FlatList
                keyExtractor={item => item.id.toString()}
                data={todos}
                renderItem={({ item }) => (<Todo title={item.title}
                    id={item.id}
                    onRemove={(id) => removeTodo(id)}
                    onOpen={(id) => openTodo(id)}
                />)}
            />
        </View>
    )
}

const styles = StyleSheet.create({

});