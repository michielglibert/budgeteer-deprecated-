import { Card, ScreenLayout } from "@/design";
import { Button, FormControl, Input } from "native-base";
import React, { useLayoutEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { BudgetForm, budgetSchema } from "../types";
import { yupResolver } from "@hookform/resolvers/yup";
import { useBudget, useBudgetMutation } from "../api";
import LoadingScreen from "@/components/LoadingScreen";

export const SettingsBudgetScreen: React.FC = () => {
  const { data: budgetObject, isLoading } = useBudget();
  const { mutateAsync: setBudget } = useBudgetMutation();

  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<BudgetForm>({
    defaultValues: {
      budget: budgetObject?.budget || 500,
    },
    resolver: yupResolver(budgetSchema),
  });

  const handleSave = handleSubmit(async ({ budget }) => {
    await setBudget({ ...budgetObject!, budget });
  });

  useLayoutEffect(() => {
    if (!isLoading) reset({ ...budgetObject });
  }, [isLoading]);

  if (isLoading) return <LoadingScreen />;

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
