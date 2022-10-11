import { Card, CardTitle } from "@/design";
import { Button, FormControl, Input, Text, VStack } from "native-base";
import { Controller, useForm } from "react-hook-form";
import React, { useState } from "react";
import { RegisterForm, registerFormSchema } from "../types/Form";
import { yupResolver } from "@hookform/resolvers/yup";
import auth, { FirebaseAuthTypes } from "@react-native-firebase/auth";
import firestore from "@react-native-firebase/firestore";

const RegisterCard: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [apiError, setApiError] = useState<string>();

  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<RegisterForm>({
    resolver: yupResolver(registerFormSchema),
  });

  const handleRegister = handleSubmit(async (values) => {
    setIsLoading(true);
    try {
      const creds = await auth().createUserWithEmailAndPassword(
        values.email,
        values.password
      );
      await firestore().collection("users").doc(creds.user.uid).set({
        email: values.email,
      });
    } catch (e) {
      const errorObject = e as FirebaseAuthTypes.NativeFirebaseAuthError;
      console.log(errorObject);
      if (errorObject.message) {
        const trimmedMessage = errorObject.message.split("]")[1].trim();
        setApiError(trimmedMessage);
      } else {
        setApiError("Something went wrong.");
      }
      setIsLoading(false);
    }
  });

  return (
    <Card space="4">
      <VStack space="3">
        <CardTitle>Register</CardTitle>
        {apiError && (
          <Text textAlign="center" color="error.500">
            {apiError}
          </Text>
        )}
        <FormControl isInvalid={!!errors.email}>
          <FormControl.Label>Email</FormControl.Label>
          <Controller
            name="email"
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                placeholder="Email"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            )}
          />
          <FormControl.ErrorMessage>
            {errors.email?.message}
          </FormControl.ErrorMessage>
        </FormControl>
        <FormControl isInvalid={!!errors.password}>
          <FormControl.Label>Password</FormControl.Label>
          <Controller
            name="password"
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                placeholder="Password"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                type="password"
              />
            )}
          />
          <FormControl.ErrorMessage>
            {errors.password?.message}
          </FormControl.ErrorMessage>
        </FormControl>
        <FormControl isInvalid={!!errors.repeatPassword}>
          <FormControl.Label>Repeat password</FormControl.Label>
          <Controller
            name="repeatPassword"
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                placeholder="Repeat password"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                type="password"
              />
            )}
          />
          <FormControl.ErrorMessage>
            {errors.repeatPassword?.message}
          </FormControl.ErrorMessage>
        </FormControl>
      </VStack>
      <VStack space="2">
        <Text fontSize="xs" color="gray.400">
          By registering you agree to the terms and conditions
        </Text>
        <Button onPress={handleRegister} isLoading={isLoading}>
          Register
        </Button>
      </VStack>
    </Card>
  );
};

export default RegisterCard;
