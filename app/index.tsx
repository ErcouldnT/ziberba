import { Code } from "lucide-react-native";
import { Text, View, SafeAreaView } from "react-native";

export default function Index() {
  return (
    <SafeAreaView className="bg-purple-300 flex-1 justify-center items-center">
      <Text>Merhaba</Text>
      <Code />
    </SafeAreaView>
  );
}
