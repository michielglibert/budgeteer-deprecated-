import { HStack, Text, VStack } from "native-base";
import React from "react";
import { formatDate, formatTime } from "@/utils";
import { Card } from "@/design";

interface Props {
  title: string;
  dateTime: Date;
  amount: number;
}

const SingleTransaction: React.FC<Props> = ({ title, dateTime, amount }) => {
  return (
    <Card
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      space="3"
    >
      <VStack>
        <Text fontWeight="medium">{title}</Text>
        <Text fontSize="xs" color="gray.400">
          <>
            {formatDate(dateTime)} - {formatTime(dateTime)}
          </>
        </Text>
      </VStack>
      <Text fontWeight="medium" fontSize="large" color="error.500">
        - €{amount}
      </Text>
    </Card>
  );
};

export default SingleTransaction;
