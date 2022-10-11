import { Card, ScreenLayout } from "@/design";
import { Button, FormControl, Input, useToast } from "native-base";
import React from "react";
import firestore from "@react-native-firebase/firestore";
import useAuth from "@/features/authentication/hooks/useAuth";
import { Controller, useForm } from "react-hook-form";
import { BudgetForm, budgetSchema } from "../types/Form";
import { yupResolver } from "@hookform/resolvers/yup";

export const SettingsBudgetScreen: React.FC = () => {
  const { user } = useAuth();
  const toast = useToast();

  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<BudgetForm>({
    defaultValues: {
      budget: 500,
    },
    resolver: yupResolver(budgetSchema),
  });

  const handleSave = handleSubmit(async ({ budget }) => {
    try {
      await firestore().collection("budgets").add({
        user_id: user?.uid,
        budget,
      });
      toast.show({
        description: "Saved",
        duration: 1500,
      });
    } catch (e) {
      console.error(e);
    }
  });

  return (
    <ScreenLayout title="Budget setup">
      <Card space="3">
        <FormControl isInvalid={!!errors.budget}>
          <FormControl.Label>Amount</FormControl.Label>
          <Controller
            control={control}
            name="budget"
            render={({ field: { value, onChange, ...field } }) => (
              <Input
                {...field}
                value={value.toString()}
                onChange={(val) => {
                  const text = val.nativeEvent.text;
                  const removedLeadingZero = text.replace(/^0*/, "");
                  const budgetNumber = parseInt(removedLeadingZero);
                  if (isNaN(budgetNumber)) {
                    onChange(0);
                  } else {
                    onChange(budgetNumber);
                  }
                }}
              />
            )}
          />
          <FormControl.ErrorMessage>
            {errors.budget?.message}
          </FormControl.ErrorMessage>
        </FormControl>
        <Button onPress={handleSave} isLoading={isSubmitting}>
          Save
        </Button>
      </Card>
    </ScreenLayout>
  );
};
