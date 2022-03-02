// --------------------------------------------------------------------------- //
// --------------------------------------------------------------------------- //
// --------------------------------------------------------------------------- //
// --------------------------      FORM.JS     ------------------------------- //
// --------------------------------------------------------------------------- //
// --------------------------------------------------------------------------- //
// --------------------------------------------------------------------------- //

// REACT
import { useState } from "react";
import * as React from "react";
// REACT-NATIVE
import { StyleSheet, Text, View, Button, TextInput, Alert } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// FORM
import { Formik } from "formik";
import * as yup from "yup";

export default function Form({ navigation }) {
  const [isLogged, setIsLogged] = useState(false);

  const reviewSchema = yup.object({
    email: yup
      .string()
      .email("Invalid email")
      .required("Required")
      .min(6, "At least 6 characters"),
    password: yup.string().required("Required").min(6, "At least 6 characters"),
  });

  const onSubmit = (data) => {
    console.log(data);
    setIsLogged((prev) => !prev);
    console.log(setIsLogged);
    Alert.alert("Connected", "Welcome!", [
      {
        text: "Home",
        onPress: () => {
          console.log("OK Pressed");
          navigation.navigate("Home");
        },
      },
      {
        text: "Disconnect",
        onPress: () => {
          console.log("Disconnect Pressed");
          setIsLogged((prev) => !prev);
          navigation.navigate("Login");
        },
        style: "cancel",
      },
    ]);
  };

  return isLogged ? (
    <View style={styles.centeredView}>
      <Button
        title="Disconnect"
        color="red"
        onPress={() => {
          setIsLogged((prev) => !prev);
          navigation.navigate("Login");
        }}
      />
    </View>
  ) : (
    <>
      <View style={styles.centeredView}>
        <View style={styles.form}>
          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={reviewSchema}
            onSubmit={(values) => {
              onSubmit(values);
            }}
          >
            {(props) => (
              <View>
                <Text style={styles.text}>E-mail</Text>
                <View style={styles.input}>
                  <TextInput
                    style={{
                      borderWidth: 1,
                      width: 200,
                      padding: 5,
                      borderRadius: 5,
                      borderColor: "lightgrey",
                    }}
                    placeholder="Enter your email"
                    onChangeText={props.handleChange("email")}
                    value={props.values.email}
                  />
                </View>
                {props.touched.email && props.errors.email ? (
                  <Text style={styles.textError}>{props.errors.email}</Text>
                ) : null}
                <Text style={styles.text}>Password</Text>
                <View style={styles.input}>
                  <TextInput
                    style={{
                      borderWidth: 1,
                      width: 200,
                      padding: 5,
                      borderRadius: 5,
                      borderColor: "lightgrey",
                    }}
                    placeholder="Enter your password"
                    onChangeText={props.handleChange("password")}
                    value={props.values.password}
                  />
                </View>
                {props.touched.password && props.errors.password ? (
                  <Text style={styles.textError}>{props.errors.password}</Text>
                ) : null}
                <Button
                  title="Connect"
                  color="blue"
                  onPress={props.handleSubmit}
                />
              </View>
            )}
          </Formik>
        </View>
      </View>
    </>
  );
}

// CSS PART

const styles = StyleSheet.create({
  centeredView: {
    alignItems: "center",
  },
  textError: {
    color: "red",
    textAlign: "center",
    marginBottom: 10,
  },
  form: {
    borderWidth: 1,
    borderColor: "lightgrey",
    padding: 10,
  },
  input: {
    margin: 10,
  },
  text: {
    marginTop: 10,
    textAlign: "center",
    fontSize: 15,
    fontWeight: "bold",
  },
});
