import { TextInput, View, StyleSheet } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

function StartGameScreen() {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        maxLength={2}
        keyboardType="number-pad"
        placeholder="--"
        placeholderTextColor="#ddd"
      />
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonWrapper}>
          <PrimaryButton>Reset</PrimaryButton>
        </View>
        <View style={styles.buttonWrapper}>
          <PrimaryButton>Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  );
}

export default StartGameScreen;

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 100,
    marginHorizontal: 24,
    borderRadius: 16,
    padding: 24,
    backgroundColor: "#4e0329",
    elevation: 8, // enhanced shadow for Android

    // enhanced shadow for iOS
    shadowColor: "black",
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 8,
    shadowOpacity: 0.4,
    alignItems: "center",
  },
  textInput: {
    height: 60,
    fontSize: 36,
    borderBottomColor: "#ddb52f",
    borderBottomWidth: 3,
    color: "#ddb52f",
    marginVertical: 16,
    fontWeight: "bold",
    width: 60,
    textAlign: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
    marginTop: 16,
    justifyContent: "space-between",
    width: "80%",
  },
  buttonWrapper: {
    flex: 1,
    marginHorizontal: 8,
  },
});
