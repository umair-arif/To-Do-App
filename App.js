import { useState } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import TodoItems from "./components/TodoItems";
import TodoInput from "./components/TodoInput";

export default function App() {
  const [todosList, setTodosList] = useState([]);

  function addTodoText(enteredTodoText) {
    if (enteredTodoText != "") {
      setTodosList([
        ...todosList,
        { text: enteredTodoText, id: Math.random().toString() },
      ]);
    } else {
      alert("Please Enter Todo");
    }
  }
  function deleteHandler(id) {
    setTodosList(todosList.filter((todo) => todo.id != id));
  }
  return (
    <View style={styles.container}>
      <TodoInput onTodoAdded={addTodoText} />
      <FlatList
        style={styles.todosList}
        data={todosList}
        renderItem={(todoItem) => {
          return (
            <TodoItems text={todoItem.item.text} onDelete={deleteHandler} id={todoItem.item.id}/>
          );
        }}
        keyExtractor={(item, index) => {
          return item.id;
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },

  todosList: {
    height: "85%",
  },
});
