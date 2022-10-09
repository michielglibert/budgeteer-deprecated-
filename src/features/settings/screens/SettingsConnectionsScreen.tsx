import { ScreenLayout } from "@/design";
import React, { useState } from "react";
import BankConnection from "../components/connections/BankConnection";
import { BankConnection as BankConnectionType } from "../types";

export const SettingsConnectionsScreen: React.FC = () => {
  const [bankConnection, setBankConnection] = useState<BankConnectionType>();

  const handleConnect = () => {
    setBankConnection({
      id: "dad9d815-0c57-4aa3-8485-eab43b0f6fbf",
      resourceId: "test",
      created: "2022-09-28T16:46:16.406365Z",
      iban: "BE96737038514905",
      name: "GLIBERT MICHIEL",
      product: "KBC Plus Account",
      status: "READY",
    });
  };

  const handleDisconnect = () => {
    setBankConnection(undefined);
  };

  return (
    <ScreenLayout title="Connections">
      <BankConnection
        bankConnection={bankConnection}
        onConnect={handleConnect}
        onDisconnect={handleDisconnect}
      />
    </ScreenLayout>
  );
};
