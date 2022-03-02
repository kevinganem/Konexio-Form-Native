// --------------------------------------------------------------------------- //
// --------------------------------------------------------------------------- //
// --------------------------------------------------------------------------- //
// --------------------------      HOME.JS     ------------------------------- //
// --------------------------------------------------------------------------- //
// --------------------------------------------------------------------------- //
// --------------------------------------------------------------------------- //

// REACT

// REACT-NATIVE
import { SafeAreaView, StyleSheet, Text } from "react-native";
import { StatusBar } from "expo-status-bar";
// COMPONENTS

export default function Home({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.text}>Welcome!</Text>
    </SafeAreaView>
  );
}

// CSS PART

const styles = StyleSheet.create({
  container: {
    marginBottom: "auto",
    marginTop: "auto",
  },
  text: {
    textAlign: "center",
    fontSize: 80,
  },
});
