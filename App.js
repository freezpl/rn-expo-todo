import React, { useState } from 'react';
import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native';
import { MainScreen } from './screens/MainScreen';
import { TodoScreen } from './screens/TodoScreen';
import { Navbar } from './src/Navbar';

export default function App() {

  const [todoId, setTodoId] = useState(null);
  const [todos, setTodos] = useState([
    {id: '1', title: "Learn react"},
    {id: '2', title: "Write App"},
  ]);

  const addTodo = (title) => {
    setTodos(prev => [...prev,
    {
      id: Date.now().toString(),
      title
    }
    ])
  }

  const removeTodo = (id) => {
    setTodos(prev => prev.filter((todo)=> todo.id !== id))
  }

  let content = (<MainScreen todos={todos} addTodo={addTodo} removeTodo={removeTodo} 
    openTodo={setTodoId} />);

  if(todoId){
    const selectedTodo = todos.find(todo => todo.id === todoId);
    content = (<TodoScreen todo={selectedTodo} goBack={()=>setTodoId(null)} />);
  }

  return (
    <View>
      <Navbar title="ToDo App" />
      <View style={styles.container}>
        {content}

        {/* <ScrollView>
          {todos.map(todo => (<Todo key={todo.id} title={todo.title} />))}
        </ScrollView> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 20
  },
});