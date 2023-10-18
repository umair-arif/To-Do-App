import { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";
const TodoInput = (props) => {
  const [enteredTodoText, setEnteredTodoText] = useState("");
  function enterTodoText(enterText) {
    setEnteredTodoText(enterText);
  }
  function onPress() {
    props.onTodoAdded(enteredTodoText);
    setEnteredTodoText("");
  }
  return (
    <View style={styles.flexForTodo}>
      <TextInput
        style={styles.textInput}
        onChangeText={enterTodoText}
        placeholder="Add Your ToDo"
        value={enteredTodoText}
      />
      <Button title="Add ToDo" color={"#FF0079FF"} onPress={onPress} />
    </View>
  );
};

export default TodoInput;
const styles = StyleSheet.create({
  flexForTodo: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 20,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
    marginBottom: 20,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "75%",
    marginRight: 5,
    borderRadius: 5,
    padding: 8,
    borderRadius: 200,
    fontSize: 20,
    paddingLeft: 20,
    color: "#FF0079FF",
  },
});
