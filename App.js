// --------------------------------------------------------------------------- //
// --------------------------------------------------------------------------- //
// --------------------------------------------------------------------------- //
// --------------------------      APP.JS     -------------------------------- //
// --------------------------------------------------------------------------- //
// --------------------------------------------------------------------------- //
// --------------------------------------------------------------------------- //

// REACT
import React from "react";

// REACT-NATIVE
import { StatusBar } from "expo-status-bar";
import { StyleSheet, SafeAreaView } from "react-native";

// COMPONENTS
import Form from "./components/Form";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <Form />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: "auto",
    marginTop: "auto",
  },
});
