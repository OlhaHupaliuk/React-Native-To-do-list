import {
  StyleSheet,
  TextInput,
  Text,
  View,
  Button,
  ScrollView,
} from "react-native";
import { useState } from "react";
export default function App() {
  const [goal, setGoal] = useState();
  const [goalsList, setGoalList] = useState([]);
  function goalInputHandler(text) {
    setGoal(text);
  }
  function addGoalHandler() {
    setGoalList((prev) => {
      return [...prev, goal];
    });
    setGoal("");
  }
  function handleDelete() {}

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={goal}
          placeholder="Enter your goal"
          onChangeText={goalInputHandler}
        />
        <Button title="Add Goal" onPress={addGoalHandler} />
      </View>

      <View style={styles.goalsContainer}>
        <ScrollView>
          {goalsList.map((goal, index) => {
            return (
              <Text onPress={() => handleDelete(index)} style={styles.goalItem}>
                {goal}
              </Text>
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    backgroundColor: "white",
    paddingHorizontal: 16,
    height: "100%",
    paddingTop: 60,
    display: "flex",
    gap: 40,
  },
  inputContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingBottom: 40,
    gap: 5,
    borderBottomColor: "#c7c7c7",
    borderBottomWidth: 1,
  },
  input: {
    width: "70%",
    borderWidth: 1,
    borderColor: "#c7c7c7",
    padding: 12,
    borderRadius: 10,
    fontSize: 18,
  },
  button: {
    borderWidth: 5,
    borderColor: "red",
  },
  goalsContainer: {
    flex: 5,
  },
  goalItem: {
    margin: 8,
    color: "white",
    padding: 10,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
    fontSize: 18,
  },
});
