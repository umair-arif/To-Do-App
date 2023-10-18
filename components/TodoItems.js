import { Pressable, StyleSheet, Text } from "react-native";
const TodoItems = (props) => {
  function deleteHandler() {
    props.onDelete(props.id);
  }
  return (
    <Pressable onPress={deleteHandler}>
      <Text style={styles.todo}>{props.text}</Text>
    </Pressable>
  );
};

export default TodoItems;
const styles = StyleSheet.create({
  todo: {
    borderWidth: 1,
    borderColor: "#cccccc",
    marginVertical: 5,
    padding: 10,
    fontSize: 20,
    textAlign: "center",
    backgroundColor: "#FF0079FF",
    color: "white",
    borderRadius: 200,
  },
});
