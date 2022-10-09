import { Card, CardTitle } from "@/design";
import { Button, FormControl, Input, VStack } from "native-base";
import { Controller, useForm } from "react-hook-form";
import React from "react";
import { LoginForm, loginFormSchema } from "../types/Form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigation } from "@react-navigation/native";
import { RootStackNavigationProps } from "@/features/navigator/types/RootStackNavigation";

const LoginCard: React.FC = () => {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<LoginForm>({
    resolver: yupResolver(loginFormSchema),
  });

  const navigate = useNavigation<RootStackNavigationProps>();

  const handleLogin = handleSubmit((values) => {
    console.log(values);
  });

  const handleRegister = () => {
    navigate.navigate("Register");
  };

  return (
    <Card space="4">
      <VStack space="3">
        <CardTitle>Login</CardTitle>
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
        <Button onPress={handleLogin}>Login</Button>
        <Button colorScheme="secondary" onPress={handleRegister}>
          Register
        </Button>
      </VStack>
    </Card>
  );
};

export default LoginCard;
