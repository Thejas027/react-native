// import { StatusBar } from "expo-status-bar";
// import {
//   Button,
//   StyleSheet,
//   Text,
//   TextInput,
//   View,
//   FlatList,
// } from "react-native";
// import { useState } from "react";

// export default function App() {
//   const [enteredGoalText, setEnteredGoalText] = useState("");
//   const [courseGoals, setCourseGoals] = useState([]);

//   function goalInputHandler(enteredText) {
//     setEnteredGoalText(enteredText);
//   }

//   function addGoalHandler() {
//     if (enteredGoalText.trim() === "") return;
//     setCourseGoals((currentCourseGoals) => [
//       ...currentCourseGoals,
//       { id: Math.random().toString(), text: enteredGoalText },
//     ]);
//     setEnteredGoalText("");
//   }

//   return (
//     <View style={styles.appContainer}>
//       <StatusBar style="light" />
//       <Text style={styles.title}>🎯 Goal Tracker</Text>
//       <View style={styles.inputContainer}>
//         <TextInput
//           placeholder="Enter your awesome goal..."
//           style={styles.textInput}
//           onChangeText={goalInputHandler}
//           value={enteredGoalText}
//         />
//         <View style={styles.buttonContainer}>
//           <Button title="Add" onPress={addGoalHandler} color="#6A5ACD" />
//         </View>
//       </View>
//       <FlatList
//         style={styles.goalsContainer}
//         data={courseGoals}
//         keyExtractor={(item) => item.id}
//         renderItem={({ item }) => (
//           <View style={styles.goalItem}>
//             <Text style={styles.goalText}>{item.text}</Text>
//           </View>
//         )}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   appContainer: {
//     flex: 1,
//     backgroundColor: "#121212",
//     paddingTop: 50,
//     paddingHorizontal: 16,
//   },
//   title: {
//     fontSize: 32,
//     fontWeight: "bold",
//     color: "#FF6347",
//     textAlign: "center",
//     marginBottom: 20,
//   },
//   inputContainer: {
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "space-between",
//     marginBottom: 20,
//     padding: 10,
//     borderRadius: 10,
//     backgroundColor: "#1F1F1F",
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.5,
//     shadowRadius: 4,
//     elevation: 5,
//   },
//   textInput: {
//     flex: 1,
//     borderWidth: 2,
//     borderColor: "#6A5ACD",
//     borderRadius: 10,
//     padding: 10,
//     marginRight: 10,
//     color: "white",
//     backgroundColor: "#2B2B2B",
//     fontSize: 16,
//   },
//   buttonContainer: {
//     backgroundColor: "#6A5ACD",
//     borderRadius: 8,
//     overflow: "hidden",
//   },
//   goalsContainer: {
//     flex: 1,
//     marginTop: 10,
//   },
//   goalItem: {
//     backgroundColor: "#2B2B2B",
//     padding: 15,
//     borderRadius: 10,
//     marginVertical: 8,
//     borderLeftWidth: 5,
//     borderLeftColor: "#FF6347",
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.3,
//     shadowRadius: 4,
//     elevation: 3,
//   },
//   goalText: {
//     color: "#F5F5F5",
//     fontSize: 16,
//     fontWeight: "bold",
//   },
// });

import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useState } from "react";
import GoalInput from "./components/GoalInput";
import GoalList from "./components/GoalList";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);

  function addGoalHandler(enteredGoalText) {
    if (enteredGoalText.trim() === "") return;
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { id: Math.random().toString(), text: enteredGoalText },
    ]);
  }

  return (
    <View style={styles.appContainer}>
      <StatusBar style="light" />
      <Text style={styles.title}>🎯 Goal Tracker</Text>
      <GoalInput onAddGoal={addGoalHandler} />
      <GoalList goals={courseGoals} />
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: "#121212",
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#FF6347",
    textAlign: "center",
    marginBottom: 20,
  },
});
