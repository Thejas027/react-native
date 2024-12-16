import React from "react";
import { FlatList, View, Text, StyleSheet, Pressable } from "react-native";

export default function GoalList({ goals, deleteGoalItem }) {
  return (
    <FlatList
      style={styles.goalsContainer}
      data={goals}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <Pressable
          android_ripple={{ color: "#FF6347" }}
          onPress={() => deleteGoalItem(item.id)}
          style={({ pressed }) => [
            styles.goalItem,
            pressed && styles.pressedItem,
          ]}
        >
          <Text style={styles.goalText}>{item.text}</Text>
        </Pressable>
      )}
    />
  );
}

const styles = StyleSheet.create({
  goalsContainer: {
    flex: 1,
    marginTop: 10,
    paddingHorizontal: 10,
  },
  goalItem: {
    backgroundColor: "#333",
    padding: 16,
    borderRadius: 8,
    marginVertical: 8,
    borderLeftWidth: 5,
    borderLeftColor: "#FF6347",
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  pressedItem: {
    opacity: 0.8,
    backgroundColor: "#444", 
  },
  goalText: {
    color: "#F5F5F5",
    fontSize: 16,
    fontWeight: "bold",
  },
});
