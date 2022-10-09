import { Card, CardTitle } from "@/design";
import { Button, FormControl, Input, VStack } from "native-base";
import { useForm } from "react-hook-form";
import React from "react";
import { LoginForm, loginFormSchema } from "../types/Form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigation } from "@react-navigation/native";
import { RootStackNavigationProps } from "@/features/navigator/types/RootStackNavigation";

const LoginCard: React.FC = () => {
  const {
    register,
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

  console.log(errors);

  return (
    <Card space="4">
      <VStack space="3">
        <CardTitle>Login</CardTitle>
        <FormControl>
          <FormControl.Label>Email</FormControl.Label>
          <Input {...register("email")} />
          <FormControl.ErrorMessage>{errors.email}</FormControl.ErrorMessage>
        </FormControl>
        <FormControl>
          <FormControl.Label>Password</FormControl.Label>
          <Input {...register("password")} type="password" />
          <FormControl.ErrorMessage>{errors.password}</FormControl.ErrorMessage>
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
