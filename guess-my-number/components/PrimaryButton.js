import { Pressable, Text, StyleSheet } from "react-native";

function PrimaryButton({ children, onPress }) {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{children}</Text>
    </Pressable>
  );
}

export default PrimaryButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#ddb52f",
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
    alignItems: "center",
  },
  buttonText: {
    color: "#4e0329",
    fontSize: 16,
    fontWeight: "bold",
  },
});
