import { View, Text } from "react-native";

function PrimaryButton({ Children }) {
  return (
    <View>
      <Text>{Children}</Text>
    </View>
  );
}

export default PrimaryButton;
