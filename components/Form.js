// --------------------------------------------------------------------------- //
// --------------------------------------------------------------------------- //
// --------------------------------------------------------------------------- //
// --------------------------      FORM.JS     ------------------------------- //
// --------------------------------------------------------------------------- //
// --------------------------------------------------------------------------- //
// --------------------------------------------------------------------------- //

// REACT
import React, { useState } from "react";
// REACT-NATIVE
import { StyleSheet, Text, View, Button, TextInput } from "react-native";
// FORM
import { Formik } from "formik";
import * as yup from "yup";

export default function Form() {
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
  };

  return isLogged ? (
    <View style={styles.centeredView}>
      <Button title="Connect" color="red" onPressOut={handleSubmit(onSubmit)} />
    </View>
  ) : (
    <>
      <View style={styles.centeredView}>
        <View style={styles.form}>
          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={reviewSchema}
            onSubmit={(values) => {
              console.log(values);
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
