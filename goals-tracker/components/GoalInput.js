import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

export default function GoalInput({ onAddGoal }) {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoal() {
    onAddGoal(enteredGoalText);
    setEnteredGoalText("");
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Enter your awesome goal..."
        style={styles.textInput}
        onChangeText={goalInputHandler}
        value={enteredGoalText}
      />
      <View style={styles.buttonContainer}>
        <Button title="Add" onPress={addGoal} color="#6A5ACD" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#1F1F1F",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 5,
  },
  textInput: {
    flex: 1,
    borderWidth: 2,
    borderColor: "#6A5ACD",
    borderRadius: 10,
    padding: 10,
    marginRight: 10,
    color: "white",
    backgroundColor: "#2B2B2B",
    fontSize: 16,
  },
  buttonContainer: {
    backgroundColor: "#6A5ACD",
    borderRadius: 8,
    overflow: "hidden",
  },
});
