import { Card, KeyValue } from "@/design";
import { formatDate } from "@/utils";
import { addDays } from "date-fns";
import { Button, Text, VStack } from "native-base";
import React from "react";
import { BankConnection as BankConnectionType } from "../../types";
import ConnectionStatus from "./ConnectionStatus";

interface Props {
  bankConnection?: BankConnectionType;
  onConnect: () => void;
  onDisconnect: () => void;
}

const BankConnection: React.FC<Props> = ({
  bankConnection,
  onConnect,
  onDisconnect,
}) => {
  return (
    <Card space="3">
      <VStack>
        <Text fontSize="h3" fontWeight="bold">
          Bank connection
        </Text>
        {bankConnection && <ConnectionStatus status="SUCCESS" />}
      </VStack>
      {bankConnection ? (
        <BankConnectionTrue
          bankConnection={bankConnection}
          onDisconnect={onDisconnect}
        />
      ) : (
        <BankConnectionFalse onConnect={onConnect} />
      )}
    </Card>
  );
};

const BankConnectionTrue: React.FC<
  Pick<Props, "bankConnection" | "onDisconnect">
> = ({ bankConnection, onDisconnect }) => {
  const creationDate = new Date(bankConnection?.created || "");

  return (
    <VStack space="4">
      <VStack space="0.5">
        <Text fontWeight="semibold" fontSize="large">
          {bankConnection?.name}
        </Text>
        <KeyValue
          title={`${bankConnection?.product}:`}
          value={bankConnection?.iban}
        />
        <KeyValue
          title="Valid until:"
          value={formatDate(addDays(creationDate, 90))}
        />
      </VStack>
      <Button onPress={onDisconnect} colorScheme="error">
        Disconnect
      </Button>
    </VStack>
  );
};

const BankConnectionFalse: React.FC<Pick<Props, "onConnect">> = ({
  onConnect,
}) => {
  return (
    <VStack space="4">
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
        convallis lectus in leo iaculis ullamcorper. Quisque at metus lacus. Sed
        vestibulum ante eu augue congue, id sagittis magna eleifend.
      </Text>
      <Button onPress={onConnect}>Connect</Button>
    </VStack>
  );
};

export default BankConnection;
