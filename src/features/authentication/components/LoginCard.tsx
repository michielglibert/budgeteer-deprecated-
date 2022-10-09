import { Card, CardTitle } from "@/design";
import { Button, FormControl, Input, Text, VStack } from "native-base";
import { Controller, useForm } from "react-hook-form";
import React, { useState } from "react";
import { LoginForm, loginFormSchema } from "../types/Form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigation } from "@react-navigation/native";
import { RootStackNavigationProps } from "@/features/navigator/types/RootStackNavigation";
import auth, { FirebaseAuthTypes } from "@react-native-firebase/auth";

const LoginCard: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [apiError, setApiError] = useState<string>();

  const {
    control,
    formState: { errors, isSubmitting },
    handleSubmit,
  } = useForm<LoginForm>({
    resolver: yupResolver(loginFormSchema),
  });

  const navigate = useNavigation<RootStackNavigationProps>();

  const handleLogin = handleSubmit(async (values) => {
    setIsLoading(true);
    try {
      await auth().signInWithEmailAndPassword(values.email, values.password);
    } catch (e) {
      const errorObject = e as FirebaseAuthTypes.NativeFirebaseAuthError;
      const trimmedMessage = errorObject.message.split("]")[1].trim();
      setApiError(trimmedMessage);
      setIsLoading(false);
    }
  });

  const handleRegister = () => {
    navigate.navigate("Register");
  };

  return (
    <Card space="4">
      <VStack space="3">
        <CardTitle>Login</CardTitle>
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
      </VStack>
      <VStack space="2">
        <Button onPress={handleLogin} isLoading={isSubmitting}>
          Login
        </Button>
        <Button colorScheme="secondary" onPress={handleRegister}>
          Register
        </Button>
      </VStack>
    </Card>
  );
};

export default LoginCard;
