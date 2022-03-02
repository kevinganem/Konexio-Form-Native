// --------------------------------------------------------------------------- //
// --------------------------------------------------------------------------- //
// --------------------------------------------------------------------------- //
// --------------------------      FORM.JS     ------------------------------- //
// --------------------------------------------------------------------------- //
// --------------------------------------------------------------------------- //
// --------------------------------------------------------------------------- //

// REACT
import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
// REACT-NATIVE
import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import Modal from "react-native-modal";

export default function Form() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const isLogged = useState(false);
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: "onBlur" });

  const onSubmit = (data) => {
    console.log(data);
    isLogged(true);
  };

  return (
    <>
      <View style={styles.centeredView}>
        <Controller
          control={control}
          name="Email"
          render={({ field: { onChange, value, onBlur } }) => (
            <TextInput
              style={{
                borderWidth: 1,
                width: 200,
                padding: 5,
                borderRadius: 5,
                borderColor: "lightgrey",
              }}
              placeholder="Enter your email"
            />
          )}
          rules={{
            required: {
              value: true,
              message: "Field is required!",
            },
            pattern: {
              value: "[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$",
              message: "Email invalid",
            },
          }}
        />
        <Controller
          control={control}
          name="Password"
          render={({ field: { onChange, value, onBlur } }) => (
            <TextInput
              style={{
                borderWidth: 1,
                width: 200,
                padding: 5,
                borderRadius: 5,
                borderColor: "lightgrey",
              }}
              type="password"
              placeholder="Enter your password"
            />
          )}
          rules={{
            required: {
              value: true,
              message: "Field is required!",
            },
            pattern: {
              value:
                "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[ -/:-@[-`{-~]).{6,64}$",
              message: "Password invalid",
            },
          }}
        />

        <Button
          title="Connect"
          color="#f194ff"
          onPressOut={handleSubmit(onSubmit)}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    alignItems: "center",
  },
});
