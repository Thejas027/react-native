import React from "react";
import { FlatList, View, Text, StyleSheet, Pressable } from "react-native";

export default function GoalList({ goals, deleteGoalItem }) {
  return (
    <FlatList
      style={styles.goalsContainer}
      data={goals}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <Pressable onPress={() => deleteGoalItem(item.id)}>
          <View style={styles.goalItem}>
            <Text style={styles.goalText}>{item.text}</Text>
          </View>
        </Pressable>
      )}
    />
  );
}

const styles = StyleSheet.create({
  goalsContainer: {
    flex: 1,
    marginTop: 10,
  },
  goalItem: {
    backgroundColor: "#2B2B2B",
    padding: 15,
    borderRadius: 10,
    marginVertical: 8,
    borderLeftWidth: 5,
    borderLeftColor: "#FF6347",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 3,
  },
  goalText: {
    color: "#F5F5F5",
    fontSize: 16,
    fontWeight: "bold",
  },
});
